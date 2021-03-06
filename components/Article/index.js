import React from 'react';
import PropTypes from 'prop-types';
// import ShareBar from './ShareBar';
import Breadcrumb from './Breadcrumb';
import CommentSection from './CommentSection';
import './style.scss';

const Article = ({
  articleId,
  breadcrumb = [],
  title,
  content,
  publishedAt,
}) => (
  <div id="article">
    <Breadcrumb breadcrumb={breadcrumb} />
    <article id="content">
      <h1>{title}</h1>
      <hr />
      {content}
      <p>
        Publish at &emsp;
        <time dateTime={publishedAt}>{new Date(publishedAt).toLocaleString()}</time>
      </p>
    </article>
    {/* <ShareBar /> */}
    <CommentSection articleId={articleId} />
  </div>
);

Article.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  breadcrumb: PropTypes.array.isRequired,
  publishedAt: PropTypes.array.isRequired,
};

export default Article;
