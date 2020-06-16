<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Climate Overview</h3>
      <template v-if="!isLoading || debug">
        <div v-if="debug">Debug MODE - Mock Data</div>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
            <td>
              <b-button
                size="xs"
                variant="primary"
                @click="updateMode(item)">
                Update
              </b-button>
              <b-button
                size="xs"
                variant="danger"
                @click="deleteMode(item)">
                Delete
              </b-button>
            </td>
          </tr>
          </tbody>
        </table>
      </template>
      <template v-else>
        <div class="card" v-if="error">
          <div class="card-body text-center">
            <h5 class="card-title">Failed to load data</h5>
            <button
              class="btn-sm btn-primary"
              @click="refreshList">
              Reload data
            </button>
          </div>
        </div>
        <div v-else>
          <div class="card-body text-center">
            <h5 class="card-title">Loading data...</h5>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ListClimate",
    data() {
      return {
        //Dit of toch nog iets van data te laten zien als het niet werkt
        debug: true,
      }
    },
    computed: {
      ...mapGetters({
        items: 'climates',
        isLoading: 'climateIsLoading',
        error: 'climateError'
      })
    },
    methods: {
      refreshList() {
        console.log("Climate Module - Refresh List")
        this.$store.dispatch('getAllClimates')
      },
      updateMode(item) {
        console.log("Climate Module - UpdateMode")
        this.$emit('updateMode', item)
      },
      deleteMode(item) {
        console.log("Climate Module - DeleteMode")
        this.$emit('deleteMode', item)
      }
    },
    mounted() {
      this.refreshList()
      if(this.debug){
        let items = [
          {
            id: 1,
            name: 'Woonkamer',
            description: 'blabla'
          },
          {
            id: 2,
            name: 'Slaapkamer',
            description: 'balbal'
          }
        ]
        this.$store.commit('setClimates', items)
      }
    }
  }
</script>
