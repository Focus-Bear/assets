#!/bin/bash

# Check if config.json is valid JSON
if ! jq empty ./config/config.json > /dev/null 2>&1; then
    echo "::error::Invalid JSON in config.json"
    exit 0
fi

# Extract keys from config.json
keys1=$(jq -r '.. | objects | keys_unsorted[]' ./config/config.json | sort | uniq)

# Check if config-es.json is valid JSON
if ! jq empty ./config/config-es.json > /dev/null 2>&1; then
    echo "::error::Invalid JSON in config-es.json"
    exit 0
fi

# Extract keys from config-es.json
keys2=$(jq -r '.. | objects | keys_unsorted[]' ./config/config-es.json | sort | uniq)

# Use 'comm' to find keys in config.json but not in config-es.json
missing_keys=$(comm -23 <(echo "$keys1") <(echo "$keys2"))

# Check if there are missing keys
if [ -n "$missing_keys" ]; then
    echo "::warning::The following keys are in config.json but missing in config-es.json:"
    echo "$missing_keys"
    exit 0
else
    echo "No missing keys in config-es.json"
fi
