<template>
  <v-container>
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p"></post-card>
    </div>
  </v-container>
</template>

<script>
  import PostCard from '~/components/PostCard'
  export default {
    components : {
      PostCard,
    },
    data() {
      return {
        name : 'Nuxt.js'
      }
    },
    computed : {
      me(){
        return this.$store.state.users.me
      },
      mainPosts(){
        return this.$store.state.posts.mainPosts;
      },
      hasMorePost() {
        return this.$store.state.posts.hasMorePost
      }
    },
    // layout : "default"
    
    fetch({store}) {
      store.dispatch('posts/loadPost')
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestory(){
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
          if(this.hasMorePost) {
            this.$store.dispatch('posts/loadPost')
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>