<template>
  <div>
    <table class="THR_table" name="table">
      <tr>
        <td colspan="2" class="link" data-field="title" @click="$emit('clickOnTitle',sensor_data, $event)"> {{ sensor_data.title }} </td>
      </tr>
      <tr>
        <td rowspan="2"><span class="cell"> {{ sensor_data.temper }} &#x2103</span></td>
        <td class="setParm" @click="$emit('clickOnTemper', sensor_data)">{{ sensor_data.setTemper }} &#x2103</td>
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
</template>

<script>
export default {
  props: {
    sensor_data: Object,
  },
  data: () => ({
  }),
  methods: {
    log(){
      console.log(this.$el.children[0].table)
    },
    // updateTitleSensor() {
    //   this.$emit("clickOnTitle", this.sensor_data.sensor_id)
    // },
    updateSetTemp() {

    },
    updateSetHumid() {

    },
    updateControl() {

    },
    updateStatus() {

    }
  },
  mounted() {
    console.log(this.sensor_data)
  }
}
</script>


<style scoped>
.THR_table {
  background-color: #eeeeee;
  border: 3px solid black;
  margin: 5px;
}

td, th {
  background-color: #42b983;
  height: 30px;
  width: 30%;
  border: 1px solid black;
}
.setParm {
  cursor: pointer;
}
.setParm:hover {
  font-weight: bold;
}
.link {
  cursor: pointer;
}

.link:hover {
  font-weight: bold;
}

.cell {
  font-size: 30px;
  font-weight: bold;
}
</style>