import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
  {
    path: '/production',
    component: () => <div>生产管理</div>,
    routes: [
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
        path: 'production/history',
        component: () => <div>追溯</div>
      }
    ]
  },
  {
    path: '/material',
    component: () => <div>物料管理</div>,
    routes: [
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
      }
    ]
  },
  {
    path: '/quality',
    component: () => <div>质量管理</div>,
    routes: [
      
    ]
  },
  {
    path: '/distribution'
  },
  {
    path: '/equipment'
  },
  {
    path: '/engine'
  },
  {
    path: '/setting'
  },
  {
    path: '/esign'
  },
  {
    path: '/feedback'
  }
]