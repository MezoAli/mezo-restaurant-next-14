"use client";
const Error = ({ error, reset }: { error: any; reset: any }) => {
  console.log(error);

  return (
    <main className="error">
      <h1>An Error Occured</h1>
      <p>Can Not Fetch Meals</p>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </main>
  );
};

export default Error;
