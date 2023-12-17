"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An Error Occured</h1>
      <p>{error?.message}</p>
      <p>
        Do Not Play With Us, Stop Removing The Required Attribute From The
        Console
      </p>
    </main>
  );
};

export default Error;
