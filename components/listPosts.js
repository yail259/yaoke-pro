import Link from 'next/link';
import LinkWrapper from '../lib/LinkerWrapper';

export default function ListPost({post_data}) {
    return(
        <>
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

                            <div className="">
                                {date}
                            </div>
                        </div>
                    </LinkWrapper>
                ))}
            </ul>
        </>
    )
}