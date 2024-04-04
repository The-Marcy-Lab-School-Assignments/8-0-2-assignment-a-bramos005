interface Props {
  title: string;
}
export default function NavBar({ title }: Props) {
  return (
    <nav className="flex w-screen justify-center pt-5">
      <div>
        <div>
          <div className="text-2xl font-bold ">{title}</div>
        </div>
      </div>
    </nav>
  );
}
