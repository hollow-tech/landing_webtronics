import React from "react";
import styles from "./Stack.module.css";

export const Stack: React.FC = () => {
  return (
    <div className={styles.stack}>
      <div className={styles.stack_item_wrapper}>
        <div className={styles.stack_item}>
          <img
            src="/content/stack/icons/angular.svg"
            alt="angular logo"
            className={styles.stack_item_logo}
          />
          <h4>Angular</h4>
        </div>
      </div>

      <div className={styles.stack_item_wrapper}>
        <div className={styles.stack_item}>
          <img
            src="/content/stack/icons/react.svg"
            alt="angular logo"
            className={styles.stack_item_logo}
          />
          <h4>React</h4>
        </div>
      </div>

      <div className={styles.stack_item_wrapper}>
        <div className={styles.stack_item}>
          <img
            src="/content/stack/icons/vue.svg"
            alt="angular logo"
            className={styles.stack_item_logo}
          />
          <h4>Vue.js</h4>
        </div>
      </div>

      <div className={styles.stack_item_wrapper}>
        <div className={styles.stack_item}>
          <img
            src="/content/stack/icons/js.svg"
            alt="angular logo"
            className={styles.stack_item_logo}
          />
          <h4>JavaScript</h4>
        </div>
      </div>
    </div>
  );
};
