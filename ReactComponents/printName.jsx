import { useEffect, useState } from "react";

// double how many times the name gets printed each time 

export default function PrintName() {
  const [name, setName] = useState(["Jessica"]);

  useEffect(() => {
    setTimeout(() => {
      console.log(name);
      setName((prevName) => [...prevName, name]);
    }, 1000);
  }, [name]);

  return <div>{name}</div>;

}
