<template>
  <section id="more-related">
    <div class="container">
      <Parent />
      <Child />
      <Post />
      <More />
    </div>
  </section>
</template>
<script>
import Parent from "~/components/category/parent";
import Child from "~/components/category/child";
import Post from "~/components/category/post";
import More from "~/components/category/loadmore";
export default {
  asyncData({ route, store }) {
    if (route.query.child != undefined) {
      return store.dispatch("category/getChild", route.query.child);
    }
    return store.dispatch("category/getAttributeCategory", route.params.slug);
  },
  components: {
    Parent,
    Child,
    Post,
    More
  },
  computed: {
    parent() {
      return this.$store.getters["category/getParent"];
    },
    child() {
      return this.$store.getters["category/getActiveChild"];
    },
    posts() {
      return this.$store.getters["category/getPosts"];
    }
  },
  head() {
    let title = "";
    let name = "";
    if (this.$route.query.child != undefined) {
      name = this.child.name;
      title =
        this.child.name +
        " inspiration" +
        " - " +
        "Stylish design ideas ";
    } else {
      name = this.parent.name;
      title =
        this.parent.name +
        " inspiration" +
        " - " +
        "Stylish design ideas";
    }
    let domain = process.env.myDomain;
    let itemListElement = [];
    this.posts.forEach((val, index) => {
      itemListElement.push({
        "@type": "ListItem",
        position: index + 1,
        url: domain + "/article/" + val.url
      });
    });

    let child = this.$route.query.q == undefined ? "" : this.$route.query.q;
    let site = domain + this.$route.path + (child == "" ? "" : "?q=" + child);
    let description = "Stylish design ideas for your house & garden. Everything House & Garden Ideas knows about "+name
    let structuredData = {
      "@context": "http://schema.org",
      url: site,
      name: name,
      description: description,
      publisher: {
        "@type": "Organization",
        name: "House Garden Ideas",
        logo: {
          "@type": "ImageObject",
          url: domain + "/images/logo-house-garden.png",
          width: 297,
          height: 60
        }
      },
      "@type": "ItemList",
      itemListElement: itemListElement
    };
    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        { name: "canonical ", content: site },
        { name: "theme-color", content: "#fff" },
        { name: "og:url", content: site },
        {
          name: "og:image",
          content: domain + "/images/white.jpg"
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:type", content: "website" },
        { name: "twitter:site", content: site },
        {
          name: "twitter:image",
          content: domain + "/images/blue.jpg"
        },
        { name: "twitter:locale", content: "en_US" }
      ],
      link: [
        { rel: "stylesheet", href: "/assets/css/category.css" },
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
  },
  watch: {
    $route: function(val) {
      let child = val.query.child;
      if (child === undefined || child == "") {
        this.$store.dispatch(
          "category/getAttributeCategory",
          this.$route.params.slug
        );
      } else {
        $(".all.child").removeClass("active");
        this.$store.dispatch("category/getChild", child);
      }
    }
  }
};
</script>