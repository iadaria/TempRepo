module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      envNanme: 'APP_ENV',
      moduleName: '@env',
      path: '.env'
    }]
  ]
};
