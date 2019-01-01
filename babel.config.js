module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "modules": false
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": true
            }
          }
        ]
      ]
    }
  }
}
