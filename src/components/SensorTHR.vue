<template>
  <div>
    <div class="wrap" @click="$emit('clickOnSensor',sensor_data)">
      <table class="THR_table">
        <tr>
          <td colspan="2"> {{ sensor_data.title }}</td>
        </tr>
        <tr>
          <td rowspan="2"><span class="cell"> {{ sensor_data.temper }} &#x2103</span></td>
          <td>{{ sensor_data.setTemper }} &#x2103</td>
        </tr>
        <tr>
          <td>{{ sensor_data.setHumid }} %</td>
        </tr>
        <tr>
          <td rowspan="2"><span class="cell">{{ sensor_data.humid }} %</span></td>
          <td>{{ sensor_data.statusRele }}</td>
        </tr>
        <tr>
          <td>{{ sensor_data.controlRele }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sensor_data: Object,
  },
  data: () => ({}),
  methods: {


  },
  mounted() {
    // console.log(this.sensor_data)
  }
}
</script>


<style scoped>
.wrap {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  width: max-content;
}

.wrap:hover {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.6);
  width: max-content;

}

.THR_table {
  background-color: #eeeeee;
  border: 3px solid black;
  /*margin: 5px;*/
  cursor: pointer;
  margin-bottom: 40px;
  text-align: center;
  width: 100%;

}

td, th {
  background-color: #42b983;
  height: 30px;
  width: 30%;
  border: 1px solid black;
}

.cell {
  font-size: 30px;
  font-weight: bold;
}
</style>