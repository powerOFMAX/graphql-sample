import Messages from '../../models/Message'

const Query = {
  ping() {
    return 'Soy una prueba :D'
  },
  messages: async () => {
    return await Messages.find()
  }
}

export default Query;