import React from 'react'

export default function Articles({ articles }) {
  return (
    <div>
        <div>Articles are here</div>
        {articles.map(article => (
            <div key={article.id}>
                <div>{article.id}</div>
                <div>Title {article.title} </div>
            </div>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3001/articles');
    const data = await response.json();

    return {
        props: {
            articles: data
        }
    }
}
