
<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header'

import axios from 'axios'

export default {
  name: 'app',
  components: {
    Header
  },
// data() {
//     return {
//       randomses: [0],
//       randomsesSums: [0],
//       roadSize: 10,
//       roadWidth: 5,
//       mousePosX: 0,
//       mousePosY: 0
//     };
//   },
//   computed: {
//     calcPath() {
//       let path = "M0 200";
//       for (let x = 0; x < this.randomses.length; x++) {
//         path += ` L ${x * this.roadSize} ${this.roadWidth *
//           this.randomsesSums[x] *
//           4 +
//           300}`;
//       }
//       return path;
//     }
//   },
//   methods: {
//     addSome() {
//       for (let x = 9; x; x--) {
//         var newRandom = Math.floor(Math.random() * 11 - 5);
//         this.randomses.push(newRandom);

//         var newPoint = this.countSum(this.randomses);
//         this.randomsesSums.push(newPoint);
//       }
//     },
//     countSum() {
//       let currentDifference = 0;
//       for (let x = 0; x < this.randomses.length; x++) {
//         currentDifference += +this.randomses[x];
//       }
//       return currentDifference;
//     },
//     squize() {
//       cont.style.transform = "scaleX(.4)";
//     },
//     dragPoint(i) {
//       console.log(i);
//       document.querySelectorAll('.point')[i].style.fill = 'black';
      
//     },
//     checkPosition(e) {
//       var rect = wrapper.getBoundingClientRect();
//       this.mousePosX =  e.clientX - rect.left;
//       this.mousePosY =  e.clientY - rect.top;
//     }
//   }
}
</script>

<style lang="scss">
@import '@/scss/base.scss';
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}



</style>
