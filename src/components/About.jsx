
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A little bit about me
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              I'm a Front-End Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              I work with HTML, CSS, JavaScript, React, Tailwind CSS, and
              modern front-end tools. I enjoy learning new technologies and
              turning ideas into clean and interactive interfaces.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              My goal is to continue improving my skills and build real-world
              projects that provide a great user experience.
            </p>
          </motion.div>

          {/* Info */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Front-End</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Building responsive interfaces with React.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">React</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Creating reusable and scalable components.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Responsive</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Websites that work across different screen sizes.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Learning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Always learning and improving my development skills.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;