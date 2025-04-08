import { ref, watch } from 'vue'
import axios from 'axios'
import { Product } from '@/types/product'

export function useProducts() {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref('')
  const search = ref('')
  const page = ref(1)
  const totalPages = ref(1)
  const ordination = ref('asc') // ou 'desc'
  const byPage = 6

  const fetchProdutos = async () => {
    loading.value = true
    error.value = ''

    try {
      const response = await axios.get('https://backend-challenge-7joh.onrender.com/api/produtos', {
        params: {
          search: search.value,
          page: page.value,
          per_page: byPage,
          sort: ordination.value,
        },
      })

      console.log(response.data)
      products.value = response.data.data
      totalPages.value = response.data.pagination.total_pages
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  watch([search, page, ordination], fetchProdutos)

  return {
    products,
    loading,
    error,
    search,
    page,
    totalPages,
    ordination,
    fetchProdutos,
  }
}
