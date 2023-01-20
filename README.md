## **Perform the following before updating the config-es.json or confign.json files**

1. update config files
2. Go to `.github\workflows\config_files.yml`
3. update the value for your repository
   `repository: amanueltsfy@assets`
4. update the value for ref with the branch name `ref: update-schema/notes`
5. update the value for `uses` with action name `Checking config keys` which is found in the root of the PR branch `uses: amanueltsfy/assets@main`
6. create a PR to `Focusbear/assets`
