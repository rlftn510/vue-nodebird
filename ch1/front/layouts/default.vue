<template>
  <!-- 가장 최상의 컴포넌트는 v-app -->
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">nodeBird</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-form @submit.prevent="onSearchHashtag">
            <div :style="{display : 'flex', alignItems : 'center', height:'100%'}">
              <v-text-field 
              v-model="hashtag"
              label="검색" 
              hide-details 
              prepend-icon="mdi-magnify" 
              />
            </div>
          </v-form>
          <v-btn text nuxt to="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <LoginForm/> 
      </v-col>
      <v-col cols="12" md="8">
        <nuxt/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  import LoginForm from '~/components/LoginForm'
  // ~ 소스들의 루트 디렉토리
  export default {
    components : {
      LoginForm
    },
    data(){
      return {
        hashtag : ''
      }
    },
    computed : {
      // name() {
      //   return this.$store.state.posts.name
      // }
    },
    methods : {
      onChangeName(){
        this.$store.dispatch('users/signUp')
      },
      onSearchHashtag() {
        this.$router.push({
          path: `/hashtag/${this.hashtag}`
        });
        this.hashtag = '';
      }
    }
  }
</script>

<style scoped>

</style>