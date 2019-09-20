const state = {
    state: {
       league: 'a',
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
           state.league = league
       }
     }

     // actions
     const actions = {
       setLeague(state, league) {
        state.league = league
    }
     }

     export default {
       namespaced: true,
       state,
       getters,
       mutations,
       actions,
     }