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
          '@config': './src/shared/config',
          '@lib': './src/shared/lib',
          '@features': './src/features',
          '@screens': './scrc/screens'

        }
      }
    ],
    'transform-dirname-filename'
  ]
};
