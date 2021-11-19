<template>
  <div id="app" class="bg-dark">
    <div class="container bg-secondary vh">
        <div class="row">
            <div class="col-12">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>
    <cart></cart>
  </div>
</template>
