<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Delete Room</h3>
        <form @submit.prevent="onSubmit">
          <div class="form-row">
            <div class="form-group col">
              <label for="roomid">Room id</label>
              <input
                v-model="form.roomid"
                class="form-control"
                id="roomid"
                name="roomid"
                type="number"
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary text-white">Delete Room</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "deleteRoom",
    data() {
      return{
        form: {
          roomid: ''
        }
      }
    },
    methods: {
      onSubmit(){
        console.log(this.form);
        this.$store.dispatch("deleteRoom", this.form)
      },
      onReset(){
        this.form.roomid = ''
      }
    }
  }
</script>

<style scoped>

</style>
