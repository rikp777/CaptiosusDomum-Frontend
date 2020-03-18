export default {
    getProcessing: state => state.processing,
    getError: state => state.error,
    getThermostat: state => state.thermostat,
    getThermostats: state => state.thermostats,
    getThermostatCount: state => state.thermostat.length
}