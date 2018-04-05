<template>
  <section class="box">
    <h2>{{word}}</h2>
    <div>
      <h3>Definition</h3>
      <ul>
        <li :key="def" v-for="def in definition">
          <i class="fas fa-book fa-fw" style="background:MistyRose"></i>
          {{def}}
        </li>
      </ul>
    </div>
    <div>
      <h3>English similarity</h3>
      <ul>
        <li :key="eng" v-for="eng in english">
          <i class="fas fa-book fa-fw" style="background:MistyRose"></i>
          {{eng}}
        </li>
      </ul>
    </div>
    <div>
      <h3>Usage</h3>
      <ul>
        <li :key="used" v-for="used in usage">
          <i class="fas fa-info fa-fw" style="background:MistyRose"></i>
          {{used}}
        </li>
      </ul>
    </div>
    <div>
      <h3>Editors</h3>
      <ul>
        <li :key="ed" v-for="ed in editors">
          <a>
            <span>
              <i class="fas fa-pencil-alt fa-fw" style="background:MistyRose"></i>
            </span>
            <span>
              {{ed.surname + ' ' + ed.name + ', ' + ed.position}}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WordDefinition',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      word: 'Word1',
      english: ['WordEnglish', 'WordEnglish2'],
      definition: ['this is one of the word meaning', 'another meaning would be this one'],
      usage: ['you can use word1 like this', 'you can use word1 like this if you want'],
      editors: [
        {
          name: 'Nhlavutelo',
          surname: 'Macebele',
          company: 'SAAO',
          position: 'Software Developer'
        },
        {
          name: 'Nhlavutelo',
          surname: 'Macebele',
          company: 'SAAO',
          position: 'Software Developer'
        }
      ]
    }
  }
}
</script>

<style scoped>
  h2 {
    font-weight: bold;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 5px 20px;
  }
  a {
    color: #42b983;
  }
  .box {
    text-align: left;
  }
</style>
