module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@images': './src/assets/images',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@theme': './src/theme',
          '@routes': './src/routes',
          '@network': './src/network',
          '@hooks': './src/hooks',
          '@app': './src/app',
          '@services': './src/services',
          '@slices': './src/slices',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'react-native-reanimated/plugin',
      // {
      //   relativeSourceLocation: true,
      // },
    ],
  ],
};
