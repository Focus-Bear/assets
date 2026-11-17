#!/usr/bin/env python3
"""Fail CI when a config JSON file is invalid or repeats a key inside one object.

Duplicate keys are valid JSON to most parsers, which silently keep one value, so they
slip through jq and git merges (two string PRs adding the same key in different places
merge without a conflict). Some .NET parsers used by the Windows app throw on them.
Missing translations are reported as warnings only, matching the old check-json.sh.
"""
import glob
import json
import sys

CONFIG_GLOB = "config/**/*.json"
ENGLISH_CONFIG = "config/config.json"
TRANSLATED_CONFIGS = [
    "config/config-es.json",
    "config/config-de.json",
    "config/config-fr.json",
    "config/config-pl.json",
]


class DuplicateKeyCollector:
    def __init__(self):
        self.duplicates = []

    def __call__(self, pairs):
        seen = set()
        for key, _ in pairs:
            if key in seen:
                self.duplicates.append(key)
            seen.add(key)
        return dict(pairs)


def load_checked(path):
    """Return the parsed file, or None after printing errors."""
    collector = DuplicateKeyCollector()
    try:
        with open(path, encoding="utf-8") as handle:
            parsed = json.load(handle, object_pairs_hook=collector)
    except json.JSONDecodeError as error:
        print(f"::error file={path},line={error.lineno}::Invalid JSON: {error.msg}")
        return None
    if collector.duplicates:
        for key in sorted(set(collector.duplicates)):
            print(f"::error file={path}::Duplicate key \"{key}\" in the same object")
        return None
    return parsed


def flatten_keys(value, prefix=""):
    if not isinstance(value, dict):
        return {prefix}
    keys = set()
    for key, child in value.items():
        keys |= flatten_keys(child, f"{prefix}.{key}" if prefix else key)
    return keys


def warn_missing_translations(parsed_by_path):
    english = parsed_by_path.get(ENGLISH_CONFIG)
    if english is None:
        return
    english_keys = flatten_keys(english)
    for path in TRANSLATED_CONFIGS:
        translated = parsed_by_path.get(path)
        if translated is None:
            continue
        missing = sorted(english_keys - flatten_keys(translated))
        if missing:
            print(f"::warning file={path}::{len(missing)} keys in config.json are missing here")
            print("\n".join(f"  {key}" for key in missing))
        else:
            print(f"No missing keys in {path}")


def main():
    parsed_by_path = {}
    has_errors = False
    for path in sorted(glob.glob(CONFIG_GLOB, recursive=True)):
        parsed = load_checked(path)
        if parsed is None:
            has_errors = True
        else:
            parsed_by_path[path] = parsed
            print(f"OK {path}")
    warn_missing_translations(parsed_by_path)
    return 1 if has_errors else 0


if __name__ == "__main__":
    sys.exit(main())
