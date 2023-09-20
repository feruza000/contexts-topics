import React from "react";
import TopicContextProvider from "./context/TopicContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <TopicContextProvider>
        <MainRoutes />
      </TopicContextProvider>
    </>
  );
};

export default App;
