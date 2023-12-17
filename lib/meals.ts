import fs from "node:fs";
import { MealsItem } from "@/components/meals-item";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal: MealsItem) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions as string);

  const extension = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`/public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error: any) => {
    if (error) {
      console.log(error);
      throw new Error("Saving Image Fialed !!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
      (slug,title,image,summary,instructions,creator,creator_email)
  VALUES (
    @slug,
    @title,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email
  )
  `
  ).run(meal);
};
