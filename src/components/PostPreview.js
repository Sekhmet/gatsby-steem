import React from 'react';
import Link from 'gatsby-link';
import styles from './PostPreview.module.css';

const PostPreview = ({ node }) => (
  <div className={styles.postPreview}>
    <h2>
      <Link to={`/${node.permlink}`}>{node.title}</Link>
      <small>Posted: {new Date(node.created).toLocaleDateString()}</small>
    </h2>
  </div>
);

export default PostPreview;
