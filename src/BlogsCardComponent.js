import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogsCardComponent = ({ limit }) => {
   /* const [blogs, setblogs] = useState([
        { date: 'May 08, 2025', comment: 10, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', id: 1 },
        { date: 'June 27, 2025', comment: 9, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', id: 2 },
        { date: 'August 12, 2025', comment: 13, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', id: 3 }
    ])*/

    //Fetch Request
    const proxy = "https://corsproxy.io/?";
    const apikey = '8de703755f45494c91ac86d9431be380';
    const category = 'Elearning';
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const from = thirtyDaysAgo.toISOString().split("T")[0];
    const url = `https://newsapi.org/v2/everything?q=${category}&from=${from}&sortBy=publishedAt&apiKey=${apikey}`;

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    //local storage code
    const [offline, setOffline] = useState(false);


    useEffect(() => {

        // 1️⃣ Try to load saved blogs first
        const cached = localStorage.getItem("articles");
        if (cached) {
            setArticles(JSON.parse(cached));
            setLoading(false);
        }

        fetch(`${proxy}${url}`)
            .then(res => res.json())
            .then(data => {
                if (data.articles) {
                    setArticles(data.articles);
                    console.log(data.articles);
                    localStorage.setItem("articles", JSON.stringify(data.articles)); // save for offline
                }
            })
            .catch((error) => {
                setOffline(true);
                console.error('Error fetching news:', error.message)
            })
            .finally(() => setLoading(false));
    }, [url]);

    if (loading || !articles) {
        return (<p className="loadingState">Loading Blogs...</p>)
    }

    return (
        <div className="Blogs-card-component">
            {offline && <p style={{ color: "orange", fontSize: '1.7rem', fontFamily: "Raleway", }}>⚠️ You're offline — showing saved blogs.</p>}

            {articles.slice(0, limit).map((articles, index) => (
                <div className="blogsCard" key={index}>
                    <img src={articles.urlToImage} alt="Blog Img" className="blog-img" />
                    <div className="blog-img-bottom-div">
                        <div className="blog-top-div">
                            <div className="blog-info-div">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <p className="blog-date">{articles.author ? articles.author.slice(0, 15) : "Unknown Author"}</p>
                            </div>
                            <div className="blog-info-div">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <p className="blog-comment">{articles.publishedAt.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div>
                            <p className="blog-title">{`${articles.title?.slice(0, 60) || "No title"}...`}</p>
                        </div>
                        <Link to={{
                            pathname: `/blog/${index}`,
                            state: { article: articles }
                        }} className="blog-more-link">Learn More ⇲</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogsCardComponent;