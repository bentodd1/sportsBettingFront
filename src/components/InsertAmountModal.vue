<template>
 <q-modal v-model="opened" no-backdrop-dismiss no-esc-dismiss >
     <q-label>
         Wager Amount
     </q-label>
     <q-input
        filled
        v-model="amount"
        label="Amount"
        hint="Amount you want to bet"
        type="number">

      </q-input>
     <q-label>
         To win
      </q-label>
     </q-modal>
</template>
<script>
export default {
    data() {
      return {
        opened: false,
        amount: 1.0
      }
    },
      methods: {
          show(){
              this.opened = true
          }

      }
}
</script>