<template>
  <div class="home-epaper">
    <div class="container-fluid py-5 px-4 text-light">
      <h2>訂閱我們</h2>
      <p>歡迎訂閱 icamping 電子報，我們將不定期寄發給您最新的優惠與活動訊息。</p>
      <form class="w-70 w-lg-50">
        <div class="row mb-3">
          <div class="col-8">
            <input
            type="email"
            class="form-control contact-input rounded-0"
            placeholder="請輸入電子郵件"
          />
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-primary">訂閱</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.home-epaper {
  background-image: url('../assets/home-contact-bg.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  height: 300px;
  .contact-input {
    background-color: transparent;
    color: #fff;
    &:focus {
      background-color: transparent;
    }
    &::placeholder {
      color: #fff;
    }
  }
}
</style>
