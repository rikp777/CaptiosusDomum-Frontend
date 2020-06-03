<template>
  <div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h2 class="card-title">Woonkamer</h2>
          <router-link :to="{ name: 'deviceAdd' } " class="btn btn-primary float-right">Add device</router-link>
        </div>
        <div>
          <h4>1 hoog en is in het midden van het huis</h4>
          <router-link :to="{ name: 'roomDelete' } " class="btn btn-primary float-right">Delete room</router-link>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4">
        <div class="card">
          <div class="card-body">
            <div class="row mb-4">
              <h5 class="col card-title">Thermostat JX5</h5>
              <router-link :to="{ name: 'deviceDelete' } " class="btn btn-primary">Delete device</router-link>
            </div>
            <div class="row">
              <div class="col">
                <p>Temp : 25 C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
      <div class="card">
          <div class="card-body">
            <div class="row mb-4">
              <h5 class="col card-title">lighting RGB-2XO</h5>
              <router-link :to="{ name: 'deviceDelete' } " class="btn btn-primary">Delete device</router-link>
            </div>
            <div class="row">
              <div class="col">
                <p>Temp : 60 C</p>
                <p>Color : Blue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ViewRoom"
  }
</script>

<style scoped>

</style>
