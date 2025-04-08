<script setup lang="ts">
import { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 mt-2 px-2 object-cover rounded-[1.75rem]"
    />
    <div class="p-4 flex flex-col flex-1 justify-between">
      <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ product.name }}</h3>
      <p class="text-gray-500 mb-4 line-clamp-2">{{ product.description }}</p>
      <div class="mt-auto">
        <span class="text-xl font-bold text-green-600">
          R$
          {{
            product.amount.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </span>
      </div>
    </div>
  </div>
</template>
