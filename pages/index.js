import NewsLetter from "@/components/NewsLetter";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import MonitorGrid from "@/components/MonitorGrid";
// import Tags from "@/components/Tags";

export default function Home({ posts }) {
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard key={post.title} post={post.node}/>
            ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-2">
            <PostWidget/>
            <Categories/>
            {/* <Tags/> */}
          </div>
        </div>
    </div>
    </div>
    <MonitorGrid/>
    <NewsLetter/>
    </>
  )
};


export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  }
} 
