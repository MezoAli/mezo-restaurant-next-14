import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";
import classes from "@/styles/meals-page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading-out";

const GetMeals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals Created{" "}
          <span className={classes.highlight}> By You</span>
        </h1>
        <p>Choose Your Favorite Recipe and Cook It, It is Really Fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
