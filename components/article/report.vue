<template>
  <section id="report">
    <div class="container">
      <h2>
        <span>Report a Problem</span>
      </h2>
      <form @submit.prevent.stop="report()">
        <div class="row justify-content-center">
          <div class="col-md-6">
              <div class="input">
                  <i class="icofont-boy"></i>
                  <input type="text" class="form-control" v-model="req.name" required placeholder="Your name">
              </div>
          </div>
          <div class="col-md-6">
              <div class="input">
                  <i class="icofont-email"></i>
                  <input type="text" class="form-control" v-model="req.email" required placeholder="Your email">
              </div>
          </div>
        </div>
        <div style="margin-top:40px" class="row justify-content-center">
            <div class="col-md-12">
                <textarea name="" placeholder="Your message" v-model="req.report" id="" rows="5" class="form-control"></textarea>
            </div>
        </div>
        <div style="margin-top:40px" class="row justify-content-left">
            <div class="col-md-3">
                <button class="btn-ideas btn-ideas-shadow">Submit</button>
            </div>
            <div v-if="response.length>0" class="col-md-3">
              {{response}}
            </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      req:{
        name:"",
        email:"",
        report:""
      },
      response:""
    }
  },
  methods:{
    report(){
      let that = this;
      this.$axios.post("/report",this.req)
      .then(res=>{
        that.response = "Thanks ! <3. "+that.req.name+"@ We will respond to you as soon as possible"
      })
      .catch(err=>{

      })
    }
  }
}
</script>