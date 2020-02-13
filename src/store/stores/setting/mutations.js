export default {
  horizontalMenuCommit (state, data) {
    state.horizontalMenu = data
  },
  miniSidebarCommit (state, data) {
    state.miniSidebarMenu = data
  },
  authUserCommit (state, data) {
    state.authUser = data
  },
  addUserCommit (state, data) {
    state.users.push(data)
  }
}
