import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import { useEffect, useState } from "react";


export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getGifs = async () => {
      const [res, error] = await handleFetch(
        `/api/gifs`
      );

      if (res) {
        let { data } = res;
        setGifs(data);
      } else {
        console.error(error);
      }
    };
    getGifs();
  }, []);

  return (
    <div>
      <NavBar title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}
