<template>
  <head>
    <title>Pok Quiz</title>
  </head>
  <body>
    <h1>Welcome to Pok Quiz</h1>
    <div id="selection">
      <button @click="selectTexasHoldem()">Texas Holdem</button>
      <button @click="selectOmaha()">Omaha</button>
      <button @click="selectBigO()">Big O</button>
      <button @click="selectRazz()">Razz</button>
      <button @click="selectStud()">Stud</button>
    </div>
    <div id="games">
      <TexasHoldem v-if="rTexasHoldem"></TexasHoldem>
      <Omaha v-if="rOmaha"></Omaha>
      <BigO v-if="rBigO"></BigO>
      <Razz v-if="rRazz"></Razz>
      <Stud v-if="rStud"></Stud>
    </div>
  </body>
</template>

<script lang="ts">
import BigO from './views/BigO.vue'
import Omaha from './views/Omaha.vue'
import Razz from './views/Razz.vue'
import Stud from './views/Stud.vue'
import TexasHoldem from './views/TexasHoldem.vue'

export default {
  data() {
    return {
      rTexasHoldem: false,
      rOmaha: false,
      rBigO: false,
      rRazz: false,
      rStud: false
    }
  },
  name: 'App',
  components: {
    TexasHoldem,
    Omaha,
    BigO,
    Razz,
    Stud
  },
  methods: {
    selectTexasHoldem() {
      this.rTexasHoldem = true
      this.rOmaha = false
      this.rBigO = false
      this.rRazz = false
      this.rStud = false
    },
    selectOmaha() {
      this.rTexasHoldem = false
      this.rOmaha = true
      this.rBigO = false
      this.rRazz = false
      this.rStud = false
    },
    selectBigO() {
      this.rTexasHoldem = false
      this.rOmaha = false
      this.rBigO = true
      this.rRazz = false
      this.rStud = false
    },
    selectRazz() {
      this.rTexasHoldem = false
      this.rOmaha = false
      this.rBigO = false
      this.rRazz = true
      this.rStud = false
    },
    selectStud() {
      this.rTexasHoldem = false
      this.rOmaha = false
      this.rBigO = false
      this.rRazz = false
      this.rStud = true
    }
  }
}
</script>

<style>
/* Global styles can go here */
</style>
