import Message from '../../models/Message'

type Message = {
  title: string,
  content: string,
  author: string
}

const Mutation = {
  createMessage: async (_: any, { title, content, author }: Message) => {
    const newMessage = new Message({ title, content, author });
    console.log(newMessage)
    return await newMessage.save();
  }
}

export default Mutation;