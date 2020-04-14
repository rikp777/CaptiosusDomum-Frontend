<template>
    <div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-flex justify-content-between">
          <h2 class="card-title">Lamp Dashboard</h2>
            <router-link :to="{ name: 'lightingAdd' } " class="btn btn-primary float-right">Add Light</router-link>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <div class="row mb-4">
                <h5 class="col card-title">Lamp One</h5>
                <a href="#" class="col btn btn-primary float-right">Turn off</a>
              </div>
              <div class="row">
                <p class="col card-text"><strong>Brightness: </strong>100%</p>
                <p class="col card-text"><strong>Color: </strong>Warm white</p>
                <p class="col card-text"><i class="fas fa-lightbulb fa-10x"></i></p>
              </div>
              <router-link :to="{ name: 'lightingEdit' } " class="btn btn-primary">Edit light</router-link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <div class="row mb-4">
                <h5 class="col card-title">Lamp One</h5>
                <a href="#" class="col btn btn-primary float-right">Turn off</a>
              </div>
              <div class="row">
                <p class="col card-text"><strong>Brightness: </strong>100%</p>
                <p class="col card-text"><strong>Color: </strong>Warm white</p>
                <p class="col card-text"><i class="fas fa-lightbulb fa-10x"></i></p>
              </div>
              <a href="#" class="btn btn-primary">Edit light</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <div class="row mb-4">
                <h5 class="col card-title">Lamp One</h5>
                <a href="#" class="col btn btn-primary float-right">Turn off</a>
              </div>
              <div class="row">
                <p class="col card-text"><strong>Brightness: </strong>100%</p>
                <p class="col card-text"><strong>Color: </strong>Warm white</p>
                <p class="col card-text"><i class="fas fa-lightbulb fa-10x"></i></p>
              </div>
              <a href="#" class="btn btn-primary">Edit light</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: "lightingDashboard"
  }
</script>
