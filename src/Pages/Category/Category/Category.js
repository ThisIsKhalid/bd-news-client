import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummurayCard from "../../Shared/NewsSummurayCard/NewsSummurayCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>THis category has news: {categoryNews.length}</h1>
      {categoryNews.map((news) => (
        <NewsSummurayCard key={news._id} news={news}></NewsSummurayCard>
      ))}
    </div>
  );
};

export default Category;
