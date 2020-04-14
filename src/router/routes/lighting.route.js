export default [
  {
    name: 'lighting',
    path: 'lighting',
    component: () => import('../../views/home/lighting/Index'),
    children: [
      {
        name: 'lightingDashboard',
        path: 'dashboard',
        component: () => import('../../views/home/lighting/Dashboard')
      },
      {
        name: 'lightingEdit',
        path: 'edit',
        component: () => import('../../components/lighting/Edit')
      },
      {
        name: 'lightingAdd',
        path: 'add',
        component: () => import('../../components/lighting/Add')
      }
    ]
  }
]
