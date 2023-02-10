import React, { FormEvent, useState, useRef } from "react";
import classes from "./Input.module.css";
import { Card } from "../UI/Card";

export const Input: React.FC<{
  getData: (text: string, age: number) => void;
}> = (props) => {
  const userAgeInputRef = useRef<HTMLInputElement>(null);
  const [getInputUsername, setInputUsername] = useState<string>("");
  const [getInputAge, setInputAge] = useState<number>(Number);
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (getInputUsername.trim().length === 0 || getInputAge < 1) {
      return;
    }
    props.getData(getInputUsername, getInputAge);
    setInputUsername("");
    setInputAge(Number);
    userAgeInputRef.current!.value = '';
  };
  const usernameInputHandler = (e: FormEvent) => {
    setInputUsername((e.target as HTMLInputElement).value);
  };
  const userAgeInputHandler = (e: FormEvent) => {
    setInputAge(parseInt((e.target as HTMLInputElement).value));
  };
  return (
    <div>
      <Card>
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <input
            className={classes.inputText}
            type="text"
            placeholder="Name"
            value={getInputUsername}
            onChange={usernameInputHandler}
          />
          <input
            className={classes.inputText}
            type="number"
            placeholder="Age"
            ref={userAgeInputRef}
            onChange={userAgeInputHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </Card>
    </div>
  );
};
