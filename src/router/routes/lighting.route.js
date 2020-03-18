export default [
  {
    name: 'lighting',
    path: 'lighting',
    component: () => import('../../views/home/lighting/Index'),
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../../views/home/lighting/Dashboard')
      }
    ]
  }
]
