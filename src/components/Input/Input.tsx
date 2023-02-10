import React, { FormEvent, useState, useRef } from "react";
import classes from "./Input.module.css";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";

export const Input: React.FC<{
  getData: (text: string, age: number) => void;
}> = (props) => {
  const userAgeInputRef = useRef<HTMLInputElement>(null);
  const [getInputUsername, setInputUsername] = useState<string>("");
  const [getInputAge, setInputAge] = useState<number>(Number);
  const [getIsError, setIsError] = useState<
    { error: boolean; title: string; message: string } | undefined
  >();
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (getInputUsername.trim().length === 0 || getInputAge < 1) {
      setIsError({
        error: true,
        title: "Invalid Input",
        message: "Enter a valid Username and Age",
      });
      return;
    }
    props.getData(getInputUsername, getInputAge);
    setInputUsername("");
    setInputAge(Number);
    userAgeInputRef.current!.value = "";
  };
  const usernameInputHandler = (e: FormEvent) => {
    setInputUsername((e.target as HTMLInputElement).value);
  };
  const userAgeInputHandler = (e: FormEvent) => {
    setInputAge(parseInt((e.target as HTMLInputElement).value));
  };
  return (
    <div>
      {getIsError && (
        <ErrorModal
          title={getIsError.title}
          message={getIsError.message}
          isError={() => {
            setIsError(undefined);
          }}
        />
      )}
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
