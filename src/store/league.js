const state = {
    state: {
        leagueName: 'a',
        leagueId: 0
     }
   }
    // getters
   const getters = {
       getLeague () {
         return state.league
       },
     }

     // mutations
     const mutations = {
       changeLeague(state, league) {
         console.log('Inside Change league')
         console.log(league)
          state.leagueName = league.name
          state.leagueId = league.id

       }
     }

     // actions
     const actions = {
        setLeagueName (context, data) {
            context.commit('leagueName',  data)
          },
          setLeagueId (context, data) {
            context.commit('leagueId',  data)
          },
     }

     export default {
       namespaced: true,
       state,
       getters,
       mutations,
       actions,
     }