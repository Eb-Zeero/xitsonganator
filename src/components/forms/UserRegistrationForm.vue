<template>
  <div class="block">
    <form>
      <div class="field">
        <label class="label surname">Surname</label>
        <input type="text" class="input" placeholder="Surname.." v-model="surname" v-on:keyup.enter="enterHit">
      </div>

      <div class="field">
        <label class="label name">Name</label>
        <input type="text" class="input" placeholder="Name.." v-model="name">
      </div>

      <div class="field">
        <label class="label ttl">Title</label>
        <input type="text" class="input" placeholder="Title.." v-model="title">
      </div>

      <div class="field">
        <label class="label occupation">Occupation</label>
        <input type="text" class="input" placeholder="Occupation.." v-model="occupation">
      </div>

      <div class="field">
        <label class="label hometown">Hometown</label>
        <input type="text" class="input" placeholder="Hometown.." v-model="hometown">
      </div>

      <div class="field">
        <label class="label email">Email</label>
        <input type="email" class="input" placeholder="Email.." v-model="email">
      </div>

      <div class="field ">
        <button class="button is-info is-medium">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      title: '',
      occupation: '',
      hometown: '',
      email: ''
    }
  },
  methods: {
    enterHit () {
      console.log(this.surname)
    }
  }
}
</script>
<style scoped></style>
