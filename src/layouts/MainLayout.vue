<template>
  <div>
    <MainMenu/>
    <hr>
    <b-container>
      <router-view/>
    </b-container>
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