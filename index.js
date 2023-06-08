module.exports = {
    "endOfLine": "lf",
    "singleQuote": true,
    "useTabs": false,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 120,
    "jsxSingleQuote": true,
    "arrowParens": "avoid",
    "proseWrap": "preserve",
    "overrides": [
        {
            "files": ['crowdin/messages.json', 'src/translations/*.json'],
            "options": {
                "tabWidth": 2,
            },
        },
    ],
}