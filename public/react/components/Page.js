import React from 'react';

export const Page = ({page, fetchArticleData}) => {

  return <>
    <h3 onClick={() => (fetchArticleData(page))}>{page.title}  </h3>
  </>
} 
	