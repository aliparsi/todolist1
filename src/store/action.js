export default {
    addUser: ({ commit }, payload) => {
        commit("appendUser", payload)
      },
      removeLink: (context, link) => {
        context.commit('REMOVE_LINK', link);
       
      }
}