import BlogsCardComponent from "./BlogsCardComponent";

const LandingPageBlogs = () => {
    return ( 
        <div className="landing-page-blogs">
            <h1 className="Landing-blogs-text">Our Blogs</h1>
            <BlogsCardComponent limit={6} />
        </div>
     );
}
 
export default LandingPageBlogs;