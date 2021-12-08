<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-xmpavumjb">
      <div class="ldio-ylwm2fadiqf">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <div class="text-end mt-4">
    <button type="button" class="btn btn-primary" @click="openModal(true)">
      建立優惠券
    </button>
  </div>
  <div class="table-responsive">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th class="d-none d-sm-table-cell">折扣百分比</th>
          <th class="d-none d-sm-table-cell">到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td class="d-none d-sm-table-cell">{{ item.percent }}%</td>
          <td class="d-none d-sm-table-cell">
            {{ $filters.date(item.due_date) }}
          </td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
              type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <coupon-modal
    :coupon="temCoupon"
    :isNew="isNew"
    ref="couponModal"
    @update-coupon="updateCoupon"
  ></coupon-modal>
  <delete-modal
    :item="temCoupon"
    ref="deleteModal"
    @del-item="deleteCoupon"
  ></delete-modal>
  <pagination :pages="pagination" @update-page="getCoupons"></pagination>
</template>

<script>
import CouponModal from '../components/CouponModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      temCoupon: {},
      isLoading: false,
      isNew: false,
      currentPage: 1
    }
  },
  components: { CouponModal, DeleteModal, Pagination },
  inject: ['pushMessageState'],
  methods: {
    getCoupons (page = 1) {
      this.currentPage = page
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(api).then(res => {
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
        this.isLoading = false
      })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.temCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0
        }
      } else {
        this.temCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelModal (item) {
      this.temCoupon = { ...item }
      this.$refs.deleteModal.showModal()
    },
    updateCoupon (item) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: item }).then(res => {
        this.pushMessageState(res, '優惠券更新')
        this.getCoupons(this.currentPage)
        this.$refs.couponModal.hideModal()
      })
    },
    deleteCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.temCoupon.id}`
      this.$http.delete(api).then(res => {
        this.pushMessageState(res, '優惠券刪除')
        this.getCoupons(this.currentPage)
        this.$refs.deleteModal.hideModal()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
