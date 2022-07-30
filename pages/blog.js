import Link from 'next/link';
import LinkWrapper from '../lib/LinkerWrapper';

import { getPostsData } from '../components/posts';

export async function getStaticProps() {
  const post_data = getPostsData();

  return {
    props: {
      post_data,
    },
  };
}

export default function Blog({ post_data }) {
  return (
    <>
      {console.log(post_data)}
      <ul className='mt-24 flex w-screen justify-center'>
        {post_data.map(({ id, date, title, blog_content }) => (
          <LinkWrapper goto={'blog_posts/' + id} key = {id}>
            <div className="my-6 py-4 p-6 px-4 mx-10 rounded-lg border shadow-md hover:text-morb-yellow" >

              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                {title} 
              </h5>

              <p className="mb-3">
                {blog_content.substr(0, 99)}
              </p>

              <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-cente rounded-lg">
                {date}
              </div>
            </div>
          </LinkWrapper>
        ))}
      </ul>
    </>
  );
}