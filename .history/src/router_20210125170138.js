import React from "react";
const routes = [

  //{
  //  path: '/production',
  //  component: () => <div>生产管理</div>,
  //  routes: [
      {
        path: '/production/planning',
        component: () => <div>计划工单</div>
      },
      {
        path: '/production/task',
        component: () => <div>生产任务</div>
      },
      {
        path: '/production/panel',
        component: () => <div>生产看板</div>
      },
      {
        path: '/production/sheet',
        component: () => <div>生产报表</div>
      },
      {
        path: '/production/order',
        component: () => <div>销售订单</div>
      },
      {
        path: '/production/history',
        component: () => <div>追溯</div>
      },
  //  ]
  //},
  //{
  //  path: '/material',
  //  component: () => <div>物料管理</div>,
  //  routes: [
      {
        path: '/material/request',
        component: () => <div>物料请求</div>
      },
      {
        path: '/material/task',
        component: () => <div>备料任务</div>
      },
      {
        path: '/material/account',
        component: () => <div>现有量查询</div>
      },
      {
        path: '/material/record',
        component: () => <div>记录查询</div>
      },
      {
        path: '/material/panel',
        component: () => <div>物料看板</div>
      },
      {
        path: '/material/sheet',
        component: () => <div>物料报表</div>
      },
  //  ]
  //},
  //{
  //  path: '/quality',
  //  component: () => <div>质量管理</div>,
  //  routes: [
      {
        path: '/quality/task',
        component: () => <div>质检任务</div>
      },
      {
        path: '/quality/panel',
        component: () => <div>质检看板</div>
      },
      {
        path: '/quality/sheet',
        component: () => <div>质检报表</div>
      },
  //  ]
  //},
  //{
  //  path: '/distribution',
  //  component: () => <div>物流管理</div>,
  //  routes: [
      {
        path: '/distribution/search',
        component: () => <div>物流查询</div>
      },
      {
        path: '/distribution/record',
        component: () => <div>记录查询</div>
      },
  //  ]
  //},
  //{
  //  path: '/equipment',
  //  component: () => <div>设备维护</div>,
  //  routes: [
      {
        path: '/equipment/state',
        component: () => <div>设备实况</div>
      },
      {
        path: '/equipment/task',
        component: () => <div>维护任务</div>
      },
      {
        path: '/equipment/request',
        component: () => <div>维护请求</div>
      },
      {
        path: '/equipment/management',
        component: () => <div>设备管理</div>
      },
      {
        path: '/equipment/panel',
        component: () => <div>设备看板</div>
      },
      {
        path: '/equipment/sheet',
        component: () => <div>设备报表</div>
      },
  //  ]
  //},
  {
    path: '/engine',
    component: () => <div>知识引擎</div>
  },
  {
    path: '/setting',
    component: () => <div>系统配置</div>
  },
  {
    path: '/esign',
    component: () => <div>电子标签</div>
  },
  {
    path: '/feedback',
    component: () => <div>意见与反馈</div>
  }
];
routes.forEach(item => (
  item.path = `/main${item.path}` 
))
export default routes;