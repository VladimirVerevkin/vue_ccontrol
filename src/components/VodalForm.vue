<template>
  <vodal :show="show" animation="rotate">
    <ul> {{ vo }}</ul>
<!--    <input type="text" v-on:input="vodalInput" v-bind:value="dataValue"/>-->
    <input type="text" v-model="valueInput"/>
    <button class="vodal-confirm-btn " v-on:click="$emit('upd',[vodalPropsData.sensor_id, valueInput])">ok</button>
    <button class="vodal-cancel-btn" v-on:click="$emit('clear')">close</button>
  </vodal>
</template>

<script>
export default {
  name: "VodalForm",
  props: {
    valueInput: '',
    vodalPropsData: {
      title: '',
      setTemper: 0,

    },
    vodalPropsText: '',
    show: false,
  },
  data: () => ({
    // valueInput: '',
    vodalTitle: 'title',
    vodalTemper: 'temper',
    dataVolue: '',
  }),

  methods: {
    vodalOkClick() {
      this.valueInput = 'vodalOkClick'
      this.$emit('upd')
      console.log(this.valueInput)
    },
    vodalInput(value) {
      console.log(value.target.value)
      this.valueInput = value.target.value
    },

  },
  created() {
    this.vo = 'mounted Vodal'
    console.log(this.vo)
  }

}
</script>

<style scoped>

</style>