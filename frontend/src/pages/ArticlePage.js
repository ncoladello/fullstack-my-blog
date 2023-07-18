import {useState, useEffect} from 'react' ;
import { useParams } from "react-router-dom";
import axios from 'axios';
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from '../components/CommentsList';

const ArticlePage = () => {

const [articleInfo, setArticleInfo]= useState({upvotes:0, comments: [],});

useEffect(()=>{

})

  const { articleId } = useParams();
  
  useEffect( ()=>{
    const loadArticleInfo = async ()=> {
      const response = await axios.get(`/api/articles/${articleId}`)
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();

  },[])
  
  const article = articles.find((article) => article.name === articleId);
  


  if (!article) return <NotFoundPage />;

  return (
    <section>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <CommentsList comments={articleInfo.comments}/>
    </section>
  );
};

export default ArticlePage;
