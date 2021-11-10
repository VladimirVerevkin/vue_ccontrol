<template>
  <div>
    <Sens @clickOnTitle="updateTitle" ref="sens"
          @clickOnTemper="updateSetTemper"/>
       <vodal :show="show" animation="rotate" @hide="clearSensorData" >
          <h4> Задать имя датчика </h4>
          <input type="text" v-model:value="sensor_data">
          <button class="vodal-confirm-btn" @click="updateHandler">ok</button>
          <button class="vodal-cancel-btn" @click="clearSensorData">close</button>
       </vodal>

<!--                <VodalForm v-bind:vodalPropsData="sensor_data" v-bind:vodalKeyBlock="this.keyBlock" /> &lt;!&ndash; v-bind:datapropsvodal="this.sensor_data" /> &ndash;&gt;&ndash;&gt;-->
    <!--      <Vo<dalForm v-bind:vodalPropsData="sensor_data" v-bind:vodalKeyBlock="this.keyBlock" /> &lt;!&ndash; v-bind:datapropsvodal="this.sensor_data" /> &ndash;&gt;-->
       -->
<!--    <VodalForm v-bind:show="show" v-bind:vodalPropsData="sensor_data" v-bind:vodalPropsText="textVodal" @upd="updateHandler" @clear="clearSensorData"/>-->
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
    textVodal: '',
    sensor_data: {},
    data: 0,
    keyBlock: '',
  }),

  methods: {
    updateTitle(sensor_data, $event) {
      console.log($event.target.dataset.field)
      this.sensor_data = JSON.parse(JSON.stringify(sensor_data))
      this.textVodal = "Ввести имя датчика"
      console.log(this.textVodal)
      this.show = true
    },
    updateSetTemper(sensor_data) {
      console.log(sensor_data)
      this.sensor_data = JSON.parse(JSON.stringify(sensor_data))

      this.textVodal = 'Ввести значение температуры'
      this.show = true
    },
    async updateHandler(data) {

      let formData = data
      console.log(formData)
      debugger
      try {
        await axios.post('http://192.168.1.65:5000/updateCommentSensor', formData)
        this.$refs.sens.setTitle(this.sensor_data.sensor_id, data[1])
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