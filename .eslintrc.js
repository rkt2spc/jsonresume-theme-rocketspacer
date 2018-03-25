// Maintain this file json compatible for possible future conversion
module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": "airbnb-base",
  "plugins": ["import"],
  "rules": {
    "arrow-parens": ["error", "always"],
    "camelcase": "off",
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": "off",
    "func-names": ["error", "as-needed"],
    "function-paren-newline": ["error", "consistent"],
    "key-spacing": ["error", {
      "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon",
        "mode": "strict"
      }
    }],
    "max-len": ["error", {
      "code": 120,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "no-plusplus": "off",
    "no-shadow": ["error", {
      "builtinGlobals": true,
      "allow": ["err", "next", "done", "cb", "callback"]
    }],
    "no-underscore-dangle": ["error", {
      "allow": ["_id"],
      "allowAfterThis": true,
      "allowAfterSuper": true
    }],
    "no-unused-vars": ["error", { "args": "none" }],
    "object-curly-newline": ["error", {
      "multiline": true,
      "consistent": true
    }],
    "object-shorthand": ["error", "consistent"],
    "operator-assignment": "off",
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],
    "quote-props": ["error", "consistent-as-needed"],
    "radix": ["error", "as-needed"],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["test/**", "tasks/**", "**/*.{test|spec}.js", "Gulpfile.js"]
    }]
  }
}
