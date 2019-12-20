<template>
  <div :class="{'navigation':true,'fixed':path} ">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <button class="collapse-menu-mobile mobile btn-default">
          <i class="icofont-navigation-menu"></i>
        </button>
        <div class="logo-mobile">
          <nuxt-link to="/"><img src="/images/logo-black-white.png" title="house garden ideas" alt="logo-house-garden-ideas"></nuxt-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto" style="display:-webkit-inline-box;">
            <li style="cursor:pointer" class="nav-item collapse-menu-mobile">
              <i class="icofont-navigation-menu"></i>
            </li>
            <li class="nav-item-logo">
              <nuxt-link to="/">
                <img src="/images/logo-black-white.png" title="house garden ideas" alt="logo-house-garden-ideas"> 
              </nuxt-link>
            </li>
            <li v-for="(nav,i) in navs" :key="i" class="nav-item">
              <nuxt-link :to="'/'+nav.url">{{nav.name}}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="search-nav">
          <button class="btn-default open-search">
            <i class="icofont-search-2"></i>
          </button>
          <button class="btn-default">
            <i class="icofont-earth"></i>
          </button>
        </div>
      </nav>
    </div>
    <div class="momo"></div>
    <div class="navigation-left">
      <div class="logo-navigation-left">
        <nuxt-link to="/">
        <img src="/images/logo-black-white.png" width="54px" alt="logo-house-garden-ideas">
        </nuxt-link>
      </div>
      <div class="close-nav-left">
        <i class="icofont-close-squared"></i>
      </div>
      <ul style="padding: 15px;">
        <li class="list-item-mobile">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li v-for="(nav,i) in navs" :key="i" class="list-item-mobile has-sub">
          {{nav.name}}
          <ul class="sub-item-mobile">
            <li v-for="child in nav.child" :key="child.url">
              <nuxt-link :to="'/'+nav.url+'?child='+child.url">{{child.name}}</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="list-item-mobile">
          <nuxt-link to="/search" >Search AI</nuxt-link>
        </li>
        <li class="list-item-mobile">
          <nuxt-link to="/contact-us" >Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    navs() {
      return this.$store.getters["home/getNavs"];
    },
    path(){
        return this.$route.path!=="/";
    }
  },
  created(){
      
  }
};
</script>