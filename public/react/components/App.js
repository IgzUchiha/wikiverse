import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { SinglePage } from "./SinglePage";
import { AddingArticle } from "./AddingArticle";

const openingDataOptions = {
  title: "",
  author: "",
  content: "",
  tags: "",
  date: "",
};

export const App = () => {
  const [pages, setPages] = useState([]);
  const [data, setData] = useState(null);
  const [isAddingArticle, setisAddingArticle] = useState(false);
  const [article, setArticle] = useState(null);
  const [inputOptions, setInputOptions] = useState(openingDataOptions);
  console.log(pages);
  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchArticleData(page) {
    console.log(page);
    try {
      const res = await fetch(`${apiURL}/wiki/${page.slug}`);
      const articleData = await res.json();
      setData(articleData);
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
	
      {data ? (
        <div>
          <SinglePage pages={pages} data={data} setData={setData} />
        </div>
      ) : isAddingArticle ? (
		<div>
			<AddingArticle setisAddingArticle={setisAddingArticle} isAddingArticle={isAddingArticle} fetchPages={fetchPages}/>
		</div>
	  ) : (
        <div className="this">
          <h1>WikiVerse</h1>
          <h2>An interesting Sacred Text 📚</h2>
          <PagesList pages={pages} fetchArticleData={fetchArticleData} />
          <button onClick={() => setisAddingArticle(true)}>Create Page</button>
        </div>
		
      )}
    </main>
  );
};
