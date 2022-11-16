const core = require('@actions/core');

try {
    const config_es = require("./config/config-es.json");
    const config_en = require("./config/config.json");
    const en_keys = parseObjectKeys(config_en)
    const es_keys = parseObjectKeys(config_es)
    let not_found_keys = []
    en_keys.forEach((key) => {
        if(!es_keys.includes(key)){
            not_found_keys.push(es_keys)
        }
    })

    if(not_found_keys.length > 0){
        let errorMessage = ``
        if(not_found_keys.length === 1){
            errorMessage += `Key: `
        }else {
            errorMessage += `Keys: `
        }
        errorMessage += JSON.stringify(...not_found_keys)
        errorMessage += ` not found in config-es.json.`
        core.setFailed(errorMessage)
    }else{
        core.summary('All keys are the same in both config files')
    }
} catch (error) {
    core.setFailed(error.message);
}
      
function parseObjectKeys(obj)
{
    let keys = []
    for(const key in obj){
        if(typeof obj[key] === 'object')
        {
            keys = [...keys,...Object.keys(obj[key])]
        }else{
            keys.push(key)
        }
    }
    return keys
}