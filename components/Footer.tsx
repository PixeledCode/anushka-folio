export default function Footer() {
  const Item = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return (
      <a
        href={href}
        className="text-basic-white bg-lime-11 px-1 font-semibold uppercase"
        target="_blank"
      >
        {children}
      </a>
    );
  };
  return (
    <footer className="py-16 px-3 flex justify-center gap-3 flex-wrap footer">
      <Item href="#">designed with ❤️ by anushkaag</Item>
      <Item href="https://pixeledcode.com/">
        developed with ✨ by @pixeledcode
      </Item>
    </footer>
  );
}
