<template>
  <footer class="text-center text-sm pt-8 pb-6">
    <p class="text-gray-500">
      Copyright
    </p>
  </footer>
</template>

<script lang="ts">
  export default {
    name: "NavBar",
    props: {
      items: {
        required: true,
        type: Array,
      }
    }
  }

</script>

<style scoped>
button {

}
