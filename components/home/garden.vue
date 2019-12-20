<template>
  <section id="home-post">
    <div class="container">
      <h2 class="title-ideas">
        <nuxt-link :to="'/'+gardens.category.url">
          <span>{{gardens.category.name}}</span>
        </nuxt-link>
      </h2>
      <div class="row justify-content-center">
        <div v-for="(post,index) in gardens.posts" :key="index" class="col-md-3">
          <div class="item-post-sm">
            <div class="thumbnail-item-sm">
              <img
                :src="parseImage(post.thumbnail,'upload/posts')"
                :alt="parseAlt(post.title)"
                :title="post.title"
              />
            </div>
            <div class="tite-item-sm">
              <h4>
                <nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Parse from "~/libs/parse";
export default {
  computed: {
    gardens() {
      return this.$store.getters["home/getGardens"];
    }
  },
  methods: {
    parseImage(name, path) {
      return Parse.image(name, path);
    },
    parseAlt(name) {
      return Parse.alt(name);
    }
  }
};
</script>