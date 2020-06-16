export default [
    {
      name: 'climate',
      path: '/climate',
      component: () => import('../../views/home/climate/Index'),
      children: [
        {
          name: 'climateDashboard',
          path: 'dashboard',
          component: () => import('../../views/home/climate/Dashboard')
        },
        {
          name: 'climateEdit',
          path: 'edit',
          component: () => import('../../components/climate/Edit')
        },
        {
          name: 'climateAdd',
          path: 'add',
          component: () => import('../../components/climate/Add')
        },
        {
          name: 'climateDelete',
          path: 'delete',
          component: () => import('../../components/climate/Delete')
        }
      ]
    }
  ]
