<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">CaptiosusDomum</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'lightingDashboard' }">Lighting</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'thermostatDashboard' }">Thermostat</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <home-dashboard></home-dashboard>
  </div>
</template>
<script>
  import List from '../../components/menus/ListStyle1'
  import HomeDashboard from "./house/Dashboard";
  export default {
    name: 'NavBarStyle1',
    props: {
      homeURL: { type: Object, default: () => ({ name: 'layout1.dashboard' }) },
      title: { type: String, default: 'Dashboard' },
      horizontal: { type: Boolean, default: false },
      items: { type: Array }
    },
    components: {
      HomeDashboard,
      List
    },
    computed: {
    },
    data () {
      return {
      }
    },
    methods: {
      miniSidebar () {
        this.$emit('toggle')
      }
    }
  }
</script>
