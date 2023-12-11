const SlugMealsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div>SlugMealsPage</div>
      <p>Slug : {params.slug}</p>
    </>
  );
};

export default SlugMealsPage;
