export default function Footer() {
  const Item = ({ children }: { children: React.ReactNode }) => {
    return (
      <span className="text-basic-white bg-lime-11 px-1 font-semibold uppercase">
        {children}
      </span>
    );
  };
  return (
    <footer className="py-16 px-3 flex justify-center gap-3 flex-wrap footer">
      <Item>designed with ❤️ by anushkaag</Item>
      <Item>developed with ✨ by @pixeledcode</Item>
    </footer>
  );
}
