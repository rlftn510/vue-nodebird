<template>
  <v-list-tile>
    <ul>
      <li v-for="(el, idx) in snsList" :key="idx">
        <span>{{el}}</span>
        <v-icon @click="removeList(idx)">mdi-minus-circle-outline</v-icon>
      </li>
    </ul>
  </v-list-tile>
</template>

<script>
  export default {
    props : {
      snsList : Array
    },
    methods : {
      removeList(idx){
        this.$emit('removeList', idx)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>