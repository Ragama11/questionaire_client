<template>
  <h1>Questionaire</h1>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  components: {},

  data() {
    return{
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start()  {
      this.isPlaying = true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
 @import'~bootstrap/dist/css/bootstrap.css'



</style>
