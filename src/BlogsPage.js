import BlogsCardComponent from "./BlogsCardComponent";

const BlogsPage = () => {
    return (
        <div className="BlogsPage">
            <h1 className="BlogsPage-title">Our Latest Blogs</h1>
            <p className="BlogsPage-subtext">Discover articles, tutorials, and insights on web development, tech trends, and coding tips.</p>
            <BlogsCardComponent limit={51} />
        </div>
    );
}

export default BlogsPage;