<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.hello {
  border: 2px solid red;

      h1 {
        border: 20px solid green;
      }
}
</style>
