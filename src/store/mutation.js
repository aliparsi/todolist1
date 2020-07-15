export default{
    ADD_LINK: (state, link) => {
        state.links.push(link)
},

    REMOVE_LINK: (state, link) => {
        state.links.splice(link, 1)
      }
,
    appendUser: (state, {})
}