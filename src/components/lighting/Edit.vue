<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Edit lighting {{item.name}}</h3>
        <form
          @submit="onSubmit"
          @reset="onReset">


          <div class="form-row">
            <div class="form-group col">
              <label for="name">Name</label>
              <input
                v-model="form.name"
                required
                class="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
              >
            </div>
          </div>
          <div class="row">
            <div class="form-group col">
              <label for="description">Description</label>
              <input
                v-model="form.description"
                required
                class="form-control"
                id="description"
                name="description"
                type="text"
                placeholder="Enter description"
              >
            </div>
          </div>


          <button type="submit" class="btn btn-primary text-white">Submit</button>
          <button type="reset" class="btn btn-danger text-white">Reset</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "editLighting",
    props: ['item'],
    data() {
      return {
        form: {
          id: '',
          name: '',
          description: '',
        }
      }
    },
    methods: {
      onSubmit(evt){
        evt.preventDefault()
        let payload = this.form
        this.$store.dispatch("updateLighting", payload)
        .then(() => {
          this.$swal(`${this.form.name} successfully updated`)
        }).catch(() => {
          this.$swal('Something went wrong')
        })
      },
      onReset(evt){
        this.form.name = ''
        this.form.description = ''
        this.$emit('createMode')
        this.$swal('Reset Form')
      },
      setVals(item){
        this.form.id = item.id
        this.form.name = item.name
        this.form.description = item.description
      }
    },
    mounted() {
      this.setVals(this.item)
      this.$swal(`${this.item.name} Successfully loaded`)
    },
    watch: {
      item: function (newVal, oldVal) {
        this.setVals(newVal)
        this.$swal(`${oldVal.name} replaced with ${this.item.name} successfully loaded`)
      }
    }
  }
</script>

<style scoped>

</style>
