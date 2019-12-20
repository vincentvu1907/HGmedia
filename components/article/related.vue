<template>
  <section id="post-related">
    <div class="container">

      <div v-for="(post,i) in lastest" :key="i" class="item-post-related">
        <a href>
          <img
            :src="parseImage(post.thumbnail,'upload/posts')"
            :alt="parseAlt(post.title)"
            :title="post.title"
          />
        </a>
        <div class="simple-item">
          <h3><nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link></h3>
        </div>
      </div>
      
    </div>
  </section>
</template>
<script>
import Parse from "~/libs/parse"
export default {
  computed:{
    lastest(){
      return this.$store.getters["detail/getLastest"]
    }
  },
  methods:{
    parseImage(name,path){
      return Parse.image(name,path)
    },
    parseAlt(name){
      return Parse.alt(name)
    }
  }
}
</script>