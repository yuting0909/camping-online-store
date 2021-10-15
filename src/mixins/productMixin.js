import TypeModal from '../components/TypeModal.vue'

export default {
  data () {
    return {
      region: {
        北部: ['台北', '新北', '桃園', '新竹'],
        中部: ['苗栗', '台中', '南投', '雲林'],
        南部: ['嘉義', '台南', '高雄', '屏東'],
        東部: ['宜蘭', '花蓮', '台東'],
        離島: ['金門', '澎湖']
      },
      cities: ['台北', '新北', '桃園', '新竹'],
      features: [
        '免裝備',
        '裝備租借',
        '雨棚',
        '遊戲設施',
        '玩水',
        '高海拔',
        '森林',
        '草原',
        '靠海',
        '近溪流',
        '夜景',
        '雲海'
      ],
      temType: {},
      types: [],
      temTypes: [],
      isNew: false,
      itemRefs: []
    }
  },
  watch: {
    temTypes: {
      handler (n, o) {
        if (n.length) {
          const priceArr = this.temTypes.map(type => type.price)
          this.temProduct.price = Math.min(...priceArr)
        } else {
          this.temProduct.price = 0
        }
      },
      deep: true
    }
  },
  inject: ['emitter', 'pushMessageState'],
  components: {
    TypeModal
  },
  beforeUpdate () {
    this.itemRefs = []
  },
  methods: {
    updateCities () {
      this.cities = this.region[this.temProduct.region]
      this.temProduct.city = this.cities[0]
    },
    setItemRef (el) {
      if (el) {
        this.itemRefs.push(el)
      }
    },
    uploadFile () {
      const file = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData).then(response => {
        if (response.data.success) {
          this.temProduct.imageUrl = response.data.imageUrl
        }
      })
    },
    uploadMoreFiles (key) {
      const file = this.itemRefs[key].files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData).then(response => {
        if (response.data.success) {
          this.temProduct.images[key] = response.data.imageUrl
        }
      })
    },
    openModal (isNew, type) {
      if (isNew) {
        this.temType = {}
      } else {
        this.temType = { ...type }
      }
      this.isNew = isNew
      this.$refs.typeModal.showModal()
    },
    getTypes () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.isLoading = false
        if (res.data.success) {
          this.types = res.data.products.filter(
            product => product.belong_to === this.temProduct.title
          )
        }
      })
    },
    updateTemType (item) {
      item.belong_to = this.temProduct.title
      item.category = '營地種類'
      if (this.isNew) {
        this.temTypes.push({ ...item })
      } else {
        const i = this.temTypes.indexOf(
          this.temTypes.find(type => type.id === item.id)
        )
        this.temTypes[i] = { ...item }
      }
      this.$refs.typeModal.hideModal()
    },
    deleteTemType (item) {
      const i = this.temTypes.indexOf(item)
      this.temTypes.splice(i, 1)
    },
    cancel () {
      this.$router.push('/admin/products')
    }
  }
}
