import classes from "@/styles/meals-grid.module.css";
import MealItem from "./meals-item";
const MealsGrid = ({ meals }: any) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
