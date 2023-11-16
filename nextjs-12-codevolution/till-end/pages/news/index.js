import React from 'react'

export default function News({ data }) {
  return (
    <div>{data}</div>
  )
}

export async function getStaticProps(context) {
    console.log("ran static props", context.previewData);
    return {
        props: {
            data: context.preview ? "Hi I am draft article" : "Hi I am a text"
        }
    }
}