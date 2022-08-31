import { defineConfig } from '@umijs/max';
const path = require('path');
const cesium = 'node_modules/cesium/Build/Cesium';
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

export default defineConfig({
  copy: [
    { from: path.join(cesiumSource, cesiumWorkers), to: 'dist/Workers' },
    { from: path.join(cesiumSource, 'Assets'), to: 'dist/Assets' },
    { from: path.join(cesiumSource, 'Widgets'), to: 'dist/Widgets' },
  ],
  // mfsu: {
  //   exclude: ['cesium'],
  // },
  // define: {
  //   CESIUM_BASE_URL: '/',
  // },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
