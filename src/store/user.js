const state = {
 state: {
    authToken: 'a',
    userId: 0
  }
}
 // getters
const getters = {
    getAuthToken () {
        console.log('Auth token')
      return state.authToken
    },
    getUserId () {
      return state.userId;
    }
  }

  // mutations
  const mutations = {
    userChanged (state, data) {
      state = data
    }
  }

  // actions
  const actions = {
    setAuthToken (context, data) {
      context.commit('authToken',  data)
    },
    setUserId (context, data) {
      context.commit('userId',  data)
    },
  }

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  }