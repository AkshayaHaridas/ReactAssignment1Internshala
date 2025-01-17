import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import style from "./List.module.css";
function ToDoItem(props) {
  return (
    <ul>
      {props.listOfToDos.map((item, index) => {
        return (
          <li key={item.Id}>
            <div className={style.item}>
              <div className={style.number}>{index + 1 + "."}</div>
              <div className={style.displayItem}>{item.Item}</div>
            </div>

            <div className={style.editDiv}>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => props.editMethod(item.Id)}
                className={style.editIcon}
              />
            </div>
            <div className={style.trashDiv}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => props.deleteMethod(item.Id)}
                className={style.trashIcon}
              />
            </div>
            <div className={style.checkBox}>
              {" "}
              {item.Complete === false ? (
                <div>
                  <input
                    type="checkbox"
                    onChange={() => props.handleComplete(item.Id)}
                    className={style.checkBoxStyle}
                  />
                </div>
              ) : (
                <div className={style.checkBoxComplete}>
                  <input
                    type="checkbox"
                    onChange={() => props.handleComplete(item.Id)}
                    className={style.checkBoxStyle}
                  />
                  <div className={style.completeBlock}>Completed</div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default ToDoItem;
