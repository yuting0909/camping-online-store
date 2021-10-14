<template>
  <div class="card border-0 text-decoration-none text-reset h-100 shadow">
    <button
      class="btn favorite-icon position-absolute px-2 py-1 mb-2"
      @click="addToFavorite(product.id)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        class="bi bi-suit-heart-fill"
        :class="{ active: isFavorite }"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
        />
      </svg>
    </button>
    <router-link
      class="stretched-link"
      :to="`/products/${product.id}`"
    ></router-link>
    <img
      :src="product.imageUrl"
      class="card-img-top product-img"
      :alt="product.title"
    />
    <div class="card-body d-flex flex-nowrap px-2 py-3">
      <div class="card-title fw-bold text-hidden">
        {{ product.city }} | {{ product.title }}
      </div>
      <div class="card-price fs-7 text-warning ms-auto w-50 w-lg-auto text-end">
        NT {{ $filters.currency(product.price) }} 起
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-img {
  height: 180px;
  object-fit: cover;
}
.favorite-icon {
  top: 8px;
  right: 8px;
  border-radius: 50%;
  background-color: rgba(194, 194, 194, 0.5);
  z-index: 10;
  &:focus {
    box-shadow: none;
  }
  svg {
    fill: #fff;
    &.active {
      fill: #dc5a4a;
    }
  }
}
.text-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<script>
export default {
  data () {
    return {
      isFavorite: false
    }
  },
  props: ['product'],
  methods: {
    addToFavorite (id) {
      this.isFavorite = !this.isFavorite
      const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
      if (list.some(product => product.id === id)) {
        const productIndex = list.findIndex(product => product.id === id)
        list.splice(productIndex, 1)
      } else {
        list.push(this.product)
      }
      localStorage.setItem('favoriteProducts', JSON.stringify(list))
      this.$emit('update-favorite', this.isFavorite)
    }
  },
  mounted () {
    const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
    if (list.length) {
      this.isFavorite = list.some(product => product.id === this.product.id)
    }
  },
  updated () {
    const list = JSON.parse(localStorage.getItem('favoriteProducts')) || []
    if (list.length) {
      this.isFavorite = list.some(product => product.id === this.product.id)
    }
  }
}
</script>
