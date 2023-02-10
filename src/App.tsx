import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input/Input";
import { List } from "./components/List/List";
import { Items } from "./components/Item";
import { ErrorModal } from "./components/UI/ErrorModal";

function App() {
  const [getItem, setItem] = useState<Items[]>([]);
  const setDataHandler = (name: string, age: number) => {
    const newItem = new Items(name, age);
    setItem((data) => {
      return data.concat(newItem);
    });
  };

  return (
    <div className="App">
      <Input getData={setDataHandler} />
      <List items={getItem} />
    </div>
  );
}

export default App;
