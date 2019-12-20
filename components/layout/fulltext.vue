<template>
  <div>
    <div id="search-icon">
      <ul>
        <li>
          <nuxt-link to="/search">
            <i class="icofont-search-document"></i>
          </nuxt-link>
        </li>
        <li @click="showModal()">
          <i class="icofont-share"></i>
        </li>
      </ul>
    </div>
    <div class="modal fade2" id="share-modal">
      <div class="modal-dialog h-100 d-flex flex-column justify-content-center my-0">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header text-center">
            <h4 class="modal-title ft-archer" style="width:100%;text-align:center">Social Sharing</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <ul class="social-icon share-icon">
              <li @click="chooseSocial('fb')" class="fb-icon active">
                <i class="icofont-facebook"></i>
              </li>
              <li @click="chooseSocial('tw')" class="tw-icon">
                <i class="icofont-twitter"></i>
              </li>
              <li @click="chooseSocial('pi')" class="pi-icon">
                <i class="icofont-pinterest"></i>
              </li>
              <li @click="chooseSocial('li')" class="li-icon">
                <i class="icofont-linkedin"></i>
              </li>
              <li @click="chooseSocial('ma')" class="ma-icon">
                <i class="icofont-email"></i>
              </li>
            </ul>
            <div class="result-link">
              <i class="icofont-link"></i>
              <input type="text" readonly v-model="link" />
              <button>
                <a :href="link" target="__blank">
                  <span class="icofont-external-link" data-toggle="tooltip" data-placement="top" title="target new window"></span>
                </a> |
                <span @click="copy()" class="icofont-copy" data-toggle="tooltip" data-placement="top" title="copy url"></span>
              </button>
              <br />
              <div
                v-if="status"
                style="width:100%;text-align:right;font-size:14px"
                class="ft-archer text-right"
              >
                <span class="icofont-check-circled text-success"></span>
                &nbsp; Copied
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: "",
      status: false,
      domain:process.env.myDomain,
      path:this.$route.path,
      query:this.$route.query.child==undefined?'':this.$route.query.child
    };
  },
  created() {
    this.link =
      "https://www.facebook.com/sharer/sharer.php?u=" + this.domain + this.path;
  },
  computed: {
    // domain() {
    //   return process.env.myDomain;
    // },
    // path() {
    //   return this.$route.path;
    // }
  },
  methods: {
    showModal() {
      $("#share-modal").modal("show");
    },
    async copy() {
      try {
        await this.$copyText(this.link);
        this.status = true;
      } catch (e) {
        console.error(e);
      }
    },
    async chooseSocial(sco) {
      switch (sco) {
        case "fb":
          this.link =
            "https://www.facebook.com/sharer/sharer.php?u=" +
            this.domain +
            this.path;
          this.defaultActive();
          $(".fb-icon").addClass("active");

          break;
        case "tw":
          this.link =
            "https://twitter.com/home?status=" + this.domain + this.path;
          this.defaultActive();
          $(".tw-icon").addClass("active");
          break;
        case "li":
          this.link =
            "https://www.linkedin.com/shareArticle?mini=true&url=" +
            this.domain +
            this.path;
          this.defaultActive();
          $(".li-icon").addClass("active");
          break;
        case "ma":
          this.link =
            "mailto:info@example.com?&subject=&body=" + this.domain + this.path;
          this.defaultActive();
          $(".ma-icon").addClass("active");
          break;
        case "pi":
          this.link =
            "https://pinterest.com/pin/create/button/?url=" +
            this.domain +
            this.path;
          this.defaultActive();
          $(".pi-icon").addClass("active");
          break;
      }
    },
    defaultActive() {
      $("#share-modal").modal("show");
      $(".fb-icon").removeClass("active");
      $(".tw-icon").removeClass("active");
      $(".li-icon").removeClass("active");
      $(".ma-icon").removeClass("active");
      $(".pi-icon").removeClass("active");
    }
  },
  watch:{
      '$route':function(val){
          
          this.path = val.path
          this.query = val.query.child==undefined?'':val.query.child
      }
  }
};
</script>
<style>
#search-icon {
  position: fixed;
  top: 20%;
  left: 0px;
}
#search-icon li {
  display: block;
  background: #00c3da;
  padding: 8px 15px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  margin: 10px 0px;
  padding-left: 25px;
  margin-left: -10px;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
}
#search-icon li:hover {
  transform: translateX(10px);
}
#search-icon i {
  font-size: 25px;
  color: #fff;
}
#search-icon ul {
  padding: 0px;
  margin: 0px;
}
.fade2.show {
  transform: scale(0.9);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s linear;
  display: block !important;
  animation: 0.2s opens forwards;
}
@keyframes opens {
  100% {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
}

#share-modal ul {
  width: 100%;
  text-align: center;
  margin: 20px auto;
  padding: 0px;
}
#share-modal li {
  display: inline-block;
  margin: 5px 10px;
  text-align: center;
  transition:.3s linear;
  padding:5px;
  cursor: pointer;
}
#share-modal li i {
  font-size: 24px;
}
#share-modal .result-link {
  position: relative;
  margin: 10px 30px;
}
#share-modal .result-link input {
  width: 80%;
  height: 35px;
  font-size: 10px;
  float: left;
  padding-left: 35px;
}
#share-modal .result-link i {
  position: absolute;
  font-size: 22px;
  line-height: 35px;
  width: 30px;
  text-align: center;
  left: 0;
  background: #b9b9b9;
}
#share-modal .result-link button {
  height: 35px;
}
#share-modal li.active {
    background: black;
    color: #fff;
}
</style>