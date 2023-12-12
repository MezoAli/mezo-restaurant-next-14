import classes from "@/styles/meals-grid.module.css";
import MealItem, { MealsItem } from "./meals-item";
const MealsGrid = ({ meals }: { meals: MealsItem[] }) => {
  return (
    <ul className={classes.meals}>
      {meals?.map((meal: any) => {
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
