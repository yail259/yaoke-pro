
import { useEffect, useState } from 'react';

import { getPostsData } from '../components/posts';
import ListPost from '../components/listPosts';

export async function getStaticProps() {
  const post_data = getPostsData("writing");

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
      <ListPost post_data={post_data} />
    </>
  );
}