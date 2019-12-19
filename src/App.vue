<template>
  <div id="app">
    <HeaderView/>
    <router-view/>
  </div>
</template>

<script>
import HeaderView from '@/views/HeaderView.vue'

export default {
name: 'App',
components: {
  HeaderView
}
}
</script>

<style lang="scss">

</style>
