<template>
  <div>
    <Sens @clickOnSensor="clickOnSensor" ref="sens"/>
    <vodal v-if="show" :show="true" animation="rotate" v-bind:width="600" v-bind:height="350" @hide="clearSensorData">
      <SensorTHR_Form v-bind:params="sensor_data" ref="sensorTHR_Form"/>
      <div class="mt-2" style="text-align: center">
        <b-button class="me-4" variant="outline-success" @click="submitHandler">Принять</b-button>
        <b-button variant="outline-warning">Закрыть</b-button>
      </div>
    </vodal>
  </div>
</template>

<script>
import axios from "axios"
import Sens from '@/components/Sens'
import MainMenu from "@/components/MainMenu"
import SensorTHR_Form from "@/components/SensorTHR_Form";

export default {
  name: 'Main',
  components: {
    MainMenu,
    Sens,
    SensorTHR_Form
  },
  data: () => ({
    show: false,
    edit_field: '',
    sensor_data: {},
  }),

  methods: {
    clickOnSensor(sensor_data) {
      this.sensor_data = sensor_data
      this.show = true
    },
    clearSensorData() {
      this.sensor_data = {}
      this.show = false
    },
    async submitHandler() {

      function delay(delayInms) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, delayInms);
        });
      }

      let new_sensor_data = this.$refs.sensorTHR_Form.getFormData();
      this.show = false
      let count=0
      for (let key in this.sensor_data) {
        if (this.sensor_data[key] !== new_sensor_data[key]) {
          this.sensor_data[key]=new_sensor_data[key]
          console.log(key)
          await axios.post(process.env.VUE_APP_URL + '/update' + key, [this.sensor_data.sensor_id, new_sensor_data[key]])
          await delay(3000)
        }
      }
      // for (let key in this.sensor_data) {
      //   if (this.sensor_data[key] !== new_sensor_data[key]){
      //     setTimeout(async () => {
      //       console.log(key)
      //       await axios.post(process.env.VUE_APP_URL + '/update' + key, [this.sensor_data.sensor_id, new_sensor_data[key]])
      //     }, 2000 * count); //скорость
      //     count += 1;
      //   }
      // }


      // сравнение
      this.sensor_data = {}
    }
  }

}
</script>

<style scoped>

</style>