import {useState} from "react";

export interface TestComponentProps {
  label: string;
}

export const TestComponent = (props: TestComponentProps) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <h6>Count: {count}</h6>
      <button onClick={handleClick}>{props.label}</button>
    </div>
  );
};

TestComponent;
