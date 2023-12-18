"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { MealsItem } from "@/components/meals-item";
import { revalidatePath } from "next/cache";

const isValid = (text: string) => {
  return !text || text.trim() === "";
};

export async function shareMeal(formData: FormData) {
  const meal: MealsItem = {
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image"),
  };

  if (
    isValid(meal.creator) ||
    isValid(meal.instructions as string) ||
    isValid(meal.slug as string) ||
    isValid(meal.summary) ||
    isValid(meal.title) ||
    isValid(meal.creator_email as string) ||
    !meal.creator_email?.includes("@") ||
    !meal.image ||
    meal.image?.size === 0
  ) {
    throw new Error("Invalid Inputs");
  }

  await saveMeal(meal);

  revalidatePath("/meals");

  redirect("/meals");
}
