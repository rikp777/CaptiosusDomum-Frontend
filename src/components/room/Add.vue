<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Add New Room</h3>
        <form @submit.prevent="onSubmit">
          <div class="form-row">
            <div class="form-group col">
              <label for="name">Name</label>
              <input
                v-model="form.name"
                class="form-control"
                id="name"
                name="name"
                type="text"
              >
            </div>
            <div class="form-group col">
              <label for="description">Description</label>
              <input
                v-model="form.description"
                class="form-control"
                id="description"
                name="description"
                type="text"
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary text-white">Save New Room</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addRoom",
    data() {
      return{
        form: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      onSubmit(){
        console.log(this.form);
        this.$store.dispatch("createRoom", this.form)
      },
      onReset(){
        this.form.name = ''
        this.form.description = ''
      }
    }
  }
</script>

<style scoped>

</style>
