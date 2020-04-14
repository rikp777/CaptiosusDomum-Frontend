<template>
  <div id="app" class="mt-4">
    <router-view/>
  </div>
</template>
<script>
import { vito } from './config/init'

export default {
  name: 'App',
  components: {

  },
  mounted () {
    vito.mainIndex()
  }
}
</script>

<style lang="scss">
  @import "assets/scss/style.scss";
</style>
