import Link from 'next/link';
import LinkWrapper from '../lib/LinkerWrapper';
import { useEffect, useState } from 'react';

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
  const [brief_start, change_brief] = useState(0);
  const [preview, change_preview] = useState("");

  const content = post_data[0].blog_content;

  // console.log(content);

  useEffect (() => {
    const interval_id = setInterval(() => {
      change_brief(brief_start + 1);

    }, 1000);

    // console.log(content);
    change_preview(content.substr(brief_start, brief_start+50));

    return () => clearInterval(interval_id);
  })

  return (
    <>
      <ul className='mt-24 flex w-screen justify-center'>
        {post_data.map(({ id, date, title, blog_content }) => (
          <LinkWrapper goto={'blog_posts/' + id} key = {id}>
            <div className="my-6 py-4 p-6 px-4 mx-10 rounded-lg border shadow-md hover:text-morb-yellow" >

              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                {title} 
              </h5>

              <p className="mb-3">
                {preview}
              </p>

              <div className="">
                {date}
              </div>
            </div>
          </LinkWrapper>
        ))}
      </ul>
    </>
  );
}