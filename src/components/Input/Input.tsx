import React, { FormEvent, useState, useRef } from "react";
import classes from "./Input.module.css";
import { Card } from "../UI/Card";

export const Input: React.FC<{
  getData: (text: string, age: number) => void;
}> = (props) => {
  const InputUseRef = useRef<HTMLInputElement>(null);
  const InputNumberUseRef = useRef<HTMLInputElement>(null);
  const [getInputUsername, setInput] = useState<string>("");
  const [getInputAge, setInputAge] = useState<number>(0);
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (getInputUsername.trim().length === 0 || getInputAge === 0) {
      
    }
    props.getData(getInputUsername, getInputAge);
    InputUseRef.current!.value = "";
    InputNumberUseRef.current!.value = "";
  };
  const userAgeInputHandler = () => {
    (e: FormEvent) => {
      setInputAge(parseInt((e.target as HTMLInputElement).value));
    }
  }
  const userNameInputHandler = () => {
    (e: FormEvent) => {
      setInput((e.target as HTMLInputElement).value);
    }
  }
  return (
    <div>
      <Card>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <input
            className={classes.inputText}
            type="text"
            ref={InputUseRef}
            placeholder="Name"
            onChange={userNameInputHandler}
          />
          <input
            className={classes.inputText}
            type="number"
            placeholder="Age"
            ref={InputNumberUseRef}
            onChange={userAgeInputHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </Card>
    </div>
  );
};
