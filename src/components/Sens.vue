<template>
  <div>
    <div>
      <SensorTHR v-for="(sens_data,index) in dataSensors"
                 v-bind:key="index"
                 v-bind:sensor_data="sens_data"
                 @clickOnTitle="$emit('clickOnTitle', $event)"
                 @clickOnTemper="$emit('clickOnTemper',$event)"
      />
    </div>
    <!--    <div class="link" v-for="sensor in sensors">{{ sensor }}</div>-->
  </div>
</template>

<script>
import axios from 'axios'
import SensorTHR from '@/components/SensorTHR'

export default {

  components: {
    SensorTHR
  },

  data: () => ({
    sensors: [],
    dataSensors: []
  }),

  methods: {
    setTitle(sensor_id, new_title) {
      console.log(sensor_id)
      let tmp = this.dataSensors.find(value => value.sensor_id === sensor_id)
      console.log(tmp)
      tmp.title = new_title
    },
    // click(id) {
    //   this.$emit("clickOnTitle", id)
    // },

    async getSensorInfo(id) {
      try {
        let resp = await axios.get('http://192.168.1.65:5000/readSensor', {params: {id: id}})
        return resp.data
      } catch (e) {
        console.log(e)
      }
    }
  },

  // watch: {
  //   dataSensors: function (value) {
  //     console.log(value)
  //   }
  // },

  async mounted() {
    try {
      let resp = await axios.get('http://192.168.1.65:5000/getSensors')
      this.sensors = resp.data
      for (const value of this.sensors) {
        this.dataSensors.push(await this.getSensorInfo(value));
      }
      // console.log(this.dataSensors)
    } catch (e) {
      console.log("ШЕф всё пропало!")
    }
  }

}
</script>

<style scoped>
.link {
  color: blue;
  cursor: pointer;
}

div {
  align-items: center
}
</style>