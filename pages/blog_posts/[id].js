import { getPostByID, getAllPostIds } from '../../components/posts';

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
  const {title, date, blog_content} = post_data;
    
  return (
    <>

      <div className='mt-16 p-6'>
        
        <div className="p-6 my-6" >

          <h1 className="text-5xl underline decoration-wavy decoration-stone-500 text-white">
            {title}
          </h1>

          <div className="text-lg p-6">
            {date}
          </div>

          <p className="">
            {blog_content}
          </p>
        
        </div>
        
      </div>
      
    </>
  );
}