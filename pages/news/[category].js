import Link from "next/link";
export default function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for category {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=saimislam"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
