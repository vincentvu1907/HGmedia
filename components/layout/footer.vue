<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <nuxt-link to="/">
            <img src="/images/logo-house-garden.png" alt="logo-house-garden-ideas" width="100%" />
          </nuxt-link>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <ul class="social-icon">
            <li>
              <a target="_blank" href="https://www.facebook.com/housegardenideas/">
                <i class="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/HouseGarden_inc">
                <i class="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.pinterest.com/housegardenideas/">
                <i class="icofont-pinterest"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/housegarden.ideas/">
                <i class="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/channel/UC3ORA7pCWi7Y233fV6Fbpgw">
                <i class="icofont-youtube-play"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <i class="icofont-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h3 class="title-address-footer">H&G Ideas is located at:</h3>
          <div class="address-footer">
            <p>2592 Levy Court Framingham, Framingham</p>
            <p>01701 - Massachusetts , United State</p>
            <p>Email : <a href="mailto:housegardenideas@gmail.com">housegardenideas@gmail.com</a></p>
          </div>
        </div>
        <div class="col-md-4">
          <h3 class="title-address-footer">Hyper Link</h3>
          <ul class="ft-archer">
            <li v-for="(nav,i) in navs" :key="i">
              <nuxt-link :to="'/'+nav.url">{{nav.name}}</nuxt-link>
            </li>

          </ul>
        </div>
        <div class="col-md-4">
          <h3 class="title-address-footer">Contact Us</h3>
          <ul class="ft-archer">
            <li>
              <nuxt-link :to="'/about/me'">About me</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/about/affilate'">About Affilate Networking</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/search'">Search AI</nuxt-link>
            </li>
          </ul>
        </div>
        
      </div>
      <div style="margin-top: 20px;">
        <div class="row">
          <div class="col-md-3">
            <a href>
              <img src="/images/h-and-g-inc.png" alt='logo-h-and-g-inc' width="100%" />
            </a>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <p>A Part of H&G Media</p>
          <p>House Garden Ideas participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>
          <p>©2019 H&G Media, Inc. All Rights Reserved.</p>
        </div>
      </div>
      <div class="end-footer">
        <ul>
          <li>
            <a href="/about/privacy-notice">Privacy Notice</a>
          </li>
          <li>
            <nuxt-link to="/products">Products</nuxt-link>
          </li>
          <li>
            <a href="/about/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/sitemap.xml" target="__blank">Site Map</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed:{
    navs(){
      return this.$store.getters["home/getNavs"]
    }
  }
}
</script>