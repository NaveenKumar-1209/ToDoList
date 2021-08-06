import React from 'react';
import './ItemList.css';

const ItemList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Todo List</h2>
      <ul>
        {props.listItem.map((ig) => (
          <li key={ig.id}>
            <span>{ig.name}</span>
            <div className="remove-edit">
              <span className="delete-btn" onClick={props.onRemoveItem.bind(this, ig.id)}>Delete</span>
              <span className="edit-btn" onClick={props.onEditItem.bind(this, ig.id)}>Edit</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;