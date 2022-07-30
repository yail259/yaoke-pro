// import { getPostByID, getAllPostIds } from '../../components/posts';

// export async function getStaticPaths() {
//   const paths = getAllPostIds();

//   return {
//     paths,
//     fallback: false // false or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//     console.log(params);
//     const post_data = getPostByID(params.id);
  
//     return {
//       props: post_data,
//     };
//   }

// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";

// export async function getStaticProps({ params }) {
//   const posts_dir = path.join(process.cwd(), 'writing', params.id);

//   const mdx_content = await renderToString(posts_dir);
  
//   return { props: { source: mdx_content } };
// }

// export default function Blog(post_data) {
//   console.log(post_data);
//   const {title, date, blog_content} = post_data;
export default function Blog({source}) {
    // console.log(post_data);
    // const {title, date, blog_content} = post_data;

    const content = unified()
      .use(parse)
      .use(remark2react, {
        remarkReactComponents: {
          a: CustomLink,
        },
      })
      .processSync(source).result;
    
  return (
    <>

      <div className='mx-8 mt-16 p-6 place-content-center flex'>
        
        <div className="mx-8 p-6 min-w-0 max-w-screen-lg content-center justify-center" >

        {/* <h1 className="leading-relaxed text-5xl underline decoration-wavy decoration-stone-500 text-white">
            {title} <br/>
          </h1>

          <div className="text-2xl p-6">
             {date}
          </div> */}

          <div>

          </div>

          <p className="leading-loose tracking-wide text-xl text-cyan-50">
            {content}

          </p>
        
        </div>
        
      </div>
      
    </>
  );
}