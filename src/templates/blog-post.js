import React from 'react';
import marked from 'marked';

export default ({ data }) => {
  return (
    <div>
      <h2>{data.steemPost.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(data.steemPost.body) }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($permlink: String!) {
    steemPost(permlink: { eq: $permlink }) {
      title
      body
    }
  }
`;
