<template>
  <div id="app"  class="container">
    <div class="block">
      <nav class="nav">
        <div class="nav-left">
          <a href="" class="nav-item">
            <h1 class="title is-4">Xitsonga Nator</h1>
          </a>
        </div>

        <div class="nav-center nav-menu">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contact</a>
        </div>

        <div class="nav-right">
          <h1 class="title is-3">
            <a href="" class="nav-item">
              <span class="icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" v-model="search" placeholder="Search word.."/>
            </a>
          </h1>
        </div>
      </nav>
    </div>
    <router-view/>
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
