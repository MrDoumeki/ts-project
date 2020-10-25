/*
 * @Author: your name
 * @Date: 2020-10-21 19:59:33
 * @LastEditTime: 2020-10-25 15:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgb(236, 171, 85)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};