<template>
  <div>
    <table class="THR_table">
      <tr>
        <td colspan="2">
          <b-form-input class="input" v-model="sensor_data.title"/>
        </td>
      </tr>
      <tr>
        <td rowspan="2"><span class="cell"> {{ sensor_data.temper }} &#x2103</span></td>
        <td class="setParm">
          <div>{{ sensor_data.setTemper }}</div>
          <div>
            <b-form-input class="input" type="range" min="1" max="15" step="0.5" style="height: 27px"
                          placeholder="Введите значение"
                          v-model="sensor_data.setTemper"/>
          </div>
        </td>
      </tr>
      <tr>
        <td class="setParm">
          <div>{{ sensor_data.setHumid }}</div>
          <div>
            <b-form-input class="input" type="range" min="45" max="95" style="height: 27px"
                          placeholder="Введите значение"
                          v-model="sensor_data.setHumid"/>
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="2"><span class="cell">{{ sensor_data.humid }} %</span></td>
        <td>{{ sensor_data.statusRele }}</td>
      </tr>
      <tr>
        <td>
          <b-form-select v-model.trim="sensor_data.controlRele" :options="options"></b-form-select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    params: Object,
  },
  data: () => ({
    placeholder: 'Введите значение',
    options: [
      {value: null, text: 'Выбрать значение', disabled: true},
      {value: 'temper', text: 'Вкл./Выкл. реле по температуре'},
      {value: 'humid', text: 'Вкл./Выкл. реле по влажности'},
      {value: 'off', text: 'Реле выключенно', disabled: true}
    ],
    sensor_data: {},
    dump_sensor_data: {},
  }),
  methods: {
    getFormData() {
      return this.sensor_data
    }
  },
  watch: {},
  mounted() {
    this.sensor_data = JSON.parse(JSON.stringify(this.params))
  }
}
</script>


<style scoped>
.THR_table {
  background-color: #eeeeee;
  border: 3px solid black;
  margin: 30px;
  text-align: center;
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

.input {
  background-color: #42b983;
  text-align: center;
}
.select {
  background-color: #42b983;
  text-align: center;
}

.cell {
  font-size: 30px;
  font-weight: bold;
}
</style>