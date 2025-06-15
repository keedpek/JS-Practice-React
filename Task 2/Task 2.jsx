import React, { useState } from "react";
import "./style.css";

const App = ({
  text = 'Создать компонент, которому передаем текст (3-4 предложения с точкой в конце каждого предложения). Компонент выводит только первое предложение. И есть кнопка "Показать подробнее" - при клике на неё выводиться вместо одного предложения весь текст. После этого, при нажатии на кнопку текст можно закрыть и должно отображаться одно предложение.',
}) => {
  const [isFull, setIsFull] = useState(false);

  const shortText = (text) => {
    return text.slice(0, text.indexOf(".") + 1);
  };

  return (
    <>
      <p>{isFull ? text : shortText(text)}</p>
      <button onClick={() => setIsFull((prev) => !prev)}>
        {isFull ? "Скрыть подробности" : "Показать подробнее"}
      </button>
    </>
  );
};

export default App;
