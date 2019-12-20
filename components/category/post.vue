<template>
  <div style="margin-top:50px">
    <transition name="fade">
    <div class="row justify-content-center" v-if="!loading">
      <div v-for="(p,i) in posts" :key="i" class="col-md-4">
        <div class="post-related-more">
          <div class="thumbnail">
            <img
              :src="parseImage(p.thumbnail,'upload/posts')"
              :alt="parseAlt(p.title)"
              :title="p.title"
            />
          </div>
          <div class="about-post">
            <nuxt-link :to="parseURL(p.url_category)" class="link-category">
              {{p.name}}
            </nuxt-link>
            <div class="publish-date">
              {{paseTime(new Date(p.created_at))}}
            </div>
          </div>
          <div class="title">
            <h3>
              <nuxt-link :to="'/article/'+p.url">{{p.title}}</nuxt-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loading" style="height:100%;width:100%">
        <img src="~/assets/image/loading.gif" alt />
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import Parse from "~/libs/parse";
import Timer from "~/libs/timer";
export default {
  computed: {
    posts() {
      return this.$store.getters["category/getPosts"];
    },
    loading() {
      return this.$store.getters["category/getLoading"];
    },
   
  },
  methods: {
    parseImage(name, path) {
      return Parse.image(name, path);
    },
    parseAlt(name) {
      return Parse.alt(name);
    },
     paseTime(date){
      return Timer.getFormatTime(date)
    },
    parseURL(uri){
      return "/"+this.$route.params.slug+"?child="+uri
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.about-post{
  text-align: center;
}
.publish-date{
  font-family: Archer;
  color: #c30303;
}
.link-category {
  font-size: .625rem;
    line-height: 1;
    border-top: .0625rem solid #000;
    border-bottom: .0625rem solid #000;
    color: #000;
    text-transform: uppercase;
    letter-spacing: .05rem;
    padding: .375rem;
    position: relative;
    margin-right: 0;
    top: -1rem;
    background-color: #fff;
    z-index: 1;
}
.link-category::before{
  content: "";
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
    top: .1875rem;
    border-bottom: .0625rem solid #000;
    background-color: #fff;
    z-index: -1;
    transform: rotate(45deg);
    left: -.6rem;
    border-left: .0625rem solid #000;
}
.link-category::after{
  content: "";
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
    top: .1875rem;
    border-bottom: .0625rem solid #000;
    background-color: #fff;
    z-index: -1;
    transform: rotate(-45deg);
    right: -.6rem;
    border-right: .0625rem solid #000;
}
</style>