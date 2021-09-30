<template>
  <div class="product-section-2">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-3">
          <h2 class="fs-4 mb-3">
            <i class="bi bi-tree-fill text-success me-2"></i>選擇營地
          </h2>
        </div>
        <div class="col-md-9">
          <ul class="list-unstyled">
            <li
              v-for="(type, i) in types"
              :key="i"
              class="card rounded-3 overflow-hidden mb-3 border-0 bg-light"
            >
              <div class="row g-0">
                <div class="col-5">
                  <img class="type-pic" :src="type.images[0]" alt="營地圖片" />
                </div>
                <div class="col-7"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.type-pic {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>

<script>
export default {
  props: ['types']
}
</script>
