module.exports = {
  head : {
    title : "nodeBird"
  },
  modules : [
    '@nuxtjs/axios',
  ],
  buildModules : [
    '@nuxtjs/vuetify',
  ],
  vuetify : {

  }
  // modules 에서 vuetify 를 연결했기 때문에 사용가능
}