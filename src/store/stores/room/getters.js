export default {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getRoom: state => state.room,
    getRooms: state => state.rooms,
    getroomCount: state => state.lightings.length
}