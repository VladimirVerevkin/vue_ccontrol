<template>
  <div>
    <table class="main_table">
      <tr>
        <td colspan="2">Датчик</td>
      </tr>
      <tr>
        <td rowspan="2"><span class="cell">{{ sensor_data.temper }}</span></td>
        <td>45</td>
      </tr>
      <tr>
        <td>{{ sensor_data.setHumid }}</td>
      </tr>
      <tr>
        <td rowspan="2">{{ sensor_data.humid }}</td>
        <td>{{ sensor_data.statusRele }}</td>
      </tr>
      <tr>
        <td>{{ sensor_data.controlRele }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    sensor_data: Object
  },
  data: () => ({
    // sensor_data: {
    //   temper: 10,
    //   set_temper: 20,
    //   humid: 75,
    //   set_humid: 85,
    //   status_rele: 'on',
    //   control_rele: 'temper'
    // }
  })
}
</script>


<style scoped>
.main_table {
  background-color: #eeeeee;
  border: 1px solid black;
  border-spacing: 7px 5px; /* Расстояние между границ */
}

td, th {
  background-color: #42b983;
  height: 40px;
}

.cell {
  padding: 10px;
}
</style>