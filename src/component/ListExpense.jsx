import { useEffect, useState } from "react";

const Item = ({ item }) => (
  <div className="item">
    <div className="icon"></div>
    <div className="detail">
      <div className="title">{item.name}</div>
      <div className="sub-title">on {item.date}</div>
    </div>
    <div className="price">$ {item.price}</div>
  </div>
);

const Form = ({ onAdd }) => {
  const [expenseDetail, setExpenseDetail] = useState({
    name: "",
    price: ""
  });

  const handleChange = (type) => (event) => {
    setExpenseDetail((oldState) => ({
      ...oldState,
      [type]: event.target.value
    }));
  };

  const handleAdd = () => {
    onAdd(expenseDetail);
  };

  return (
    <div className="form">
      <div>
        <label>Name</label>
        <input value={expenseDetail.name} onChange={handleChange("name")} />
      </div>
      <div>
        <label>Price</label>
        <input value={expenseDetail.price} onChange={handleChange("price")} />
      </div>
      <button onClick={handleAdd}>Add Expense</button>
    </div>
  );
};

const List = ({ data }) => {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

const ListExpense = ({ addExpense }) => {
  const [isFormVisible, toggleFormVisbility] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      name: "Paid for food 1",
      price: "500",
      date: "08/10/2022"
    },
    {
      id: 2,
      name: "Paid for food 2",
      price: "500",
      date: "08/10/2022"
    },
    {
      id: 3,
      name: "Paid for food 3",
      price: "500",
      date: "08/10/2022"
    }
  ]);

  useEffect(() => {
    console.log("inside", list);
  }, [list]);

  const handleToggle = () => {
    toggleFormVisbility((oldState) => !oldState);
  };

  const handleAdd = (newValue) => {
    setList((oldState) => [{ ...newValue, date: "10/10/2022" }, ...oldState]);
    addExpense(newValue.price);
    handleToggle();
  };

  return (
    <div className="list">
      <div className="heading">
        <div className="text"> All Expense</div>
        <button onClick={handleToggle}>+</button>
      </div>
      {isFormVisible ? <Form onAdd={handleAdd} /> : <List data={list} />}
    </div>
  );
};

export default ListExpense;
