<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email"
        hint="type your email"

      />

      <q-input
        filled

        v-model="password"
        label="Your password"


      />



      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

import axios from 'axios';
export default {
  data() {
    return {
    email: '',
    password: 'password'
    }
  },
  name: 'Login',
  props: {
    msg: String,
  },
  methods: {
    onSubmit(){
     console.log(this.$store.state.user.state.authToken)

      const postData = {

        email: this.email,
        password: this.password

      }
     const url = `http://localhost:3000/login`;
      axios.post(url,postData)
        .then((response) => {
            console.log('Setting aith token')
            console.log(response.data.auth_token)
           this.$store.state.user.state.authToken = response.data.auth_token
            console.log(this.$store.state.user.state.authToken)
            //this.$store.state.user.state.authToken =
            this.$router.push({name: 'LeagueList'})
        })
  }
}
}
</script>