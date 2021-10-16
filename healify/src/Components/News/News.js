

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div className={newsstyles.bodyy}>
      <h1 className={newsstyles.head__text}>News Articles</h1>
      <div className={newsstyles.all__news}>
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
