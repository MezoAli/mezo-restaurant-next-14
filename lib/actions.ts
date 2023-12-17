"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { MealsItem } from "@/components/meals-item";

export async function shareMeal(formData: FormData) {
  const meal: MealsItem = {
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image"),
  };

  await saveMeal(meal);

  redirect("/meals");
}
