<template>
  <div id="app">
    <LanguageComponent />
  </div>
</template>

<script>
import LanguageComponent from './components/LanguageComponent.vue'

export default {
  name: 'app',
  components: {
    LanguageComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
