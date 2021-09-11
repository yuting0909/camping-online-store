export default {
  methods: {
    createPromise (item) {
      const that = this
      return new Promise((resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
        that.$http
          .post(api, { data: item })
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updatePromise (item) {
      const that = this
      return new Promise((resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        that.$http
          .put(api, { data: item })
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    deletePromise (item) {
      const that = this
      return new Promise((resolve, reject) => {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        that.$http
          .delete(api)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
