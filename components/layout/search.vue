<template>
  <section :class="{'search':true,'active':status}">
    <div class="close-search" @click="turn()">
      <i class="icofont-close"></i>
    </div>
    <div class="row justify-content-center space-input">
      <div class="col-md-12">
        <input
          type="text"
          class="search-input"
          v-model="txt"
          name="search"
          placeholder="search "
          autocomplete="off"
        />
      </div>
    </div>
    <div class="content-ajax">
      <div v-show="!visiable()">
        <p style="padding:40px;text-align:center;color:#fff">NO MORE</p>
      </div>
      <ul>
        <li  @click="stopNow()" v-if="txt.length>1">
          <nuxt-link :to="'/search?q='+txt">{{txt}} <i class="icofont-external-link"></i></nuxt-link>
        </li>
        <li v-for="p in categories" :key="p.name"  @click="stopNow()">
          <nuxt-link :to="parseURL(p)">{{p.category.name}}</nuxt-link>
        </li>
        <li v-for="p in posts" :key="p.title"  @click="stopNow()">
          <nuxt-link :to="'/article/'+p.url">{{p.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import axios from "~/libs/axios";
export default {
  data() {
    return {
      txt: "",
      posts: [],
      categories: [],
      status:false
    };
  },
  computed: {
    // posts(){
    //     return this.$store.getters["search_surface/getPosts"]
    // },
    // categories(){
    //     return this.$store.getters["search_surface/getCategories"]
    // }
  },
  methods: {
    visiable() {
      if (this.posts.length == 0 && this.categories.length == 0 && this.txt<=1 ) return false;
      return true;
      //
    },
    async searching(val) {
      if (val.length >= 1){
          this.status = true
          let res = await axios.get("/search-surface/" + val)
          this.status = true
          this.posts = res.data.posts;
          this.categories = res.data.categories;
      }  
    },
    turn(){
        this.status = false;
    },
    stopNow(){
        this.status = false
        this.txt=''
        this.posts = [];
        this.categories = []
    },
    parseURL(category){
        return "/"+category.parent.url+"?child="+category.category.url;
    }
  },
  mounted() {
    $(".a-search").click(function(event) {
      alert();
    });
  },
  watch: {
    txt: function(val) {
        this.searching(val)
    },
  }
};
</script>