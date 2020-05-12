<template>
  <div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h2 class="card-title">Room Dashboard</h2>
          <router-link :to="{ name: 'roomAdd' } " class="btn btn-primary float-right">Add room</router-link>
          <router-link :to="{ name: 'roomDelete' } " class="btn btn-primary float-right">Delete room</router-link>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4">
        <div class="card">
          <div class="card-body">
            <div class="row mb-4">
              <h5 class="col card-title">Room One</h5>
              <router-link :to="{ name: 'roomEdit' } " class="btn btn-primary">Edit room</router-link>
            </div>
            <div class="row">
              <p class="col">Woonkamer</p>
              <div class="col">
                <p>3 - termostat(s)</p>
                <p>2 - lighting(s)</p>
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
    name: "roomDashboard"
  }
</script>
