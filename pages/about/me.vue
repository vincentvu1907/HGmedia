<template>
  <div class="container">
    <br />
    <div class="text-center">
      <img src="/images/logo-black-white.png" width="80px" alt="logo-house-garden-ideas" />
    </div>
    <h1 class="text-center">Contact Us</h1>
    <br />
    <div class="info text-center">
      <p>2592 Levy Court Framingham, Framingham</p>
      <p>01701 - Massachusetts , United State</p>
      <p>
        Email :
        <a href="mailto:housegardenideas@gmail.com">housegardenideas@gmail.com</a>
      </p>
    </div>
    <h2 class="text-center">You can contact for us with this form</h2>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <hr />
      </div>
    </div>
    <Report />
  </div>
</template>
<script>
import Report from "~/components/article/report";
export default {
  asyncData({ store }) {
    return store.dispatch("home/layout");
  },
  components: {
    Report
  },
  head() {
      let domain = process.env.myDomain
    let structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: domain+"/about/me",
      name:"House Garden Ideas",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+84 867 646 201",
          contactType: "customer service",
          email:"housegardenideas@gmail.com",
        }
      ]
    };
    return {
      title: "Contact Us | House Garden Ideas",
      description:
        "Editorial enquiries Please direct all editorial enquiries to housegardenideas@gmail.com, or write to us at H & G media ",
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