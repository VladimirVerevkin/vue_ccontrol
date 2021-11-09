<template>
  <div v-if="vodalKeyBlock === this.vodalTitle">
    <h4> Задать имя датчика </h4>
    <p>{{ vodalPropsData.title }}</p>
    <input type="text" placeholder="ввести новое значение" />
    <button class="vodal-ok-btn" v-on:click="vodalOkClick">ok</button>
    <button class="vodal-cancel-btn">close</button>
  </div>
  <div v-else-if="vodalKeyBlock === this.vodalTemper">
    <h4> Температура </h4>
    <p>{{vodalPropsData.setTemper}}</p>
    <input type="text" placeholder="ввести новое значение" value="789"/>
    <button class="vodal-ok-btn">ok</button>
    <button class="vodal-cancel-btn">close</button>
  </div>

</template>

<script>
export default {
  name: "VodalForm",
  props: {
    vodalPropsData: {},
    vodalKeyBlock:'',
  },
  data: () => ({
    valueInput: 'khhkhk',
    vodalTitle: 'title',
    vodalTemper: 'temper',

  }),

  methods:{
    vodalOkClick() {
      this.valueInput = 'vodalOkClick'

      this.$emit('upd')
      console.log(this.valueInput)
    }
  }

}
</script>

<style scoped>

</style>