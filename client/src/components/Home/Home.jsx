import classes from "./Home.module.css";
import { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { UserCard } from "../UserCard/UserCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const topRated = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1d9d2a6f682b3e2bedca7ee06616fa88&language=en-US`)
      topRated.then((res) => res.json())
      .then((json) => setMovies(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const user = JSON.parse(localStorage.getItem("profile"));

  const closeHandler = () => {
    setClose(true);
  }

  return (
    <Fragment>
    <Header/>
    {user && !close && <UserCard user={user} onClose={closeHandler}/>}
    <main className={classes.Home}>
        <div>
          <p className={classes.Home__title}>What to watch ?</p>
        </div>
        <section>
          <div>
            <p className={classes.Home__contentPone}>Here are some Top picks</p>
          </div>
          <div className={classes.Home__movies}>
            {movies?.results?.map((movie, id) => (
              <Card key={id} movie={movie} />
            ))}
          </div>
        </section>
    </main>
    </Fragment>
  );
};

export default Home;