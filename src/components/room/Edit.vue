<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Edit Room</h3>
        <form>
          <div class="form-row">
            <div class="form-group col">
              <labal>Van:</labal>
              <label for="room">Name</label>
              <input
                class="form-control"
                id="room"
                name="room"
                type="text"
              >
            </div>
            <div class="form-group col">
              <labal>Naar:</labal>
              <label for="room">Name</label>
              <input
                class="form-control"
                id="room"
                name="room"
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
    name: "EditRoom"
  }
</script>

<style scoped>

</style>
