 <template>
 <div class="column full-height justify-center">
  <div>Point Spread </div>
 <q-btn  @click="handleBet(homeSpread)">{{homeTeam}} {{homeSpread}}</q-btn>
<q-btn @click="handleBet(awaySpread)" >{{visitingTeam}} {{awaySpread}}</q-btn>
<!--<div>Over Under </div>
<q-btn  @click="handleBet(under)">Under {{under}}</q-btn>
<q-btn @click="handleBet(over)" >Over {{over}}</q-btn> -->
<q-dialog v-model="alert" transition-show="rotate" transition-hide="rotate"
>
<q-card>
        <q-card-section>
<div class="text-h6">Select Amount</div>
</q-card-section>
<q-card-section>
<q-input v-model="amount"
type="number"> Enter amount  </q-input>
</q-card-section>
<q-card-section>
        <q-btn @click="onSubmit" label="Submit" type="submit" color="primary" />
  </q-card-section>
</q-card>
<!--
      <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >

          <div class="text-h6">Select Amount</div>



<q-input v-model="amount"
type="number"> Enter amount  </q-input>



      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>  -->
    </q-dialog>

</div>

</template>

<script>

import { Notify} from 'quasar'
import axios from 'axios';
export default {
   data() {
    return {
    alert: false,
    amount: 0
  }
   },
  props: {
      gameData:{}
  },
   methods: {
    onSubmit(){
       console.log('Submitting');
        Notify
        .create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Taking a bet for',
          buttons: ['OK'],
        })
        this.alert = true;
        const url = 'http://localhost:3000/user_bets'
        const postData = {
          //auth_token: 'yK8R4iBf4iqwKh8c2gMR',
          auth_token: this.$store.state.user.state.authToken,
          betting_scenario_id: this.gameData.id,
          amount: this.amount
        }

        axios.post(url,postData)
        .then((response) => {
            console.log(response.data)
           //this.$store.state.user.state.authToken = response.data.auth_token
            console.log(this.$store.state.user.state.authToken)
        })
        this.alert = false;
      },
      handleBet(){
        this.alert = true;
       // this.$refs.insertAmountModal.show();
      }
  },
computed: {
      homeTeam(){
          return this.gameData.home_team;
      },
      homeSpread(){
        return this.gameData.betting_scenarios[0].value
      },
      awaySpread(){
        return this.gameData.betting_scenarios[1].value
      },
      under(){
          return this.gameData.betting_scenarios[2].value
      },
      over(){
          return this.gameData.betting_scenarios[3].value
      },
      visitingTeam(){
          return this.gameData.visiting_team;
      },

}
}
</script>