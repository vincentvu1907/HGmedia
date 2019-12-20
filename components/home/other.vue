<template>
  <section id="home-feed">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="all-feed">
            <h3>
             <nuxt-link :to="'/'+decorations.category.url"> <span>{{decorations.category.name}}</span></nuxt-link>
            </h3>
            <div class="list-feed">
              <div v-for="(post,i) in decorations.posts" :key='i' class="item-feed">
                <div class="row">
                  <div class="col-6">
                    <div class="thumbnail-feed">
                    <nuxt-link :to="'/article/'+post.url"> 
                      <img
                        :src="parseImage(post.thumbnail,'upload/posts')"
                        alt=''
                      />
                    </nuxt-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="title-item-feed">
                      <h4><nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link></h4>
                      <p>By Vicent Vu</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="all-feed">
            <h3>
             <nuxt-link :to="'/'+recipes.category.url"> <span>{{recipes.category.name}}</span></nuxt-link>
            </h3>
            <div class="list-feed">
              <div v-for="(post,i) in recipes.posts" :key='i' class="item-feed">
                <div class="row">
                  <div class="col-6">
                    <div class="thumbnail-feed">
                    <nuxt-link :to="'/article/'+post.url"> 
                      <img
                        :src="parseImage(post.thumbnail,'upload/posts')"
                        alt=''
                      />
                    </nuxt-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="title-item-feed">
                      <h4><nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link></h4>
                      <p>By Vicent Vu</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="all-feed">
            <h3>
             <nuxt-link :to="'/'+life_styles.category.url"> <span>{{life_styles.category.name}}</span></nuxt-link>
            </h3>
            <div class="list-feed">
              <div v-for="(post,i) in life_styles.posts" :key='i' class="item-feed">
                <div class="row">
                  <div class="col-6">
                    <div class="thumbnail-feed">
                    <nuxt-link :to="'/article/'+post.url"> 
                      <img
                        :src="parseImage(post.thumbnail,'upload/posts')"
                        :alt='parseAlt(post.title)'
                        :title="post.title"
                      />
                    </nuxt-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="title-item-feed">
                      <h4><nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link></h4>
                      <p>By Vicent Vu</p>
                    </div>
                  </div>
                </div>
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
        decorations(){
            return this.$store.getters["home/getDecorations"]
        },
        recipes(){
            return this.$store.getters["home/getRecipes"]
        },
        life_styles(){
            return this.$store.getters["home/getLifeStyles"]
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