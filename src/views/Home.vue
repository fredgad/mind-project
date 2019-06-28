
<template>
  <div id="home">
    <BrainPossibilities
      v-on:rngChange="rngChange"
      :props="{ages,reaction,fastMemory,empathy,slowMemory,crystalized,polyPath}"/>
  </div>
</template>

<script>
import BrainPossibilities from '../components/BrainPossibilities'

export default { 
  name: 'home',
  components: {
    BrainPossibilities
  },
  data() {
    return {
      ages: 18,
      reaction: 100,
      fastMemory: 65,
      empathy: [45],
      slowMemory: [65,70,75,80,85,90,95,100,100,100,100,100,100,100,100,100,100,98,96,94,92,90,88,86,84,82,80,78,76,74,72,70,68,66,64,62,60,58,56,54,52,50,48,46,44,42,40],
      crystalized: 15,
      polyPath: '80,0 320,0 400,220 200,400 0,220',

    }
  },
  methods: {
    rngChange(val) {
      this.ages = val;
      this.recalculate
    },
  },
  computed: {
        recalculate() {
          this.polyPath = 
          `80,0
          320,0 
          400,220 
          200,${220 + (180/47) * (this.ages - 18)}
          ${(200/47) * (this.ages - 18)},${220 - ((20/47) * (this.ages - 18))}`;

// ${200 * (slow.memory[this.ages-18]/100)}  first

          return this.polyPath
        }
  }
}
</script>

<style lang="scss">



</style>
