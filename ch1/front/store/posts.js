export const state = () => ({
  mainPost : []
})

export const mutations = {
  addMainPost(state, payload) {
    state.mainPost.unshift(payload)
  },
  removeMainPost(state, payload) {
    const index = state.mainPost.findIndex( v => v.id === payload.id);
    state.mainPost.splice(index, 1)
  }
}

export const actions = {
  add({ commit }, payload) {
    // 서버에 게시글 등록 요청 보냄
    commit('addMainPost', payload)
  },
  remove({ commit }, payload) {
    commit('removeMainPost', payload)
  }
}