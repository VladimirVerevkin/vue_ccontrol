<template>
  <div>
    <h1>Привет всем!</h1>
    <hr>
    <Sens/>
  </div>
</template>

<script>
import Sens from '@/components/Sens'
import MainMenu from "@/components/MainMenu";
export default {
  name: 'Main',
  components: {
    MainMenu,
    Sens
  },

}
</script>

<style scoped>

</style>