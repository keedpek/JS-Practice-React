// Реализовать форму c помощью функциональных компонентов, в форме должно быть реализовано одно поле и значение этого поля нужно выводить в консоль после нажатия на кнопку, которая находится тоже в форме. Нужно использовать хук useRef для того, чтобы вывести значение, которое введено в input.
import React, { useRef } from "react";

const App = () => {
  const input = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(input.current.value);
      }}
    >
      <input ref={input} />
      <button>Вывести</button>
    </form>
  );
};

export default App;
