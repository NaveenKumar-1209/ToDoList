import { useState, useEffect } from "react";

const getItem = (props) => {
  let data = localStorage.getItem("totalItem");

  if (data) {
    return JSON.parse(localStorage.getItem("totalItem"));
  } else {
    return [];
  }
};

const CustomItem = () => {
  const [enteredItem, setEnteredItem] = useState("");
  const [totalItem, setTotalItem] = useState(getItem());
  const [isToggle, setIsToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const nameChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredItem) {
      alert("Please fill the item");
    } else if (enteredItem && !isToggle) {
      setTotalItem(
        totalItem.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: enteredItem };
          }
          return item;
        })
      );
      setIsToggle(true);
      setEnteredItem("");
      setIsEditItem(null);
    } else {
      const allData = {
        id: new Date().getTime().toString(),
        name: enteredItem,
      };
      setTotalItem([...totalItem, allData]);
      setEnteredItem("");
    }
  };

  const removeItemHandler = (index) => {
    setTotalItem((prevItem) =>
      prevItem.filter((item) => {
        return item.id !== index;
      })
    );
  };

  const editItemHandler = (index) => {
    let newItem = totalItem.find((item) => {
      return item.id === index;
    });
    setIsToggle(false);
    setEnteredItem(newItem.name);
    setIsEditItem(index);
  };

  useEffect(() => {
    localStorage.setItem("totalItem", JSON.stringify(totalItem));
  }, [totalItem]);

  return {
    value: enteredItem,
    totalValue: totalItem,
    toggleSubmit: isToggle,
    nameChangeHandler,
    submitHandler,
    removeItemHandler,
    editItemHandler,
  };
};

export default CustomItem;
