export const state = () => ({
  me : null,
  followerList : [
    '조이슬', '용지수', '강선주'
  ],
  followingList : [
    '슬기', '이선빈', '소희'
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
  removeFollowingList(state, payload){
    const index = payload.idx
    console.log(index)
    state.followingList.splice(index, 1)
  },
  removeFollowerList(state, payload){
    const index = payload
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
  }
}
