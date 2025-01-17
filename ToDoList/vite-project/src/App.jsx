import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import styles from "./Components/List.module.css";
function App() {
  return (
    <div className={styles.page}>
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
