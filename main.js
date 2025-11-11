const rules = [
    {
        "id": 1,
        "priority": 1,
        "action": {
            "type": "modifyHeaders",
            "requestHeaders": [
                {
                    "header": "User-Agent",
                    "operation": "set",
                    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
                }
            ]
        },
        "condition": {
            "urlFilter": "*",
            "resourceTypes": [
                "main_frame",
                "sub_frame",
                "xmlhttprequest"
            ]
        }
    }
];

chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: rules
});