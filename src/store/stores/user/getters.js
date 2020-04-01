export default {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getUser: state => state.user,
    getUsers: state => state.users,

    getUserCount: state => state.users.length,

    getUserByUid: state => (uid) => {
        return state.users.find(user => user.uid === uid)
    },
}