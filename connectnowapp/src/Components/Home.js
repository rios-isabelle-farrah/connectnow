import Search from "./Search";
import "../Styles/Home.css";

const Home = () => {
  return (
    <section>
      <h1 className="tag-line">
        A searchable directory for free public access to the computer and the
        internet.
      </h1>
      <Search />
    </section>
  );
};

export default Home;
