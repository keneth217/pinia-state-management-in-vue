<script setup>
import { ref } from 'vue';
import { useProductStore } from "./stores/store";

const store = useProductStore();
const itemName = ref('');
const itemPrice = ref('');

const addProduct = () => {
  const price = parseFloat(itemPrice.value);
  if (itemName.value.trim() && !isNaN(price)) {
    const newProduct = {
      name: itemName.value,
      price: price,
    };
    store.addProduct(newProduct);
    itemName.value = '';
    itemPrice.value = '';
  } else {
    alert('Please enter a valid item name and price.');
  }
};

</script>

<template>
  <div>
    <div class="content">
      <ul>
        <li v-for="product in store.products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
      <p>Total products:{{ store.productCount }}</p>
      <ul>
        <p>products less than ksh 50</p>
        <ul>
          <li v-if="store.productCount === 0">
            <div>No products available.</div>
          </li>
          <li v-else v-for="product in store.productsCheaperThan(50)" :key="product.id">
            <div v-if="product.price === 0">
              <div>No products less than ksh 50</div>
            </div>
            <div v-else>
              <div>My product is {{ product.name }} and its price is {{ product.price }}</div>
            </div>
          </li>
        </ul>

      </ul>
      <form @submit.prevent="addProduct">
        <input v-model="itemName" type="text" placeholder="enter item name">
        <input v-model="itemPrice" type="text" placeholder="enter item price">
        <button type="submit">Add Item</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  justify-content: center;
}
</style>
