// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);

    const {
        resolver: { sourceExts }
    } = defaultConfig;
    
    return {
        ...defaultConfig,
        transformer: {
            babelTransformerPath: require.resolve("react-native-sass-transformer")
        },
        resolver: {
            sourceExts: [...sourceExts, "scss", "sass"]
        }
    };
})();
