<template>
  <div class="block">
    <div class="field">
      <div class="control">
        <div class="select is-danger">
          <select v-model="report">
            <option>none</option>
            <option>correction</option>
            <option>remove</option>
            <option>add</option>
          </select>
        </div>
      </div>
    </div>

    <form class="box" v-if="report !== 'none'">
      <div class="field">
        <div class="control">
          <div class="select is-danger">
            <select v-model="reportType">
              <option>definition</option>
              <option>usage</option>
              <option>translation</option>
              <option v-if="report !== 'add'">word</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="reportType === 'definition'">
        <label class="label definition">Definition</label>
        <p
          v-if="report === 'correction'"
          class="control field"
          v-for="def in definitions"
        >
          <textarea class="textarea" placeholder="Define hare.." v-model="def.definition"></textarea>
        </p>
        <p v-if="report === 'remove' || report === 'add'" class="control field notification" v-for="def in definitions" >
          <button v-if="report === 'remove'" class="delete"></button>
          <span>{{def.definition}}</span>
        </p>
        <p v-if="report ==='add'" class="control field" v-for="ndef in newDefinitions" >
          <textarea class="textarea" placeholder="Define hare.." v-model="ndef.definition"></textarea>
        </p>
      </div>

      <div v-if="reportType === 'usage'">
        <label class="label usage">Usage</label>
        <p v-if="report ==='correction'" class="control field" v-for="us in usages" >
          <textarea class="textarea" placeholder="Define hare.." v-model="us.usage"></textarea>
        </p>
        <p v-if="report === 'remove' || report === 'add'" class="control field notification" v-for="us in usages" >
          <button v-if="report === 'remove'" class="delete"></button>
          <span>{{us.usage}}</span>
        </p>
        <p v-if="report ==='add'" class="control field" v-for="nus in newUsages" >
          <textarea class="textarea" placeholder="Define hare.." v-model="nus.usage"></textarea>
        </p>
      </div>

      <div v-if="reportType === 'translation'">
        <label class="label translation">Translation Words</label>
        <p v-if="report ==='correction'" class="control field" v-for="tra in translations">
          <input type="text" class="input" placeholder="Enter Phrase" v-model="tra.word">
        </p>
        <p v-if="report === 'remove' || report === 'add'" class="control field notification" v-for="tra in translations" >
          <button v-if="report === 'remove'" class="delete"></button>
          <span>{{tra.word}}</span>
        </p>
        <p v-if="report ==='add'" class="control field" v-for="ntra in newTranslations" >
          <input type="text" class="input" placeholder="Define hare.." v-model="ntra.word">
        </p>
      </div>

      <div v-if="report ==='add'">
        <label class="label definition">Add new</label>
        <p class="control field" >
          <input type="text" v-if="reportType === 'translation'" class="input" placeholder="phrase.." v-model="currentText">
          <textarea v-else class="textarea" placeholder="Text.." v-model="currentText"></textarea>
        </p>
        <p v-if="report ==='add'" class="control field" >
          <button v-if="report === 'add'" v-on:click="addNewText">Add</button>
        </p>
      </div>

      <div v-if="report === 'remove'">
        <label class="label definition is-danger">Why remove? *</label>
        <p class="control field" >
          <textarea class="textarea" placeholder="Explain.." v-model="removeReason"></textarea>
        </p>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      report: 'none',
      reportType: 'definition',
      definitions: [{definition: 'aasdasdsdas'}, {definition: 'basdasdas asd asd as asd as '}, {definition: 'c'}],
      newDefinitions: [],
      usages: [{usage: 'd'}, {usage: 'e'}, {usage: 'f'}],
      newUsages: [],
      translations: [{word: 'as'}, {word: 'es'}, {word: 'fs'}],
      newTranslations: [],
      removeReason: '',
      currentText: ''
    }
  },
  methods: {
    addNewText: function () {
      if (this.reportType === 'definition') {
        this.newDefinitions.push({definition: this.currentText})
      }
      if (this.reportType === 'translation') {
        this.newTranslations.push({word: this.currentText})
      }
      if (this.reportType === 'usage') {
        this.newUsages.push({usage: this.currentText})
      }
      this.currentText = ''
    }
  }
}
</script>
<style scoped></style>
