<template>
  <div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h2 class="card-title">Thermostat Dashboard</h2>
          <router-link :to="{ name: 'thermostatAdd' } " class="btn btn-primary float-right">Add Thermostat</router-link>
          <router-link :to="{ name: 'thermostatDelete' } " class="btn btn-primary float-right">Delete Thermostat</router-link>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4">
        <div class="card">
          <div class="card-body">
            <div class="row mb-4">
              <h5 class="col card-title">Thermostat One</h5>
              <a href="#" class="col btn btn-primary float-right">Turn off</a>
            </div>
            <div class="row">
              <p class="col card-text"><strong>temp: </strong>21°</p>
              <p class="col card-text"><i class="fas fa-thermometer-three-quarters fa-10x"></i></p>
            </div>
            <router-link :to="{ name: 'thermostatEdit' } " class="btn btn-primary">Edit Thermostat</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "thermostatDashboard"
  }
</script>
