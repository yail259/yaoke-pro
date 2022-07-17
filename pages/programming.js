import Link from 'next/link';

const post_info = {
    title: "The beginner's pitfalls of programming in Python.",
    date: "27.06.2022",
}

// export async function getStaticProps() {
//   let fs = require("fs");
//   let text = fs.readFileSync('../pages/prog_blog/pitfall.js', "utf-8");

//   const words = text.split(' ');

//   let word_len = words.filter(word => word !== '').length;

//   let min = word_len / 100;

//   return {
//     props: {word_len: word_len, min: min}, // will be passed to the page component as props
//   }
// }

export default function Blog() {
  return (
    <>

      <ul className='mt-24 flex w-screen justify-center'>
        
          <LinkWrapper goto='/prog_blog/pitfall'
          component = {
            <div className="my-6 py-4 p-6 px-4 mx-10 rounded-lg border shadow-md hover:text-morb-yellow" >

                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  {post_info.title}
                </h5>
    
                <p className="mb-3 font-norma">
                  {' '} {post_info.date}
                </p>
    
                <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-cente rounded-lg">
                  Approximately 500 words long. 5 min read.
                </div>
            </div>
          }
          />

      </ul>
    </>
  );
}