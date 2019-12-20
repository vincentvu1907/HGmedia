<template>
  <section id="home-product">
    <div class="container">
      <div class="border-next">
        <div class="header-product">
          <h2>
            <span>THE H&G INSTITUTE</span>
          </h2>
          <p class="des-title">Products Tested in the HG Lab</p>
        </div>
        <div class="products">
          <div class="item-product-lg">
            <div class="thumbnail-product-lg">
              <img
                :src="parseImage(sticky.post.thumbnail,'upload/posts')"
                :alt="parseAlt(sticky.post.title)"
                :title="sticky.post.title"
              />
            </div>
            <div class="title-product-lg">
              <h3><nuxt-link :to="'/article/'+sticky.post.url">{{sticky.post.title}}</nuxt-link></h3>
            </div>
          </div>
          <div class="row">

            <div v-for="(p,i) in sticky.products" :key="i" class="col-md-3">
              <div class="item-product-sm">
                <div class="thumbnail-product-sm">
                  <img
                    :src="parseImage(p.image,'upload/products')"
                    :alt='parseAlt(p.name)'
                    :title="p.name"
                  />
                </div>
                <div class="title-product-sm">
                  <h4>
                      <a :href="p.affilate_link" target="__blank">{{p.name}}</a>
                  </h4>
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
        sticky(){
            return this.$store.getters["home/getSticky"]
        }
    },
    methods:{
        parseImage(name,path){
            return Parse.image(name,path)
        },
        parseAlt(title){
            return Parse.alt(title)
        }
    }
}
</script>