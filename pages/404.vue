<template>
  <section id="page-404">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-sm-6 text-center">
              <img src="/images/404.webp" alt />
            </div>
            <div class="col-sm-6">
              <h1>Oops! Page Not Found.</h1>
              <p>
                Hiện tại URL không được tìm thấy trên
                <b>House & Garden Ideas</b>
              </p>
              <p>
                Bạn vui lòng quay lại hoặc trở về
                <a href="/" class="nuxt-link-active">Trang chủ</a>
              </p>
              <button class="btn-ideas btn-ideas-shadow" @click="back()">
                Quay lại
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    asyncData({store}){
        return store.dispatch('home/layout')
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>
<style>
#page-404 {
  min-height: 560px;
  background-color: #f5f5f5;
  padding: 160px;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>