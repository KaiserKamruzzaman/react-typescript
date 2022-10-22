import React from "react";
import { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label>Todo Text</label>
        <input type="text" ref={textInputRef} />
      </div>
      <br></br>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
