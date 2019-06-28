
<template>
  <div id="home">
    <BrainPossibilities :props="{ages,reaction,fastMemory,empathy,slowMemory,crystalized}"/>
  </div>
</template>

<script>
import BrainPossibilities from '../components/BrainPossibilities'

export default {
  name: 'home',
  components: {
    BrainPossibilities
  },
  date() {
    return {
      ages: 18,
      reaction: 100,
      fastMemory: 65,
      empathy: 45,
      slowMemory:25,
      crystalized: 15
    }
  }
}
</script>

<style lang="scss">



</style>
