import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

const openingDataOptions = {
	title: "", 
	author: "",
	content: "",
	tags: "",
	date: "",

};


export const App = () => {

	const [pages, setPages] = useState([]);
	const [data, setData] = useState(null)
	const [isAddingArticle, setisAddingArticle] = useState(false);
	const [inputOptions, setInputOptions] = useState(openingDataOptions);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} />
		</main>
	)
}