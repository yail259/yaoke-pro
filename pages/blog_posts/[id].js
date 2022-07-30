import { getPostByID, getAllPostIds } from '../../components/posts';
import md from 'markdown-it';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const post_data = getPostByID(params.id);
  
    return {
      props: post_data,
    };
  }


export default function Blog(post_data) {
  console.log(post_data);
  const {frontmatter, content} = post_data;
    
  return (
    <>

      <div className='mx-8 mt-16 p-6 place-content-center flex'>
        
        <div className="mx-8 p-6 min-w-0 max-w-screen-lg content-center justify-center" >

          {/* <h1 className="leading-relaxed text-5xl underline decoration-wavy decoration-stone-500 text-white">
            {frontmatter.title} <br/>
          </h1>

          <div className="text-2xl p-6">
             {frontmatter.date}
          </div> */}

          <p className="prose dark:prose-invert lg:prose-xl prose-stone">
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </p>
        
        </div>
        
      </div>
      
    </>
  );
}