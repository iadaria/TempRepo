module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      envNanme: 'APP_ENV',
      moduleName: '@env',
      path: '.env'
    }],
    ['module-resolver',
      {
        extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
        root: ['.'],
        alias: {
          '@src': './src',
          '@config': './src/6_shared/config',
          '@lib': './src/6_shared/lib',
          '@features': './src/4_features',
          '@screens': './scrc/2_screens'

        }
      }
    ],
    'transform-dirname-filename'
  ]
};
