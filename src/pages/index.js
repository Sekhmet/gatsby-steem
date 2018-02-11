import React from 'react';
import PostPreview from '../components/PostPreview';

export default ({ data }) => {
  return (
    <div>
      {data.allSteemPost.edges.map(({ node }) => <PostPreview key={node.id} node={node} />)}
    </div>
  );
};

export const query = graphql`
  query BlogPostsQuery {
    allSteemPost(filter: { author: { eq: "sekhmet" } }, sort: { fields: [created], order: DESC }) {
      edges {
        node {
          id
          title
          author
          created
          permlink
        }
      }
    }
  }
`;
