import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  horizontalMenu: false,
  miniSidebarMenu: false,
  authUser: {
    auth: false,
    authType: false,
    user: {}
  },
  users: [
    {
      id: 'sh46s546sdg564sdffs4hsd6fh',
      name: 'Admin Vito',
      mobileNo: null,
      email: 'admin@vito.com',
      profileImage: null,
      password: 'admin123'
    }
  ]
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
