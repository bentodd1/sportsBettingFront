<template>
<q-layout>
<div class="q-pa-md">
<!--<ion-content
    :scrollEvents="true"> -->
    <q-header elevated>


    </q-header>
     <!-- <ion-content
    :scrollEvents="true"
    @ionScrollStart="logScrollStart()"
    @ionScroll="logScrolling($event)"
    @ionScrollEnd="logScrollEnd()"> -->
 <!--<ion-content
    :scrollEvents="true"
   -->
   </br>
   </br>
   </br>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Game </th>
          <th class="text-leftt">Date</th>
         <!-- <th class="text-left">Spread</th>
          <th class="text-left">Over Under</th> -->
        </tr>
      </thead>
      <tbody>
        <game v-for="game in getGameList" :key="game.id" :gameData="game"></game>
      </tbody>
      </q-markup-table>



   </div>

   <!-- </ion-content> -->
</q-layout>
</template>
<script>
import axios from 'axios';
import game from './Game';

export default {
  name: 'LeagueList'

  ,
  components:{
    game
  },
  mounted() {
    this.fetchGameList(),
    this.League = this.$store.state.league
    /*axios.get('https://www.reddit.com/r/aww.json?raw_json=1')
      .then(response => {
        this.posts = response.data.data.children
      }) */

  },
  data() {
    return {
      League:{},
      list: [{
          "id": 1,
          "description": "Lions vs bears",
          "date": "1/1/2018",
          "lines": [{
              "id": 1,
              "description": "Point Spread",
              "bets":[{
                  "id": 1,
                 "desciption": "Bears to win by",
                 "value": -7,
                  "shortDesc": "Bears -7"
              },
              { "id": 2,
                "desciption": "Lions to win by",
                 "value": 7,
                 "shortDesc": "Lions +7"
              } ]
          },
          {   "id": 2,
              "description": "Over Under total",
              "bets":[{
                  "id": 3,
                 "desciption": "Under points",
                 "value": 64,
                 "shortDesc": " U 64"
              },
              {
                "id": 4,
                "desciption": "Over points",
                 "value": 64,
                 "shortDesc": "O 64",
              } ]
          }
          ]
      },{
          "id": 2,
          "description": "Broncos vs Chargers",
           "date": "1/1/2018",
          "lines": [{
              "id": 3,
              "description": "Point Spread",
              "bets":[{
                 "id": 5,
                 "shortDesc": 'Broncos -7',
                 "desciption": "Broncos to win by",
                 "value": -3
              },
              {
                 "id": 6,
                 "shortDesc": 'Chargers +7',
                "desciption": "Lions to win by",
                 "value": 7
              } ]
          },
          {   "id": 4,
              "description": "Over Under total",
              "bets":[{
                  "id": 7,
                  "shortDesc": 'U 59',
                 "desciption": "Under points",
                 "value": 59
              },
              {
                "id": 8,
                "shortDesc": 'O 59',
                "desciption": "Over points",
                 "value": 59
              } ]
          }
          ]
      }],
      myInput: ''
    }
  },
  methods: {
      handleBet(shortDesc){
    return this.$ionic.alertController
        .create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Taking a bet for'+ shortDesc,
          buttons: ['OK'],
        })
        .then(a => a.present())
      },
      async fetchGameList() {
      console.log('Get game list');
      console.log(this.$store.state.league)
      const url = `http://localhost:3000/games?leagues_id=`+this.$store.state.league.leagueId
      console.log(url)
      axios.get(url,{ crossdomain: true })
        .then((response) => {

            this.list = response.data;
            console.log(response.data)
        })
    }
  },
  computed: {
    getGameList()
    {
      console.log('Getting game list')
      console.log(this.list)
      return this.list
    }


  }
}
</script>
<style>

</style>