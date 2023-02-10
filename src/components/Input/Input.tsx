import React, { FormEvent, useState, useRef } from "react";
import classes from "./Input.module.css";

export const Input: React.FC<{ getData: (text: string, age: number) => void }> = (props) => {
  const InputUseRef = useRef<HTMLInputElement>(null);
  const InputNumberUseRef = useRef<HTMLInputElement>(null);
  const [getInput, setInput] = useState<string>("");
  const [getInputNumber, setInputNumber] = useState<number>(0);
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.getData(getInput, getInputNumber);
    InputUseRef.current!.value = "";
    InputNumberUseRef.current!.value = "";
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <input
          className={classes.inputText}
          type="text"
          ref={InputUseRef}
          onChange={(e: FormEvent) => {
            setInput((e.target as HTMLInputElement).value);
          }}
        />
        <input
          className={classes.inputText}
          type="number"
          ref={InputNumberUseRef}
          onChange={(e: FormEvent) => {
            setInputNumber(parseInt((e.target as HTMLInputElement).value));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
