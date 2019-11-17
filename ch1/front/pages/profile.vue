<template>
  <div>
    <v-container>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
        </v-container>
        <v-container>
          <v-form v-model="valid" @submit.prevent="onChangeNickname">
            <v-text-field
             label="닉네임"
             required
             v-model="nickname"
             :rules="nicknameRules"
             ></v-text-field>
            <v-btn color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list :users="followingList" :remove="removeFollowing"></follow-list>
        </v-container>
      </v-card>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>팔루워</v-subheader>
          <follow-list :users="followerList" :remove="removeFollower"></follow-list>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import FollowList from '~/components/FollowList'
  export default {
    components : {
      FollowList
    },
    data() {
      return {
        valid: false,
        nickname: '',
        nicknameRules: [v => !!v || '닉네임을 입력하세요.']
      }
    },
    computed : {
      me() {
        return this.$store.state.me
      },
      followerList(){
        return this.$store.state.users.followerList
      },
      followingList(){
        return this.$store.state.users.followingList
      }
    },
    head(){
      return {title : '프로필'}
    },
    methods: {
      onChangeNickname() {
        this.$store.dispatch('users/changeNickname', {
          nickname: this.nickname
        })
      },
      removeFollower(id) {
        this.$store.dispatch('users/removeFollower', {
          id
        })
      },
      removeFollowing(id) {
        this.$store.dispatch('users/removeFollowing', {
          id
        })
      }
    },
    middleware: 'authenticated'
  }
</script>

<style scoped>

</style>