<template>

  <div class="q-pa-md" style="max-width: 400px">
    <div class="probootstrap-loader"></div>
     <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>uiCookies:Black &mdash; Free Bootstrap Theme, Free Responsive Bootstrap Website Template</title>
    <meta name="description" content="Free Bootstrap Theme by uicookies.com">
    <meta name="keywords" content="free website templates, free bootstrap themes, free template, free bootstrap, free website template">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
    <link rel="stylesheet" href="css/styles-merged.css">
    <link rel="stylesheet" href="css/style.min.css">
    <link rel="stylesheet" href="css/custom.css">

    <!--[if lt IE 9]>
      <script src="js/vendor/html5shiv.min.js"></script>
      <script src="js/vendor/respond.min.js"></script>
    <![endif]-->
  </head>

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