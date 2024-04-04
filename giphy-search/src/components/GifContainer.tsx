export type Gif = Record<string, any>;
export type Gifs = Array<Gif>;

export default function GifContainer({ gifs }: { gifs: Gifs }) {
  if (gifs.length === 0) {
    return <p>No GIFs available.</p>;
  }

  return (
    <ul className="flex  justify-center w-screen gap-10 flex-wrap">
      {gifs.map((gif) => {
        return (
          <li key={gif.id}>
            <img
              className="hover:scale-105 transition duration-300"
              src={gif.images.fixed_height.url}
              alt="gif"
            />
          </li>
        );
      })}
    </ul>
  );
}
