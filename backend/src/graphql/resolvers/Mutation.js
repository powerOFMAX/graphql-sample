import Message from '../../models/Message'

const Mutation = {
  createMessage: async (_, {title, content, author}) => {
    const newMessage = new Message({title, content, author});
    console.log(newMessage)
    return await newMessage.save();
  }
}

export default Mutation;