<template>
  <section id="content">
    <div class="container">
      <div class="title-post">
        <h1>{{post.title}}</h1>
      </div>
      <div class="category-post">
        <ul>
            <li v-for="(category,i) in categories" :key="i">
               {{category.name}}
            </li>
        </ul>
      </div>
      <div class="description-post">
        <p>{{post.description}}</p>
      </div>
      <div class="author-post">
        <p style="font-style:normal"><i class="icofont-clock-time"></i>&nbsp;{{parseTime(post.created_at)}}  &nbsp;   </p>
        <p><i class="icofont-boy"></i> <span>By Vincent Vu</span></p>
      </div>
      <div class="derma-line"></div>
      <div class="thumbnail-post">
        <img
          :src="parseImage(post.thumbnail,'upload/posts')"
          :alt="parseAlt(post.title)"
          :title="post.title"
        />
      </div>
      <div class="content-post" v-html="post.content">
          
      </div>
    </div>
  </section>
</template>
<script>
import Timer from "~/libs/timer"
import Parse from "~/libs/parse"
export default {
    computed:{
        post(){
            return this.$store.getters["detail/getPost"]
        },
        categories(){
            return this.$store.getters["detail/getCategories"]
        }
    },
    methods:{
        parseTime(time){
            return Timer.getFormatTime(new Date(time))
        },
        parseImage(name,path){
            return Parse.image(name,path)
        },
        parseAlt(name){
            return Parse.alt(name)
        }
    }
}
</script>