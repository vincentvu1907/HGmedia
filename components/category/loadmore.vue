<template>
    <div class="row justify-content-center">
        <div v-if="status" class="col-md-4 text-center">
            <img v-if="loadingBtn" src="~/assets/image/honzi.gif" alt="house-garden-ideas-loading">
            <br>
            <button  @click="loadingmore()" class="btn-ideas btn-ideas-shadow">
                More
            </button>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        loading(){
            return this.$store.getters["category/getLoading"]
        },
        status(){
            return this.$store.getters["category/getStatusBtnMore"]
        },
        loadingBtn(){
            return this.$store.getters['category/getLoadingBtn']
        }
    },
    methods:{
        loadingmore(){
            this.$store.dispatch('category/updateChild',this.$route)
        },
        
    }
}
</script>