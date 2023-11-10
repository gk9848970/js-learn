import React from 'react'

export default function Category({ articles, category }) {
    return (
        <>
            <div>{category}</div>
            {articles.map(article => (
                <div key={article.id}>
                    <div>{article.id}</div>
                    <div>Title {article.title} </div>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = context.params;
    const response = await fetch(`http://localhost:3001/articles?category=${category}`);
    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}
