import { name } from "../../App";
const favorite = {
  universe: "universe",
  url: "https://uiverse.io/",
};
const firstNumber = 3;
const secondNumber = 4;
const colors = ["Red", "Yellow", "Blue", "Green", "Black"];

export const Article = () => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://t3.ftcdn.net/jpg/02/90/11/84/360_F_290118426_6TczUVvbYer1rZm32y1ftS1NqfZS7b24.jpg"
        alt="Hello photo"
      />
      <a href={favorite.url}>{favorite.universe}</a>
      <p>{firstNumber + secondNumber}</p>
      <ul>
        {colors.map((color) => (
          <li>
            <p>{color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
