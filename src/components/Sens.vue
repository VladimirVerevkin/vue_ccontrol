<template>
  <div>
    <div>
      <SensorTHR v-for="(sens_data,index) in dataSensors"
                 v-bind:key="index"
                 v-bind:sensor_data="sens_data"
                 @clickOnSensor="$emit('clickOnSensor', $event)"
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
    // sensors: [],
    dataSensors: []
  }),

  methods: {
    clickOnField(sensor_data, $event) {
      this.$emit('clickOnField', sensor_data, $event)
    },
    setFieldName(sensor_id, filed_value, field_name) {
      let tmp = this.dataSensors.find(value => value.sensor_id === sensor_id)
      tmp[field_name] = filed_value
    },

    // async getSensorInfo(id) {
    //   try {
    //     let resp = await axios.get('http://192.168.1.65:5000/getLastOneSensor', {params: {id: id}})
    //     return resp.data
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  },

  // watch: {
  //   dataSensors: function (value) {
  //     console.log(value)
  //   }
  // },

  async mounted() {
    try {
      this.dataSensors = (await axios.get(process.env.VUE_APP_URL+'/getLastAllSensors')).data
      console.log(this.dataSensors)
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