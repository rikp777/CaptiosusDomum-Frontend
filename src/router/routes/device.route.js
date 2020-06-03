export default [
    {
      name: 'device',
      path: 'device',
      component: () => import('../../views/home/device/Index'),
      children: [
        {
          name: 'deviceEdit',
          path: 'edit',
          component: () => import('../../components/device/Edit')
        },
        {
            name: 'deviceAdd',
            path: 'add',
          component: () => import('../../components/device/Add')
        },
        {
          name: 'deviceDelete',
          path: 'delete',
          component: () => import('../../components/device/Delete')
        }
      ]
    }
  ]
