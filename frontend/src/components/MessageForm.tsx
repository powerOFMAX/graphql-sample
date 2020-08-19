import React, { useState } from "react";
import { gql, useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, author: $author, content: $content) {
      _id
      author
    }
  }
`;

const MessageForm = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [createMessage] = useMutation(CREATE_MESSAGE);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await createMessage({ variables: { title, content, author } });
  }

  return (
    <form
      onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      className="column is-one-third is-offset-one-third"
    >
      <div className="field">
        <p className="control has-icons-right">
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title.."
          />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input
            className="input"
            value={author}
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author.."
          />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <textarea
            value={content}
            className="textarea"
            onChange={(e) => setContent(e.target.value)}
            placeholder="e.g. Hello world"
          />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">Submit</button>
        </p>
      </div>
    </form>
  );
};

export default MessageForm;
