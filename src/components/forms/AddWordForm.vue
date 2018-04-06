<template>
  <div class="block">
    <form>
      <div class="field">
        <label class="label word">Word</label>
        <input type="text" class="input" placeholder="Enter Word" v-model="word">
      </div>

      <div class="field">
        <label class="label definition">Definition</label>
        <p class="control">
          <textarea class="textarea" placeholder="Define hare.."  v-model="definition[0]"></textarea>
        </p>
      </div>
      <div class="field has-text-right">
        <button class="button is-primary is-small">Add definition</button>
      </div>

      <div class="field">
        <label class="label usage">Usage</label>
        <p class="control">
          <textarea class="textarea" placeholder="Usage hare.."  v-model="usage[0]"></textarea>
        </p>
      </div>
      <div class="field has-text-right">
        <button class="button is-primary is-small">Add usage</button>
      </div>

      <div class="field">
        <label class="label english">English translation</label>
        <p class="control" >
          <input type="text" class="input" placeholder="Enter Phrase" v-model="englishWords[0]">
        </p>
      </div>
      <div class="field has-text-right">
        <button class="button is-primary is-small">Add translation</button>
      </div>

      <div class="field ">
        <button class="button is-info is-medium">Submit Word</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      englishWords: [''],
      definition: [''],
      usage: ['']
    }
  }
}
</script>
<style scoped></style>
