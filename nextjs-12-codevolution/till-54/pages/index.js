import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Next JS pre rendering</div>
      <Link href="/posts">Posts</Link>
    </>
  )
}

export async function getServerSideProps() {
  console.log("This is our home")
  return {
    props: {

    }
  }
}
