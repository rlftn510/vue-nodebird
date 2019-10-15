export const state = () => ({
  me : null,
})

export const mutations = {
  //비동기가 있으면 안된다. 
  setMe(state, payload) {
    state.me = payload
  }
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
  }
}