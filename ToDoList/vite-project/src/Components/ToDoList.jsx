import { useState } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./List.module.css";
function ToDoList() {
  //state for new item adding
  const [newItem, setnewItem] = useState("");
  //state for creating and updating list
  const [list, setList] = useState([]);
  //state for adding id for the item
  const [id, setId] = useState(1);
  const [editId, setEditId] = useState(0);
  function handleClick() {
    if (editId == 0) {
      if (newItem !== "") {
        setId((id) => id + 1);
        setList((list) => [
          ...list,
          { Id: id, Item: newItem, Complete: false },
        ]);
        setnewItem("");
      }
    } else {
      let x = list.find((x) => x.Id == editId);
      x.Item = newItem;
      setList((list) => [...list]);
      setEditId(0);
      setnewItem("");
    }
  }
  function handleInputChange(e) {
    setnewItem(e.target.value);
  }

  function handleDelete(id) {
    setList((list) => list.filter((x) => x.Id !== id));
    // set the
    if (editId !== 0) {
      setEditId(0);
      setnewItem("");
    }
  }

  function handleEdit(id) {
    console.log("hii ", id);
    setEditId(id);
    console.log(editId);
    let x = list.find((x) => x.Id == id);
    setnewItem(x.Item);
  }

  function handleComplete(id) {
    let x = list.find((x) => x.Id == id);
    x.Complete = !x.Complete;
    setList((list) => [...list]);
  }
  return (
    <div className={styles.itemsWithInput}>
      <div className={styles.addItem}>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="add new item here"
        />
        <button onClick={handleClick}>{editId == 0 ? "ADD" : "SAVE"}</button>
      </div>

      <ToDoItem
        listOfToDos={list}
        deleteMethod={handleDelete}
        editMethod={handleEdit}
        handleComplete={handleComplete}
      />
    </div>
  );
}
export default ToDoList;
