<template>
    <div class="category-child">
        <ul>
            <li :class="all()">
                <nuxt-link :to="'/'+parent.url">All</nuxt-link>
            </li>
            <li v-for="(c,i) in child" :key="i" :class="isActive(c.url)">
               <h2 style="font-family:Roboto;font-size:1rem;padding:0px;margin:0px"> <nuxt-link :to="'/'+parent.url+'?child='+c.url">{{c.name}}</nuxt-link></h2>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        child(){
            return this.$store.getters["category/getChild"]
        },
        parent(){
            return this.$store.getters["category/getParent"]
        },
        active(){
            return this.$store.getters["category/getActiveChild"]
        }
    },
    methods:{
        isActive(url){
            // let boon = id==this.active
            if(url==this.$route.query.child){
                return {'active':true}
            }else{
                return url
            }
            
        },
        all(){
            let child = this.$route.query.child
            // console.log(child)
            if(child!=undefined){
                 return 'all'
            }else{
                return {'all':true,'active':true}
            }
        }
    },
    created(){
       

    },
    watch:{
        '$route':function(val){
            let child = val.query.child
            // console.log(child)
            if(child!=undefined){
                
                $('.all').removeClass('active')
            }else{
            //     $('.'+this.child_older).removeClass('active')
                $('.all').addClass('active')
            }
            
        }
    }
}
</script>