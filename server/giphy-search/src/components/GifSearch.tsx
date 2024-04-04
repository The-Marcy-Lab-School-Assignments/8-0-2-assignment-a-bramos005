import { useState } from "react";
import { handleFetch } from "../utils";


interface Props {
  setGifs: (value: React.SetStateAction<never[]>) => void;
}
export default function GifSearch({ setGifs }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const [res, error] = await handleFetch(
      `/api/gifs/search?search=${input}`
    );
    if (res) {
      let { data } = res;
      setGifs(data);
    } else {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-screen mt-5">
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="border rounded-md"
        id="searchInput"
      />
      <button
        type="submit"
        className="bg-green-500 p-1 px-2 text-white rounded-md">
        Search
      </button>
    </form>
  );
}
