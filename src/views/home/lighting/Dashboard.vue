<template>
  <div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h2 class="card-title">Lighting Dashboard</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mb-4">


        <div v-if="deleteItem">
          <delete-item
            :item="item"
            @createMode="createItemListener"
            @reloadMode="reloadCompListener"
          ></delete-item>
        </div>


        <div v-if="!updateItem && !deleteItem">
          <create-item
            @reloadMode="reloadCompListener"
          ></create-item>
        </div>


        <div v-else-if="!deleteItem">
          <update-item
            :item="item"
            @createMode="createItemListener"
            @reloadMode="reloadCompListener"
          ></update-item>
        </div>


      </div>

      <div class="col">
        <list-item
          :key="reloadComp"
          @updateMode="updateItemListener"
          @deleteMode="deleteItemListener"
          @reloadMode="reloadCompListener"
        ></list-item>
      </div>
    </div>
  </div>
</template>
<script>
  import createItem from "../../../components/lighting/Add";
  import updateItem from "../../../components/lighting/Edit";
  import deleteItem from "../../../components/lighting/Delete";
  import listItem from "../../../components/lighting/List";
  export default {
    name: "LightingDashboard",
    components:{
      createItem,
      updateItem,
      deleteItem,
      listItem
    },
    data(){
      return {
        deleteItem: false,
        updateItem: false,
        item: Object,
        reloadComp: 0,
      }
    },
    methods:{
      updateItemListener(item){
        this.$swal(`Update Mode`)
        this.item = item
        this.deleteItem = false
        this.updateItem = true
      },
      reloadCompListener(){
        this.reloadComp += 1
      },
      createItemListener(){
        this.$swal('Create Mode')
        this.deleteItem = false
        this.updateItem = false
      },
      deleteItemListener(item){
        this.$swal('Delete Mode')
        this.item = item
        this.deleteItem = true
      }
    }
  }
</script>
