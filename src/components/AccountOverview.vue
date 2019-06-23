<template>
<div class="q-pa-md">
    <div class="row"> Available {{this.amountFree}}</div>
    <div class="row">In play {{this.amountInPlay}}</div>
</div>

</template>
<script>
import axios from 'axios';
export default {
  name: 'Account',

  components:{

  },
   data() {
    return {
    account: {},

  }
   },
  mounted() {
      axios.get(`http://localhost:3000/account/self`,{
 headers: {
   Authorization:  this.$store.state.user.state.authToken } })
        .then((response) => {

            this.account = response.data;
        })
  },
  computed: {
  amountFree(){
          return this.account.ammount_free;
      },
      amountInPlay(){
        return this.account.ammount_in_play
      },
  }
}
</script>