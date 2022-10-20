import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummurayCard from "../Shared/NewsSummurayCard/NewsSummurayCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1>BD News Home: {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummurayCard key={news._id} news={news}></NewsSummurayCard>
      ))}
    </div>
  );
};

export default Home;
