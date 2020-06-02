export default [
    {
      name: 'room',
      path: 'room',
      component: () => import('../../views/home/room/Index'),
      children: [
        {
          name: 'roomDashboard',
          path: 'dashboard',
          component: () => import('../../views/home/room/Dashboard')
        },
        {
          name: 'roomView',
          path: 'view',
          component: () => import('../../components/room/View')
        },
        {
          name: 'roomEdit',
          path: 'edit',
          component: () => import('../../components/room/Edit')
        },
        {
          name: 'roomAdd',
          path: 'add',
          component: () => import('../../components/room/Add')
        },
        {
          name: 'roomDelete',
          path: 'delete',
          component: () => import('../../components/room/Delete')
        }
      ]
    }
  ]
