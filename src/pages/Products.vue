<script setup lang="ts">
import { onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProducts } from '@/composables/useProducts'

const { products, loading, error, search, page, totalPages, ordination, fetchProdutos } =
  useProducts()

onMounted(fetchProdutos)
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold my-6 text-gray-700 text-start">Nossos Produtos</h2>

    <div class="flex flex-row items-end justify-end gap-4 mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Buscar por nome..."
        class="border p-1.5 rounded w-full md:max-w-sm"
      />

      <select v-model="ordination" class="border bg-gray-300 p-2 rounded">
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex flex-col items-center justify-center text-gray-500 mt-6">
      <svg
        class="animate-spin h-8 w-8 text-gray-600 mb-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      <span>Carregando produtos...</span>
    </div>

    <div
      v-if="!loading && products.length === 0"
      class="flex flex-col items-center justify-center text-gray-600 mt-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 mb-2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 14.25v1.5a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-1.5m16.5 0V9.75m0 4.5H3.75M3.75 9.75V8.25m0 1.5h16.5M3.75 8.25A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v.75M3.75 8.25v-.75"
        />
      </svg>
      <span>Nenhum produto encontrado.</span>
    </div>

    <div v-if="error" class="text-red-500 text-center mb-4">Erro: {{ error }}</div>

    <div v-if="!loading && !error" class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <div v-if="totalPages > 1" class="flex items-center justify-center gap-4 mt-8">
      <button
        @click="page--"
        :disabled="page === 1"
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span class="font-medium">Página {{ page }} de {{ totalPages }}</span>
      <button
        @click="page++"
        :disabled="page === totalPages"
        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-10"
      >
        Próxima
      </button>
    </div>
  </div>
</template>
