<template>
  <div
    id="app"
    class="cover-container d-flex w-100 flex-column p-3 mx-auto "
  >
    <router-view />
    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Service made by <a href="https://github.com/zshanabek">@zshanabek</a>.</p>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>
