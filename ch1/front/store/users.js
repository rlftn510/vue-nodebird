export const state = () => ({
  me : null,
  followerList : [
    { nickname : '조이슬', id : 1},
    { nickname : '용지수', id : 2},
    { nickname : '강선주', id : 3},
  ],
  followingList : [
    { nickname : '조재훈', id : 1},
    { nickname : '박상중', id : 2},
    { nickname : '복재우', id : 3},
  ]
})

export const mutations = {
  //비동기가 있으면 안된다. 
  setMe(state, payload) {
    state.me = payload
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname
  },
  addFollower(state, payload) {
    state.followerList.push(payload)
  },
  addFollowing(state, payload) {
    state.followingList.push(payload)
  },
  removeFollowing(state, payload){
    const index = state.followingList.findIndex(v => v.id === payload.id )
    state.followingList.splice(index, 1)
  },
  removeFollower(state, payload){
    const index = state.followerList.findIndex(v => v.id === payload.id )
    state.followerList.splice(index, 1)
  }
}

export const getters = {
  
}

export const actions = {
  /*signUp(context, payload)
  context 는 객체이다. console.log 찍으면 포한된 객체가 나온다... commit, dispatch...
  */
  signUp({ commit }, payload){
    commit('setMe', payload)
    // mutation 을 접근하기 때문에 commit
  },
  logIn({ commit }, payload){
    commit('setMe', payload)
  },
  logOut({ commit }, payload) {
    commit('setMe', null)
  },
  changeNickname({ commit }, payload) {
    commit('changeNickname', payload)
  },
  addFollowing({ commit }, payload) {
    commit('addFollowing', payload)
  },
  addFollower({ commit }, payload) {
    commit('addFollower', payload)
  },
  removeFollowing({ commit }, payload) {
    commit('removeFollowing', payload)
  },
  removeFollower({ commit }, payload) {
    commit('removeFollower', payload)
  }
}
