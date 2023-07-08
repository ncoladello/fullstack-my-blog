import articles from "./article-content";

import React from "react";
import ArticlesList from "../components/ArticlesList";
const ArticlesListPage = () => {
return(
  <section>
    <h1>Articles</h1>
    <ArticlesList articles ={articles}/>

    </section>
)
};

export default ArticlesListPage;
