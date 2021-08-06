import React from "react";
import Card from "./UI/Card";
import "./ToDoList.css";
import ItemList from "./ItemList";
import CustomItem from "./static/CustomItem";

const ToDoList = React.memo((props) => {
  const {
    value: enteredProduct,
    totalValue: totalProduct,
    toggleSubmit: isToggleButton,
    nameChangeHandler: productChangeHandler,
    submitHandler: productSubmitHandler,
    removeItemHandler: removeProductHandler,
    editItemHandler: editProductHandler,
  } = CustomItem();

  return (
    <>
      <section className="ingredient-form">
        <Card>
          <form onSubmit={productSubmitHandler}>
            <div className="form-control">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                id="title"
                value={enteredProduct}
                onChange={productChangeHandler}
              />
            </div>
            <div className="ingredient-form__actions">
              {isToggleButton ? (
                <button type="submit">Add Item</button>
              ) : (
                <button type="submit">Update Item</button>
              )}
            </div>
          </form>
        </Card>
      </section>
      <section>
        <ItemList
          listItem={totalProduct}
          onRemoveItem={removeProductHandler}
          onEditItem={editProductHandler}
        />
      </section>
    </>
  );
});

export default ToDoList;
