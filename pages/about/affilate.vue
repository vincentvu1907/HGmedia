<template>
  <div class="container">
    <section id="trust">
      <h1>Why Trust Us?</h1>
      <div class="mono-trust">
        <h2>ACCURACY</h2>
        <div class="des">
          <p>To make sure we get it right,<b> House Garden Ideas</b> works closely with qualified experts and follows thorough editing and fact-checking protocol prior to publishing. Published content is periodically fact-checked and reviewed to ensure the information provided is accurate, fair, and up to date.</p>

          <p>In addition to regularly consulting our go-to health, beauty, and home experts for insights and analysis, we also rely on the expertise of our in-house engineers, analysts, nutritionists, and product experts in the House Garden Ideas Institute. Read more about how we test products.</p>
        </div>
      </div>
      <div class="mono-trust">
        <h2>AFFILIATE DISCLOSURE</h2>
        <div class="des">
          <p><b>HouseGardenIdeas.com</b> participates in various affiliate marketing programs, which means we may get paid commissions on products purchased through our links to retailer sites. However, every product featured on <b>HouseGardenIdeas.com</b> is independently researched, tested, or editor-approved. We always put the consumer first and only recommend products that we stand behind. The merchandise featured on our site is always driven by editorial and product testing standards, not by affiliate deals or advertising relationships.</p>
        </div>
      </div>
      <div class="mono-trust">
        <h2>EDITORIAL INDEPENDENCE</h2>
        <div class="des">
          <p>Though <b>HouseGardenIdeas.com</b> is supported in part by advertising, our content is produced independently and held to rigorous standards of quality, accuracy, and integrity. In some cases, sponsors may be allowed input regarding broad concepts, but they hold no material influence over the end product. Content created in partnership with advertisers is clearly marked as such.</p>
        </div>
      </div>
      <div class="mono-trust">
        <h2>PRIVACY</h2>
        <div class="des">
          <p>We take our trusted relationship with our readers seriously, and therefore maintain a strict privacy policy.</p>
        </div>
      </div>
      <div class="mono-trust">
        <h2>
          <nuxt-link to="/about/me">Contact Us</nuxt-link>
        </h2>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch("home/layout");
  },
  head() {
    let domain = process.env.myDomain;
    let structuredData = {
      "@context": "http://schema.org",
      "@type": "WebPage",
      name: "About Affilate Networking | House Garden Ideas",
      url:domain+"/about/affilate",
      description: "House Garden Ideas & Affiliate network acts as an intermediary between publishers and merchant affiliate programs"
    };
    return {
      title: "About Affilate Networking | House Garden Ideas",
      description:
        "House Garden Ideas & Affiliate network acts as an intermediary between publishers and merchant affiliate programs",
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