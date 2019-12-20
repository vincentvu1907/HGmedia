<template>
  <div class="page-content">
    <div id="fb-root"></div>
    <Related />
    <div class="bg-sliver b100"></div>
    <Detail />
    <Comment />
    <Report />
    <Category />
  </div>
</template>
<script>
import Related from "~/components/article/related";
import Detail from "~/components/article/detail";
import Category from "~/components/article/category";
import Report from "~/components/article/report";
import Comment from "~/components/article/comment";
export default {
  asyncData({ store, route }) {
    return store.dispatch("detail/getAttributePost", route.params.slug);
  },
  computed: {
    post() {
      return this.$store.getters["detail/getPost"];
    },
    tags() {
      return this.$store.getters["detail/getTags"];
    }
  },
  components: {
    Related,
    Detail,
    Category,
    Report,
    Comment
  },
  head() {
    let description = this.post.description;
    let title = this.post.title;
    let site = process.env.myDomain + "/article/" + this.post.url;
    let thumbnail = process.env.baseURL + "/upload/posts/" + this.post.thumbnail;
    let created = this.post.created_at;
    let updated = this.post.updated_at ? this.post.updated_at : new Date();
    let keywords = "";
    this.tags.forEach(val => {
      keywords += val.name + ",";
    });
    let structuredData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": site
      },
      headline: title,
      image: thumbnail,
      datePublished: created,
      dateModified: updated,
      author: {
        "@type": "Person",
        name: "Vincent Vu"
      },
      publisher: {
        "@type": "Organization",
        name: "House Garden Ideas",
        logo: {
          "@type": "ImageObject",
          url: process.env.myDomain + "/images/logo-house-garden.png"
        }
      },
      description: description
    };
    return {
      title: "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
        { name: "keywords", content: keywords },
        { name: "canonical ", content: site },
        { name: "theme-color", content: "#fff" },
        { name: "og:url", content: site },
        {
          name: "og:image",
          content: thumbnail
        },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:type", content: "website" },
        { name: "twitter:site", content: site },
        {
          name: "twitter:image",
          content: thumbnail
        },
        { name: "twitter:locale", content: "en_US" }
      ],
      link: [
        { rel: "canonical", href: site },
        { rel: "apple-touch-icon", href: "/images/logo-empty.png" },
        { rel: "apple-touch-icon-precomposed", href: "/images/logo-empty.png" },
        { rel: "stylesheet", href: "/assets/css/detail.css" }
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
  created() {
    this.$store.dispatch("detail/FB_Parse");
  }
};
</script>