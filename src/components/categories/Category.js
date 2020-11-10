import React from 'react';
import './categories.css'

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return(
      <div className="cat-list">
        <h5>{category.name}</h5>
      </div>
    )
  }
}

export default Category;
