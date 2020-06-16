<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Sure you want to delete {{item.name}}</h3>
        <button
          class="btn-sm btn-danger"
          @click="deleteItem">
          Delete
        </button>
        <button
          class="btn-sm btn-success"
          @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "deleteClimate",
    props: ['item'],
    methods: {
      deleteItem(){
        let payload = this.item
        this.$store.dispatch('deleteClimate', payload.id)
        .then(() => {
          this.$swal('success filled', `Successfully deleted ${this.item.name}`, '')
          this.$emit('createMode')
          this.$emit('reloadMode')
        })
        .catch(() => {
          this.$swal('danger filled', 'Something went wrong', '')
        })
      },
      cancel(){
        this.$emit('createMode')
      }
    }
  }
</script>

<style scoped>

</style>
