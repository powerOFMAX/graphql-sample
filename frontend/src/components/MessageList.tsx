import React from "react";
import { useQuery, gql } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

type Message = {
  _id: string,
  title: string,
  content: string,
  author: string,
}

const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>Error</p>;

  return data.messages.map(({ _id, title, content, author }: Message) => (
    <div key={_id} className="column is-half is-offset-one-quarter box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="user-icon"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{author}</strong> <small>@{title}</small>{" "}
              <small>31m</small>
              <br />
              {content}
            </p>
          </div>
        </div>
      </article>
    </div>
  ));
};

export default MessageList;
