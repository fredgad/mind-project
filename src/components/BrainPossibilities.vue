<template>
    <div id="wrapper">

        <input id='rng' type="range" :value="props.ages" min="18" max="65" step="1" @input="rngChange">
        <svg id="cont">
            <polygon :points="props.polyPath" fill="rgba(99,99,9,.5)" stroke="brown" stroke-width="4"/>

            <line x1="80" y1="0" x2="200" y2="200" stroke="black" stroke-width="2" />
            <line x1="320" y1="0" x2="200" y2="200" stroke="black" stroke-width="2" />
            <line x1="400" y1="220" x2="200" y2="200" stroke="black" stroke-width="2" />
            <line x1="200" y1="400" x2="200" y2="200" stroke="black" stroke-width="2" />
            <line x1="0" y1="220" x2="200" y2="200" stroke="black" stroke-width="2" />

            <circle  cx="200" cy="200" r="6"></circle>
        </svg>
 
        <input type="number" id="inp" :value="props.ages" @input="inpChange">
        <!-- <div class="sd">{{ props.polyPath }}</div> -->
    </div>
</template>

<script>
export default {
    name: 'BrainPossibilities',
    props: ['props'],
    methods: {
        rngChange() {
            this.$emit('rngChange',  rng.value)
        },
        inpChange() {
            if(inp.value > 65) {
                inp.value = 65
            }
            this.$emit('rngChange',  inp.value)
        }
    }
}
</script>

<style lang="scss" scoped>
#wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    min-height: 400px;

    #cont {
        border: 1px solid silver;
        position: relative;
        width: 95vw;
        width: 400px;
        height: 400px;
    }
    input[type=range] { 
        position: absolute;
        top: 70px;
    }
}

</style>
