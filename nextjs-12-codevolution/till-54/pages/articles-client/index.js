import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function ArticlesClient({ articles }) {
    const [data, setData] = useState(articles);
    const router = useRouter();

    const fetchStocksArticles = async () => {
        const response = await fetch('http://localhost:3001/articles?category=stocks');
        const data = await response.json();
        setData(data);
        // router.push('/articles-client?category=stocks');
        router.push('/articles-client?category=stocks', undefined, { shallow: true });
    }

    return (
        <div>
            <button onClick={fetchStocksArticles}>Filter</button>
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

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const queryString = category ? "category=stocks" : "";
    const response = await fetch(`http://localhost:3001/articles?${queryString}`);
    const data = await response.json();
    console.log("Server side props ran", data);

    return {
        props: {
            articles: data
        }
    }
}
