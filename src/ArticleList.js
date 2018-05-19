import React from 'react';

import data from './articles-data';

const articles = data.hn.topStories;

function Article(props) {
  const {
    id,
    text,
    url,
    by: {
      id: username,
    },
    timeISO,
    title,
  } = props;

  return (
    <div className="article">
      <h4><a href={url} target="_blank">{title}</a></h4>
      <p>By {username} on {getDate(timeISO)}</p>
      <p>{text}</p>
    </div>
  );
}

function ArticleList() {
  return (
    <div className="article-list">
      <h2>Hacker News Top stories</h2>
      {articles.map(Article)}
    </div>
  );
}

export default ArticleList;

function getDate(str) {
  // stolen from: https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
  var dateObj = new Date(str);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  return year + "/" + month + "/" + day;
}
