import { MealsItem } from "@/components/meals-item";
import { getMeal } from "@/lib/meals";
import classes from "@/styles/meal-details.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const meal: MealsItem = await getMeal(params?.slug);
  return {
    title: meal.title,
    description: meal.summary,
  };
};

const SlugMealsPage = async ({ params }: { params: { slug: string } }) => {
  const meal: MealsItem = await getMeal(params?.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal?.instructions?.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div>
          <Image
            src={meal?.image}
            alt={meal?.slug as string}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />{" "}
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
          </p>
          <p className={classes.summary}>{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal?.instructions as string }}
        ></p>
      </main>
    </>
  );
};

export default SlugMealsPage;
