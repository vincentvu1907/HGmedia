<template>
  <div class="container">
    <section id="search-fulltext">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1>House Garden Ideas - Full Text Search</h1>
        </div>
      </div>

      <div class="row justify-content-center" style="margin:20px 0px;pading:5px">
        <div class="col-md-8">
          <div class="form-group">
            <input
              v-model="txt"
              type="text"
              class="form-input-search"
              placeholder="Your text"
              required
              autocomplete="off"
              @keyup.enter="search()"
            />
            <span class="ft-archer">Type keyword(s) to search</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <button @click="search()" class="btn btn-warning text-white">Search</button>
          </div>
        </div>
      </div>
      <div class="count-result">
        <p>{{result()}} result</p>
        <img v-if="loading" src="~/assets/image/honzi.gif" alt />
      </div>
      <div class="category-result">
        <h2 class="filter-result-title">Categories</h2>
        <ul>
          <li v-for="(category,i) in categories" :key="i">
            <nuxt-link
              :to="'/'+category.parent.url+'?child='+category.category.url"
            >{{category.category.name}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="post-result">
        <h2 class="filter-result-title">Articles</h2>
        <div class="row justify-content-center">
          <div class="col-md-3" v-for="(post,i) in posts" :key="i">
            <div class="item-result-post">
              <div class="thumbnail">
                <img
                  :src="parseImage(post.thumbnail,'upload/posts')"
                  :alt="parseAlt(post.title)"
                  :title="post.title"
                />
              </div>
              <div class="title">
                <nuxt-link :to="'/article/'+post.url">{{post.title}}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Parse from "~/libs/parse";
export default {
  asyncData({ store, route }) {
    if (route.query.q == undefined || route.query.q == "") {
      return store.dispatch("home/layout");
    }
    return store.dispatch("search_surface/getAll", route.query.q);
  },
  created() {
    this.txt = this.$route.query.q ? this.$route.query.q : "";
  },
  data() {
    return {
      txt: ""
    };
  },
  methods: {
    search() {
      if (this.txt.length >= 2) {
        this.$router.push("/search?q=" + this.txt);
        this.$store.dispatch("search_surface/getSearchSuface", this.txt);
      }
    },
    result() {
      return this.posts.length + this.categories.length;
    },
    parseImage(name, path) {
      return Parse.image(name, path);
    },
    parseAlt(name) {
      return Parse.alt(name);
    }
  },
  computed: {
    posts() {
      return this.$store.getters["search_surface/getPosts"];
    },
    categories() {
      return this.$store.getters["search_surface/getCategories"];
    },
    loading() {
      return this.$store.getters["search_surface/getLoading"];
    }
  },
  head() {
    let itemListElement = [];
    let child = this.$route.query.q == undefined ? "" : this.$route.query.q;
    let description = "Everything House & Garden Ideas knows about " + child;
    let domain = process.env.myDomain;
    let site = domain+this.$route.path+(child==""?"":("?q="+child))
    this.posts.forEach(function(item, index) {
      itemListElement.push({
        "@type": "ListItem",
        position: index+1,
        url: domain + "/article/" + item.url
      });
    });
    let structuredData = {
      "@context": "http://schema.org",
      url: domain + "/search",
      publisher: {
        "@type": "Organization",
        name: "House Garden Ideas",
        logo: {
          "@type": "ImageObject",
          url: domain + "/images/logo-house-garden.png",
          width: 494,
          height: 185
        }
      },
      "@type": "ItemList",
      itemListElement: itemListElement
    };
    let title = "Search | House Garden Ideas"
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        { name: "canonical ", content: site },
        { name: "theme-color", content: "#fff" },
        { name: "og:url", content: site },
        {
          name: "og:image",
          content:
            domain+"/images/white.jpg"
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:type", content: "website" },
        { name: "twitter:site", content: site },
        {
          name: "twitter:image",
          content:
            domain+"/images/white.jpg"
        },
        { name: "twitter:locale", content: "en_US" }
      ],
      link:[
        { rel:"canonical", href : site},
        { rel: "apple-touch-icon",href:"/images/logo-empty.png"},
        { rel: "apple-touch-icon-precomposed",href:"/images/logo-empty.png"},
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(structuredData),
          type: "application/ld+json"
        }
      ]
    };
  }
};
</script>
<style lang="css">
#search-fulltext h1 {
  font-family: ArcherBold;
  font-size: 26px;
  padding: 20px;
  text-align: center;
}

#search-fulltext h1::after {
  content: "";
  width: 200px;
  height: 5px;
  background: #27a9c1;
  display: block;
  margin: 13px auto;
}
.form-input-search {
  width: 100%;
  height: 44px;
  font-size: 22px;
  font-family: Archer;
  border: none;
  border-bottom: 1px solid #bfbfc1;
}
.count-result p {
  padding: 5px 10px;
  color: rgb(201, 16, 16);
  border: 1px solid rgb(201, 16, 16);
  cursor: pointer;
  text-transform: uppercase;
  font-family: Archer;
  width: fit-content;
}
.count-result p:hover {
  background: rgb(201, 16, 16);
  color: #fff;
}
.filter-result-title {
  font-family: ArcherBold;
  font-size: 28px;
  padding: 20px;
}
.filter-result-title::after {
  content: "";
  width: 70px;
  height: 4px;
  background: #27a9c1;
  display: block;
}
.category-result li {
  display: inline-block;
  margin: 5px 10px;
}
.category-result a {
  padding: 5px 20px;

  background: #27a9c1;
  border-radius: 21px;
  color: #fff;
}
.item-result-post {
  margin: 5px 10px;
}

.item-result-post .thumbnail {
  overflow: hidden;
  max-height: 120px;
}

.item-result-post .thumbnail img {
  width: 100%;
}

.item-result-post .title {
  font-family: Archer;
  padding: 10px;
  text-align: center;
}
@media (max-width: 767px) {
  .item-result-post .thumbnail {
    max-height: 230px;
  }
}
</style>
