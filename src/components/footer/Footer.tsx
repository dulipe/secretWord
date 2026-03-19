const Footer = () => {
  return (
    <footer className="w-full px-4 py-3 border-t-3 border-white flex items-center justify-center mt-auto relative bg-neutral-900">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Filipe Santos. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;