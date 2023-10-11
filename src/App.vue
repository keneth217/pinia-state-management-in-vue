<script setup>
import { useCounterStore } from "./stores/store";
const store = useCounterStore();
</script>

<template>
  <div>
   <div class="content">
      <p>This is an aplication to implement pinia state management</p>
      <p>my count is :{{ store.doubleCount }}</p>
      <p>initial count incremented to :{{ increment }}</p>
<!--  -->
      <button @click="increment">increment</button> <br />
      <button @click="decrement">decremen</button>
    </div>
  </div>
</template>
<script>

export default {
 
};
</script>

<style scoped>
.content {
  text-align: center;
  justify-content: center;
}
</style>
