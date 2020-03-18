export default {
  horizontalMenuAction (context, payload) {
    if (context.state.horizontalMenu) {
      context.commit('horizontalMenuCommit', false)
    } else {
      context.commit('horizontalMenuCommit', true)
    }
  },
  miniSidebarAction (context, payload) {
    return new Promise((resolve, reject) => {
      if (context.state.miniSidebarMenu) {
        context.commit('miniSidebarCommit', false)
        resolve(false)
      } else {
        context.commit('miniSidebarCommit', true)
        resolve(true)
      }
    })
  },
  authUserAction (context, payload) {
    context.commit('authUserCommit', payload)
  },
  addUserAction (context, payload) {
    context.commit('addUserCommit', payload)
  }
}
