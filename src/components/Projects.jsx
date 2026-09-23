import { motion } from "motion/react";
import landioImage from "../assets/projects/landioImage.png";
const projects = [
  {
    title: "Landioo",
    description:
      "A responsive landing page built using HTML and CSS with a clean and modern design.",
    technologies: ["HTML", "CSS"],
    image: landioImage,
    demo: "https://ahmedosamasc.github.io/Landioo/",
    github: "https://github.com/ahmedOsamaSc/Landioo",
  },
];
const Projects = () => {
  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            My Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Some of My Work
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Here are some of the projects I have built while learning and
            improving my Front-End development skills.
          </p>
        </div>
        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-accent"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
