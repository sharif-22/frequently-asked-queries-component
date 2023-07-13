import React from "react";
import reactWebDevQueries from "./Components/DB/frequentelyAskedQueries";
import Question from "./Components/Question/Question";
const App = () => {
  const questions = reactWebDevQueries;
  return (
    <>
      <main className="container ">
        <div>
          <h1> People also ask : </h1>
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
