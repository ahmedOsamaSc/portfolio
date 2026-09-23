import { Link } from "react-router";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-in-left">
            <p className="mb-4 text-lg font-medium text-primary">
              Hi, I'm Ahmed Osama 👋
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Front-End Developer
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              I build modern, responsive, and user-friendly web applications
              using React and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground  transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
              >
                View My Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-md"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6 text-sm font-medium  animate-fade-in-up">
              <a
                href="https://github.com/ahmedOsamaSc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary gap-2"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-osamaa-8709773a6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary gap-2"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            animate={{
              y: [0, -12, 0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl sm:h-80 sm:w-80">
              <img
                src="/profile.jpg"
                alt="Ahmed Osama"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
