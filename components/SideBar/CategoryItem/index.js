import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './style.scss';

const CategoryItem = ({ items = [], month, labelId }) => (
  <label className="category-item-label" htmlFor={labelId}>
    <span className="category-month">
      {month}
      月
    </span>
    <input id={labelId} type="checkbox" />
    <span className="fa" />
    <div className="category-article-list">
      {items.map(title => (
        <Link href={`/articles/${title}`}>
          <span className="category-article-title" title={title} key={title}>
            {title}
          </span>
        </Link>
      ))}
    </div>
  </label>
);

CategoryItem.defaultProps = {
  items: [],
};

CategoryItem.propTypes = {
  items: PropTypes.array,
  month: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
};

export default CategoryItem;
