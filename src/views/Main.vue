<template>
  <div>
    <Sens @clickOnTitle="updateTitle" ref="sens"
          @clickOnTemper="updateSetTemper"/>
    <vodal :show="show" animation="rotate" @hide="clearSensorData" >
      <h4> Задать имя датчика </h4>
      <input type="text" v-model:value="sensor_data">
      <button class="vodal-confirm-btn" @click="updateHandler">ok</button>
      <button class="vodal-cancel-btn" @click="clearSensorData">close</button>

      <!--      <VodalForm v-bind:vodalPropsData="sensor_data" v-bind:vodalKeyBlock="this.keyBlock" /> &lt;!&ndash; v-bind:datapropsvodal="this.sensor_data" /> &ndash;&gt;-->
      <!--      <VodalForm v-bind:vodalPropsData="sensor_data" v-bind:vodalKeyBlock="this.keyBlock" /> &lt;!&ndash; v-bind:datapropsvodal="this.sensor_data" /> &ndash;&gt;-->
    </vodal>
  </div>
</template>

<script>
import axios from "axios"
import Sens from '@/components/Sens'
import MainMenu from "@/components/MainMenu"
import VodalForm from "@/components/VodalForm";

export default {
  name: 'Main',
  components: {
    MainMenu,
    Sens,
    VodalForm,
  },
  data: () => ({
    show: false,
    test: false,
    sensor_data: {},
    data: 0,
    keyBlock: '',
  }),

  methods: {
    updateTitle(sensor_data) {
      console.log(sensor_data)
      this.sensor_data = JSON.parse(JSON.stringify(sensor_data))
      this.show = true
      this.keyBlock = 'title'

    },
    updateSetTemper(sensor_data) {
      console.log(sensor_data)
      this.sensor_data = JSON.parse(JSON.stringify(sensor_data))
      this.show = true
      this.keyBlock = 'temper'
    },
    async updateHandler() {

      let formData = [this.sensor_data.sensor_id, this.sensor_data.title]
      try {
        await axios.post('http://192.168.1.65:5000/updateCommentSensor', formData)
        this.$refs.sens.setTitle(this.sensor_data.sensor_id, this.sensor_data.title)
      } catch (e) {
        console.log("Ошибка изменение тайтла")
      } finally {
        this.clearSensorData()
      }
    },
    clearSensorData() {
      this.sensor_data = {}
      this.show = false
    }
  }

}
</script>

<style scoped>

</style>