<template>
  <div class="page-content">
    <Title/>
    <Event />
    <House />
    <Product />
    <Other />
    <Garden />
  </div>
</template>

<script>
import Title from "~/components/home/title"
import Event from "~/components/home/event";
import House from "~/components/home/house";
import Other from "~/components/home/other";
import Garden from "~/components/home/garden";
import Product from "~/components/home/product";
export default {
  components: {
    Event,
    House,
    Garden,
    Other,
    Product,
    Title
  },
  asyncData({ route, store }) {
    return store.dispatch("home/getAttributeHomepage");
  },
  computed: {
    config() {
      return this.$store.getters["home/getConfig"];
    }
  },
  head() {
    let structuredData = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://housegardenideas.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://housegardenideas.com//search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      datePublished: "2019-06-15T07:38:20+00:00",
      dateModified: new Date(),
      name:this.config.title,
      description: this.config.description,
      inLanguage: "en-US"
    };
    let site = process.env.myDomain
    let domain = site
    return {
      title: this.config.title,
      meta:[
        { hid: "description", name: "description", content: this.config.description },
        { name: "canonical ", content: site },
        { name: "theme-color", content: "#fff" },
        { name: "og:url", content: site },
        {
          name: "og:image",
          content:
            process.env.myDomain+"/images/white.jpg"
        },
        { name: "twitter:title", content: this.config.title },
        { name: "twitter:description", content: this.config.description },
        { name: "twitter:type", content: "website" },
        { name: "twitter:site", content: site },
        {
          name: "twitter:image",
          content:
            domain+"/images/white.jpg"
        },
        { name: "twitter:locale", content: "en_US" }
      ],
      link: [
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
