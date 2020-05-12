export default [
    {
      name: 'thermostat',
      path: 'thermostat',
      component: () => import('../../views/home/thermostat/Index'),
      children: [
        {
          name: 'thermostatDashboard',
          path: 'dashboard',
          component: () => import('../../views/home/thermostat/Dashboard')
        },
        {
          name: 'thermostatEdit',
          path: 'edit',
          component: () => import('../../components/thermostat/Edit')
        },
        {
          name: 'thermostatAdd',
          path: 'add',
          component: () => import('../../components/thermostat/Add')
        },
        {
          name: 'thermostatDelete',
          path: 'delete',
          component: () => import('../../components/thermostat/Delete')
        }
      ]
    }
  ]
