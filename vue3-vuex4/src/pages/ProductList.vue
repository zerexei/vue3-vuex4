<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const products = computed(() => store.state.products.all)
// action
store.dispatch('products/getAllProducts')

watch(products, (products) => {
    if (products) {
        // getter
        console.log(store.getters['products/getAllProducts']);
    }
})
</script>

<template>
    <div>
        <h2>Pending Products</h2>
        <ul>
            <li v-for="product in store.getters['products/getAllPendingProducts']" :key="product.id"
                :class="{ 'strike': product.completed }">
                {{ product.title }}
            </li>
        </ul>
        <div class="mb-4"></div>
        <h2>Completed Products</h2>
        <ul>
            <li v-for="product in store.getters['products/getAllCompletedProducts']" :key="product.id"
                :class="{ 'strike': product.completed }">
                {{ product.title }}
            </li>
        </ul>
        <div class="mb-4"></div>
        <h2>All Products</h2>
        <ul>
            <li v-for="product in products" :key="product.id" :class="{ 'strike': product.completed }">
                {{ product.title }}
            </li>
        </ul>
    </div>
</template>

<style>
.mb-4 {
    margin-bottom: 4rem;
}

.strike {
    text-decoration: line-through;
}
</style>