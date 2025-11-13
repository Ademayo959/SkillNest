import Courses from "./Courses";
import Hero from "./Hero";
import LandingPageBlogs from "./LandingPageBlogs";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";


function Home() {
  return (
    <div className="Home">
      <Hero />
      <Sponsors />
      <Courses />
      <Testimonials />
      <LandingPageBlogs />
    </div>
  );
}

export default Home;
