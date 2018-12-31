module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "modules": false,
        "targets": { "chrome": "49" }
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
