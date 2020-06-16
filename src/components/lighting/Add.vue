<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Add New Lighting</h3>
        <form>
          <div class="form-row">
            <div class="form-group col">
              <label for="name">Name</label>
              <input
                v-model="form.name"
                placeholder="Enter name"
                class="form-control"
                id="name"
                name="name"
                type="text"
                required
              >
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="description">Description</label>
              <input
                v-model="form.description"
                placeholder="Enter description"
                class="form-control"
                id="description"
                name="description"
                type="text"
                required
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary text-white">Save New Lighting</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addLighting",
    data() {
      return {
        form: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let payload = [this.form]
        console.log("Lighting Module - Create Data", payload)
        this.$store.dispatch("createClimate", payload)
          .then(() => {
            this.onReset();
            this.$swal('success filled', `${this.form.name} successfully created`, '')
          })
          .catch(() => {
            this.$swal('danger filled', 'Something went wrong', '')
          })
      },
      onReset(evt) {
        this.form.name = ''
        this.form.description = ''
      }
    }
  }
</script>
