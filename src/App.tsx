import styles from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faHeart,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navBar}>
        <h2>Fnova</h2>
        <div>
          <input
            type="text"
            placeholder="What are you searching for?"
            className={styles.input}
          />
          <i>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faSearch as IconProp}
            />
          </i>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon className={styles.icon} icon={faUser as IconProp} />
          <FontAwesomeIcon className={styles.icon} icon={faHeart as IconProp} />
          <FontAwesomeIcon
            className={styles.icon}
            icon={faBagShopping as IconProp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
