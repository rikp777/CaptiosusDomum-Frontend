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
}

const getters = {
    horizontalMenuState: state => state.horizontalMenu,
    miniSidebarState: state => state.miniSidebarMenu,
    authUserState: state => state.authUser,
    usersState: state => state.users
}

const actions = {
    horizontalMenuAction(context, payload) {
        if (context.state.horizontalMenu) {
            context.commit('horizontalMenuCommit', false)
        } else {
            context.commit('horizontalMenuCommit', true)
        }
    },
    miniSidebarAction(context, payload) {
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
    authUserAction(context, payload) {
        context.commit('authUserCommit', payload)
    },
    addUserAction(context, payload) {
        context.commit('addUserCommit', payload)
    }
}

const mutations = {
    horizontalMenuCommit(state, data) {
        state.horizontalMenu = data
    },
    miniSidebarCommit(state, data) {
        state.miniSidebarMenu = data
    },
    authUserCommit(state, data) {
        state.authUser = data
    },
    addUserCommit(state, data) {
        state.users.push(data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}