<template>
  <div>
    <section v-for="(pas,i) in parent" :key="i" id="more-related">
      <div class="container">
        <h2>
          <nuxt-link :to="'/'+pas.parent.url">
            <span class="transporter-label">More From</span>
            <span>{{pas.parent.name}}</span>
          </nuxt-link>
        </h2>
        <div class="row justify-content-center">
          <div v-for="(p,i) in pas.post" :key="i" class="col-md-4">
            <div class="post-related-more">
              <div class="thumbnail">
                <img
                  :src="parseImage(p.thumbnail,'upload/posts')"
                  :alt="parseAlt(p.title)"
                  :title="p.title"
                />
              </div>
              <div class="title">
                <h3>
                  <nuxt-link :to="'/article/'+p.url">{{p.title}}</nuxt-link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Parse from "~/libs/parse"
export default {
  computed: {
    parent() {
      return this.$store.getters["detail/getParent"];
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