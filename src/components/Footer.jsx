const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Osama All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/ahmedOsamaSc"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-osamaa-8709773a6"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
