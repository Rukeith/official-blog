import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import SideBar from '../../containers/SideBar';
import './style.scss';

// const content = `It is a long established fact that a reader will be distracted by 
//   the readable content of a page when looking at its layout. The point of using 
//   Lorem Ipsum is that it has a more-or-less normal distribution of letters,
//    as opposed to using 'Content here, content here', making it look like readable English. 
//   Many desktop publishing packages and web page editors now use Lorem Ipsum as their default 
//   model text, and a search for 'lorem ipsum' will uncover many web sites still 
//   in their infancy. Various versions have evolved over the years, 
//   sometimes by accident, sometimes on purpose (injected humour and the like).`;

const ArticlePage = ({
  article: {
    id,
    title,
    content,
    breadcrumb,
    publishedAt,
  },
}) => (
  <main id="article-page">
    <Article
      articleId={id}
      breadcrumb={breadcrumb}
      title={title}
      content={content}
      publishedAt={publishedAt}
    />
    <SideBar />
  </main>
);

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePage;
