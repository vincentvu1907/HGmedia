<template>
  <div>
    
    <Header v-if="isFontPage()" />
    <Navigation />
    <Search />
    <div class="bg-sliver b100"></div>

    <nuxt />
    <Footer />
    <Fulltext />
    
  </div>
</template>
<script>
import Navigation from "~/components/layout/navigation";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import Search from "~/components/layout/search";
import Fulltext from "~/components/layout/fulltext";
export default {
  components: {
    Navigation,
    Header,
    Footer,
    Search,
    Fulltext
  },
  methods: {
    isFontPage() {
      if (this.$route.path == "/") return true;
      return false;
    }
  },
  watch: {
    
  }
};
</script>
