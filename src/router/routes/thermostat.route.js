export default [
    {
      name: 'thermostat',
      path: 'thermostat',
      component: () => import('../../views/home/thermostat/Index'),
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../../views/home/thermostat/Dashboard')
        }
      ]
    }
  ]
  