import { useState } from "react";

// create a custom hook that manages a boolean state
// argument - initialValue: boolean
// if no argument provided, initialValue defaults to false
// useBoolean hook returns an object with the following properties:
// value: boolean
// setTrue: () => void
// setFalse: () => void

type UseBooleanReturn = {
  value: boolean;
  makeTrue: () => void;
  makeFalse: () => void;
};

function useBoolean(initialValue: boolean = false): UseBooleanReturn {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    makeTrue: () => setValue(true),
    makeFalse: () => setValue(false),
  };
}

export default function Component() {
  const { value, makeTrue, makeFalse } = useBoolean();

  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={makeTrue}>Set True</button>
      <button onClick={makeFalse}>Set False</button>
    </div>
  );
}