const presets = [
    [
        "@babel/presets-env",
        {
            useBuildIns: "usage",
            corejs: "3.17.3"
        }

    ]
]

module.exports = { presets }