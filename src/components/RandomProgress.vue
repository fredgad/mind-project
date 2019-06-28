<template>
  <div id="wrapper">

     <input type="button" value="Жми!" @click="add">

    <svg id="cont" 
      @mousemove="checkPosition"
      @mouseup="dragStop"
      @mouseleave="dragStop">
      <path :d="props.computedPath" fill="rgba(0,0,0,.1)" stroke="green" stroke-width="2"></path>
      <circle
        class="point"
        v-for="point,i in props.randomsesSums"
        :key="i"
        :cy="point * 4 + 300"
        :cx="i*props.roadHeight"
        r="12"
        fill="rgba(0,0,0,.0)"
        @mousedown="dragStart(i)"
      ></circle> 
    </svg>


    <input class="rng__height" type="range" @input="rngHeight" v-model:value="rngRoadHeight" step=".01" min=".1" max="50">
    <input class="rng__width" type="range" @input="rngWidth" v-model:value="rngRoadWidth" step=".01" min=".1" max="10">
    <div id="out">{{ mousePosY }} : {{ mousePosX }}</div>
  </div>
</template>

<script>
export default {
  name: "RandomProgress",
  props: ['props'],
  data() {
    return {
      rngRoadHeight: 5,
      rngRoadWidth: 1
    };
  },
  computed: {
    calcPath() {
      this.$emit('calcPath')
    }
  },
  methods: {
    rngHeight() {
      this.$emit('rngHeight', this.rngRoadHeight)
    },
    rngWidth() {
      this.$emit('rngWidth', this.rngRoadWidth)
    },
    add() {
      this.$emit('add', 1)
    },
    checkPosition(e) {
      this.$emit('checkPosition', e)
    },
    dragStart(i) {
      this.$emit('dragStart', i)
    },
    dragStop() {
      this.$emit('dragStop')
    }
  }  
};
</script>

<style scoped lang="scss">
#wrapper {
  position: relative;
  background: #eee;
  height: 600px;
  width: 100vw;
  margin-top: 30px;
  text-align: center;

  #out {
    position: absolute;
    top: 100%;
    left: 49vw;
    width: 30px;
  }
  input[type="button"] {
    position: absolute;
    top: -24px;
  }
  .rng__height {
    position: relative;
    top: 100px;
    width: 1000px;
  }
  .rng__width {
    position: relative;
    top: 100px;
    width: 1000px;
  }

  .table {
    position: absolute;
  }
  #cont {
    display: flex;
    position: relative;
    border: 2px solid red;
    height: 100%;
    top: 0;
    left: 0;
    min-width: 100vw !important;
    // transition: 2s;

    // .point:hover {
    //   fill: red;
    // }
  }
}
</style>
