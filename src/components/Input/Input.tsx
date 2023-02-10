import React, { FormEvent, useState, useRef } from "react";
import classes from "./Input.module.css";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";

export const Input: React.FC<{
  getData: (text: string, age: number) => void;
}> = (props) => {
  const userNameInputRef = useRef<HTMLInputElement>(null);
  const userAgeInputRef = useRef<HTMLInputElement>(null);
  const [getIsError, setIsError] = useState<
    { error: boolean; title: string; message: string } | undefined
  >();
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredName: string = userNameInputRef.current!.value;
    const enteredAge: number = parseInt(userAgeInputRef.current!.value);
    if (enteredName.trim().length === 0 || enteredAge < 1) {
      setIsError({
        error: true,
        title: "Invalid Input",
        message: "Enter a valid Username and Age",
      });
      return;
    }
    props.getData(enteredName, enteredAge);
    userNameInputRef.current!.value = "";
    userAgeInputRef.current!.value = "";
  };
  return (
    <React.Fragment>
      {getIsError && (
        <ErrorModal
          title={getIsError.title}
          message={getIsError.message}
          closeDialogue={() => {
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
            ref={userNameInputRef}
          />
          <input
            className={classes.inputText}
            type="number"
            placeholder="Age"
            ref={userAgeInputRef}
          />
          <button type="submit">Submit</button>
        </form>
      </Card>
    </React.Fragment>
  );
};
