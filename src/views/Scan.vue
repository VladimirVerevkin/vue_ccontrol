<template>
  <div>

    <p>Сканирование</p>
    <button @click="Scan">Start</button>

    <p v-if="sensors.length !== 0 && !isScanning">{{ sensors }}</p>
    <p v-else-if="isScanning">
<PulseLoader />
    </p>
    <p v-else-if="!isScanning">Нет нифига</p>

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
    isScanning: false
  }),
  methods: {

    async Scan() {
      this.isScanning = true
      let response = await axios.get('http://192.168.1.65:5000/scannSensors')
      this.sensors = response.data
      this.isScanning = false
      console.log("Происходит сканирование")
    }
  }
}
</script>

<style scoped>

</style>