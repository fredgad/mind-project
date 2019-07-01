<template>
  <div id="wrapper">
    <button id="mix" @click="mix">MIX</button>
    <button id="mix" @click="animate">ANIMATE</button>

    <input id="verticalRng" type="range" min="1" max="20" step="1" @input="changeAmount" :value="props.vertical">
    <div id="cont" @mousemove="continueDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
      <div class="box"
      v-for="v in props.sideAmount"
      :style="`width:${props.boxWidth}px;  
      heigth: ${props.boxHeight}px; 
      background-size:${100*props.gorisontal}% ${100*props.vertical}%`" 
      :data-pos="v"
      @mousedown="startDrag"
      ></div> 
    </div>    
    <input id="gorisontalRng" type="range" min="1" max="20" step="1" @input="changeAmount" :value="props.gorisontal">

 
  <div class="vert">{{ props.gorisontal }} : {{ props.vertical }}</div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGame', 
  props: ['props'], 
  methods: {
    changeAmount() {
      this.$emit('changeAmount', verticalRng.value, gorisontalRng.value)
    },
    animate() {
      this.$emit('animate')
    },
    mix() {
      this.$emit('mix') 
    },
    startDrag() {
      this.$emit('startDrag')
    },
    continueDrag() {
      this.$emit('continueDrag')
    },
    stopDrag() {
      this.$emit('stopDrag')
    }
  }
}
</script>

<style scoped>
#wrapper {
  width: 100vw;
  position: relative;
}
#cont {
  position: relative;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height  : 375px;
  perspective: 400px;
  transform-origin: preserve-3d;
}
.box {  
    background: url('../assets/photo1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat; 
    transition: .4s;
} 
.box:hover {
  transform: translateZ(10px)scale(1.1);
}
#gorisontalRng {
  width: 500px;
  margin-left: 31vw;
  margin-top: 100px;
}
#verticalRng {
  position: absolute;
  display: block;
  width: 375px;
  right: -100px;
  top: 175px;
  transform: rotate(90deg);
}
</style>
