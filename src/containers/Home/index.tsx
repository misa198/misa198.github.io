import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchPinnedRepositories } from "src/store/thunks/home.thunk";
import About from "src/containers/Home/components/About";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Introduce from "./components/Introduce";
import Contact from "./components/Contact";

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Misa198</title>
      </Helmet>
      <About />
      <Projects />
      <Contributions />
      <Introduce />
      <Contact />
    </>
  );
};

export default Home;