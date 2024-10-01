import React from "react";
import styles from "./index.module.less";
import ListItem from "../ListItem";

const List = () => {
  return (
    <div className={styles.container}>
      <ListItem />
    </div>
  );
};

export default List;
