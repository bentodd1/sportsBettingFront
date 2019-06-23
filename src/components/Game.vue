<template>


         <tr @click="handleClick(gameData)" >

       <td class="text-left" >
          {{homeTeam}} vs {{gameData.visiting_team}}</td>
        <td class="text-left">{{gameData.game_time}}</td>
                <!--<td>

                        <q-btn  @click="handleBet(homeSpread)">{{homeSpread}}</q-btn>


                        <q-btn @click="handleBet(awaySpread)" >{{awaySpread}}</q-btn>

                </td>
                <td >

                        <q-btn  @click="handleBet(under)">{{under}}</q-btn>


                        <q-btn @click="handleBet(over)" >{{over}}</q-btn>

                </td> -->

                </tr>

</template>


<script>
import { Notify} from 'quasar'
import axios from 'axios';
import insertAmountModal from './InsertAmountModal';


export default {
  props: {
      gameData:{}
  },
  components:{
     insertAmountModal,
  },
  methods: {

    handleClick(gameData) {
      console.log(gameData)
      this.$router.push({ name: 'GameDetails', params:{gameData:  gameData }})
    },
      handleBet(shortDesc){

       // this.$refs.insertAmountModal.show();
    Notify
        .create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Taking a bet for'+ shortDesc,
          buttons: ['OK'],
        })

        url = 'http://localhost:3000/user_bets'
        postData = {
          betting_scenario_id: gameData.id
         // amount:
        }

        axios.post(url,postData)
        .then((response) => {
            console.log(response.data)
           this.$store.state.user.state.authToken = response.data.auth_token
            console.log(this.$store.state.user.state.authToken)
            this.$router.push({name: 'LeagueList'})
        })

      },
  },
  mounted() {
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
      }

  }
}
</script>