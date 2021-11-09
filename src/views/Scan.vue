<template>
  <div>
    <p>Сканирование - обнаружение подключенных датчиков.</p>
    <button @click="Scan">Запустить сканирование</button>
    <p v-if="sensors.length == 0 && !isScanning && isFirst !== 0">Обнаружено {{ sensors.length }} подключенных датчиков.</p>
    <p v-if="sensors.length == 1 && !isScanning">Обнаружен {{ sensors.length }} подключенный датчик.</p>
    <p v-if="sensors.length > 1 && !isScanning">Обнаружено {{ sensors.length }} подключенных датчика.</p>

    <p v-else-if="isScanning">
      <PulseLoader />
    </p>
    <p v-else-if="!isScanning"></p>
    <button id="update" v-bind:style="{ visibility: computedUpdate }" @click="Update" >Обновить таблицу датчиков</button>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from "axios";

export default {
  name: "scan",
  components: {PulseLoader},
  data: () => ({
    sensors: [],
    isScanning: false,
    isFirst: 0,
    visibility: 'hidden',
  }),
  computed: {
    computedUpdate: function () {
      return this.visibility;
    }
  },
  methods: {
    async Scan() {
      this.clearMassSensors()
      this.isScanning = true
      let response = await axios.get('http://192.168.1.65:5000/scannSensors')
      this.sensors = response.data
      this.isScanning = false
      this.isFirst = 1
      this.visibility = 'visible'
      console.log("Происходит сканирование")
    },
    async Update() {
      try {
        let response = await axios.post('http://192.168.1.65:5000/updateConnectSensors', this.sensors)
        alert('Успешно')
      }
      catch (e) {

      }
      finally {
        this.clearMassSensors()
      }

    },
    clearMassSensors(){
      //очистить массив sensors
      this.isFirst = 0
      while(this.sensors.length > 0) {
        this.sensors.pop();
      }
      this.visibility = 'hidden'
    }
  }
}
</script>

<style scoped>

</style>