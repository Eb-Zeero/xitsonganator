<template>
  <div id="app"  class="container">
    <div class="block">
      <nav class="nav">
        <div class="nav-left">
          <a href="" class="nav-item">
            <h1 class="title is-4">Xitsonga Nator</h1>
          </a>
        </div>

        <div class="nav-center">
          <a href="" class="nav-item">
            <span class="icon">
              <i class="fa fa-keyboard-o"></i>
            </span>
          </a>
          <a href="" class="nav-item">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </div>

        <div class="nav-right nav-menu">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contact</a>
        </div>
      </nav>
    </div>
    <div >
      <div class="search-wrapper">
        <label>Search word:</label>
        <input type="text" v-model="search" placeholder="Search word.."/>
      </div>
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      search: '',
      englishWords: [],
      xitsongaWords: []
    }
  },
  computed: {
    filteredList () {
      return (this.xitsongaWords + this.englishWords || []).filter(word => word.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style>

</style>
