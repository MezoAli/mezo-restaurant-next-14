import Link from "next/link";
import Image from "next/image";

import classes from "@/styles/meals-item.module.css";

export interface MealsItem {
  title: string;
  slug?: string;
  image: any;
  summary: string;
  creator: string;
  creator_email?: string;
  instructions?: string;
}

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealsItem) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
