<template>
  <section id="home-custom">
    <div class="container">
      <h2 class="title-extra">
        <nuxt-link :to="'/'+special.slug"><span>{{special.name}}</span></nuxt-link>
      </h2>
      <div class="features">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="feature-item-lg">
              <div class="thumbnail-lg">
                <a href>
                  <img
                    :src="parseImage(final.thumbnail,'upload/posts')"
                    :alt='parseAlt(final.title)'
                    :title="final.title"
                  />
                </a>
              </div>
              <div class="feature-item-title-lg">
                <h3>
                  <nuxt-link :to="'/article/'+final.url">{{final.title}}</nuxt-link>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-md-4">

            <div v-for="index in posts.length-1" :key="index" class="feature-item-sm">
              <div class="row">
                <div class="col-4">
                  <div class="thumbnail-sm">
                    <img
                      :src="parseImage(posts[index-1].thumbnail,'upload/posts')"
                      :alt='parseAlt(posts[index-1].title)'
                      :title="posts[index-1].title"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="feature-item-title-sm">
                    <h3>
                      <nuxt-link :to="'/article/'+posts[index-1].url">{{posts[index-1].title}}</nuxt-link>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="demarcation"></div>
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
        events(){
            return this.$store.getters["home/getEvents"]
        },
        final(){
            return this.$store.getters["home/getEventsPostFinal"]
        },
        special(){
            return this.$store.getters["home/getEvents"].special
        },
        posts(){
            return this.$store.getters["home/getEvents"].posts
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