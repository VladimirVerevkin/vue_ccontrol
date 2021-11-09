<template>
  <div>
    <MainMenu/>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";

export default {
  name: "Main-Layout",
  components: {MainMenu}
}
</script>

<style scoped>

</style>