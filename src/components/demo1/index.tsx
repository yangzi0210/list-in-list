import React from "react";
import useStore from "../../store";
import styles from "./index.module.less";
import { Card, Input } from "antd";

const Demo = () => {
  const setCount = useStore((state) => state.setCount);
  const count = useStore((state) => state.count);

  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={styles.container}>
      <Card>
        <div>count:{count}</div>
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setCount(e.target.value);
          }}
        />
      </Card>
    </div>
  );
};

export default Demo;
