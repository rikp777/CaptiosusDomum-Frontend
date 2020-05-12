<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Add New Thermostat</h3>
        <form>
          <div class="form-row">
            <div class="form-group col">
              <label for="light">Name</label>
              <input
                class="form-control"
                id="light"
                name="light"
                type="text"
              >
            </div>
            <div class="form-group col">
              <label for="light">Name</label>
              <input
                class="form-control"
                id="light"
                name="light"
                type="text"
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary text-white">Save New Thermostat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addThermostat"
  }
</script>

<style scoped>

</style>
