<template>
  <section id="home-ideas">
    <div class="container">
      <h2 class="title-ideas">
       <nuxt-link :to="'/'+houses.category.url"> <span>{{houses.category.name}}</span></nuxt-link>
      </h2>
      <div class="ideas">
        <div class="row justify-content-center">

          <div v-for="(post,index) in houses.posts" :key="index" class="col-md-4">
            <div class="ideas-item">
              <div class="thumbnail-ideas">
                <a href>
                  <img
                    :src="parseImage(post.thumbnail,'upload/posts')"
                    :alt='parseAlt(post.title)'
                    :title="post.title"
                  />
                </a>
              </div>
              <div class="ideas-item-title">
                <h3>
                  <nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link>
                </h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Parse from "~/libs/parse"
export default {
    computed:{
        houses(){
            return this.$store.getters["home/getHouses"]
        }
    },
    methods:{
         parseImage(name, path) {
        return Parse.image(name, path);
      },
      parseAlt(name) {
        return Parse.alt(name);
      },
    }
}
</script>