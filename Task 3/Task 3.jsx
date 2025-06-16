// Необходимо реализовать функциональный компонент InputNumber, в котором нужно ввести число в input и в зависимости отрицательное или положительное это число в компоненте Message нужно выводить информацию: ”Число больше нуля” / “Число меньше нуля”.
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const generateMessage = (num) => {
    if (num < 0) {
      return "Число меньше 0";
    } else if (num > 0) {
      return "Число больше 0";
    } else if (num === 0) {
      return "Число равно 0";
    } else {
      return "Что-то пошло не так";
    }
  };

  return (
    <>
      <InputNumber
        value={num}
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />
      <Message message={generateMessage(num)} />
    </>
  );
};

const InputNumber = (props) => {
  return <input type="number" placeholder="Введите число" {...props} />;
};

const Message = ({ message }) => {
  return <p>{message}</p>;
};

export default App;
