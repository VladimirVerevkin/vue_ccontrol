<template>
  <div id="app">
<!--    <router-view />-->
<!--    <MainLayout />-->
    <component :is="layout">
    </component>
  </div>
</template>


<script>
import Sens from '@/components/Sens'
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout"
export default {
  name: 'App',
  components: {MainLayout, EmptyLayout},
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'

    },
  },
  created() {
    document.title = this.$route.meta.title
    console.log(this.$route)
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 0px;
}
</style>
