import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export function getAllPostIds(folder) {
    const posts_dir = path.join(process.cwd(), folder);

    const fileNames = fs.readdirSync(posts_dir)
    return fileNames.map(fileName => {
        return {
        params: {
            id: fileName.replace(/\.md$/, '')
        }
        }
    })
}

export function getPostByID( folder, id ) {

    const file_dir = path.join(process.cwd(), folder, `${id}.md`);
    const markdown = fs.readFileSync(file_dir, 'utf-8');

    const { data: frontmatter, content } = matter(markdown);

    return {
        frontmatter,
        content,
    };
    // const blog_content = matter_result.content;

    // Use remark to convert markdown into HTML string
    // blog_content = await remark()
    //     .use(html)
    //     .process(matter_result.content);
    // const blog_content = processed_content.toString();

    // const blog_content = unified().use(parse).use(remark2react).processSync(markdown).result;
}

export function getPostsData(folder) {
    const posts_dir = path.join(process.cwd(), folder);

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

