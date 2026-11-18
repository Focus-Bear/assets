#!/bin/bash
# Kept as the entry point so existing local habits (`bash .github/workflows/check-json.sh`) still work.
exec python3 "$(dirname "$0")/check-config-json.py"
