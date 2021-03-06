import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../../../containers/CommentForm';
import CommentList from '../../../containers/CommentList';
import './style.scss';

const CommentSection = ({ articleId }) => (
  <div className="article-comments">
    <h2>Commnets</h2>
    <CommentForm articleId={articleId} />
    <hr />
    <CommentList articleId={articleId} />
  </div>
);

CommentSection.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default CommentSection;
