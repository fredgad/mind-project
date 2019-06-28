<template>
    <div id="wrapper">

        <input type="range" :value="props.ages" min="18" max="65" step="1">
        <svg id="cont">
            <polygon points="200,10 250,190 160,210" fill="#000" stroke="brown"
        </svg>


    </div>
</template>

<script>
export default {
    name: 'BrainPossibilities',
    props: ['props']
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
        border: 2px solid red;
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
