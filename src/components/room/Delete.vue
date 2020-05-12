<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Delete Room</h3>
        <form>
          <div class="form-row">
            <div class="form-group col">
              <label for="room">Name</label>
              <input
                class="form-control"
                id="room"
                name="room"
                type="text"
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
    name: "addRoom"
  }
</script>

<style scoped>

</style>
