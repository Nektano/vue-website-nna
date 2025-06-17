<template>
  <div class="catalog-page">
    <div class="catalog-header">
      <h1 class="title">Каталог товаров</h1>
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Поиск"
          @input="handleSearch"
          class="search-input"
        />
        <button @click="resetSearch" class="reset-btn" v-if="searchQuery">
          Сбросить
        </button>
      </div>
    </div>

    <div class="filter-controls">
      <select
        v-model="itemsPerPage"
        @change="resetPagination"
        class="page-select"
      >
        <option value="24">24 товара</option>
        <option value="50">50 товара</option>
        <option value="100">100 товара</option>
      </select>
    </div>

    <div v-if="loading" class="loading">Загрузка каталога...</div>

    <div v-else>
      <div v-if="filteredItems.length === 0" class="no-results">
        Не найдено товаров по поисковому запросу.
      </div>

      <div class="catalog-grid">
        <div v-for="item in paginatedItems" :key="item.id" class="catalog-item">
          <div class="item-image">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-description">{{ item.description }}</p>
            <p class="item-price">₽ {{ item.price.toFixed(0) }}</p>
            <button @click="addToCart(item)" class="add-to-cart-btn">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>

      <div class="pagination" v-if="filteredItems.length > 0">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="pagination-btn"
        >
          <
        </button>
        <span class="page-numbers">
          Страница {{ currentPage }} из {{ totalPages }}
        </span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="pagination-btn"
        >
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  data() {
    return {
      items: [],
      loading: true,
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 24,
    };
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) return this.items;

      const query = this.searchQuery.toLowerCase();
      return this.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + Number(this.itemsPerPage);
      return this.filteredItems.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchItems() {
      try {
        // Simulate API call
        // In a real app, you would use axios or similar
        this.loading = true;

        // Mock data - replace with actual API call
        setTimeout(() => {
          this.items = [
            {
              id: 1,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
            {
              id: 2,
              name: "Георгий Победоносец большой (новый)",
              description:
                "Статуэтка «Георгий Победоносец» изготовлена из патинированной бронзы и расположена на подставке из двух камней — змеевика и оникса.",
              price: 22900,
              image:
                "https://antilopagold.ru/image/cache/catalog/product/95940/IMG_1838-900x900.jpg",
            },
          ];
          this.loading = false;
        }, 800);
      } catch (error) {
        console.error("Error fetching items:", error);
        this.loading = false;
      }
    },
    handleSearch() {
      this.currentPage = 1;
    },
    resetSearch() {
      this.searchQuery = "";
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    resetPagination() {
      this.currentPage = 1;
    },
    addToCart(item) {
      // Implement your cart logic here
      console.log("Added to cart:", item);
      this.$emit("add-to-cart", item);
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>

<style scoped>
.title {
  color: #bc271f;
  font-family: var(--sans-serif);
  font-size: 36px;
  font-weight: bold;
}
.catalog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  padding: 10px 15px;
  border: 3px solid #bc271f;
  border-radius: 25px;
  min-width: 250px;
  font-size: 16px;
}

.reset-btn {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.reset-btn:hover {
  background-color: #e0e0e0;
}

.filter-controls {
  margin-bottom: 20px;
}

.page-select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.catalog-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.catalog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.item-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.item-details {
  padding: 15px;
}

.item-details h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.item-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.item-price {
  font-weight: bold;
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 15px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.add-to-cart-btn:hover {
  background-color: #369f6e;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}

.pagination-btn {
  color: #bc271f;
  font-size: 24px;
  font-weight: bolder;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn:not(:disabled):hover {
  background-color: #e0e0e0;
}

.page-numbers {
  font-size: 14px;
  color: #666;
}

.loading,
.no-results {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}

@media (max-width: 768px) {
  .catalog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
