import Link from 'next/link';

const post_info = {
    title: "The beginner's pitfalls of programming in Python.",
    date: "27.06.2022",
}

export default function Blog() {
  return (
    <>

      <ul className='mt-24'>
        
          <Link href={'prog_blog/pitfall'}>
            <div className=" cloumns-2 my-6 py-4 p-6 px-4 mx-10 rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700 text-white hover:text-blue-400" >

                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  {post_info.title}
                </h5>
    
                <p className="mb-3 font-normal hover:text-green-300">
                  
                </p>
    
                <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-cente rounded-lg focus:ring-4 focus:outline-none ring-gray-600 bg-gray-700 focus:ring-gray-900">
                  {post_info.date}
                </div>
            </div>
          </Link>

      </ul>
    </>
  );
}