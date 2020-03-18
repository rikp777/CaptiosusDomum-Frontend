export default {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getLighting: state => state.lighting,
    getLightings: state => state.lightings,
    getLightingCount: state => state.lightings.length
}