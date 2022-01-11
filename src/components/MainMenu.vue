<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Настройки</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="$route.path==='/'" to="/">Главная</b-nav-item>
          <b-nav-item :active="$route.path==='/scan'" to="/scan">Сканирование</b-nav-item>
<!--          <b-nav-item :active="$route.path==='/setnum'" to="/setnum">Присвоить номер</b-nav-item>-->

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  mounted() {
    console.log(this.$route.path);
  }
}
</script>

<style scoped>
</style>