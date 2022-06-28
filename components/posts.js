import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const posts_dir = path.join(process.cwd(), 'writing');

export function getAllPostIds() {
    const fileNames = fs.readdirSync(posts_dir)
    return fileNames.map(fileName => {
        return {
        params: {
            id: fileName.replace(/\.md$/, '')
        }
        }
    })
}

export function getPostByID( id ) {

    const file_dir = path.join(posts_dir, `${id}.md`);
    const content = fs.readFileSync(file_dir, 'utf-8');

    const matter_result = matter(content);
    const blog_content = matter_result.content;

    // Use remark to convert markdown into HTML string
    // const processed_content = await remark()
    //     .use(html)
    //     .process(matter_result.content);
    // const blog_content = processed_content.toString();

    return {
        ... matter_result.data,
        blog_content,
    };
}

export function getPostsData() {
    const filename = fs.readdirSync(posts_dir);

    const post_data = filename.map((filename) => {
        const id = filename.replace(/\.md$/, '');

        const full_path = path.join(posts_dir, filename);

        const content = fs.readFileSync(full_path, 'utf-8');

        const matter_result = matter(content);
        const blog_content = matter_result.content;

        return {
            id, 
            ... matter_result.data,
            blog_content,
        };
    });

    return post_data.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

