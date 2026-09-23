// const skills = [
//   {
//     name: "HTML",
//     description: "Building semantic and accessible web pages.",
//   },
//   {
//     name: "CSS",
//     description: "Creating responsive and modern layouts.",
//   },
//   {
//     name: "JavaScript",
//     description: "Building interactive and dynamic web applications.",
//   },
//   {
//     name: "React",
//     description: "Building reusable components and modern interfaces.",
//   },
//   {
//     name: "Tailwind CSS",
//     description: "Creating responsive interfaces with utility classes.",
//   },
//   {
//     name: "Git & GitHub",
//     description: "Managing projects and version control.",
//   },
// ];

// const Skills = () => {
//   return (
//     <section className="py-24">
//       <div className="mx-auto w-full max-w-6xl px-6">

//         {/* Heading */}
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-widest text-primary">
//             My Skills
//           </p>

//           <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
//             Technologies I Work With
//           </h2>

//           <p className="mt-4 text-muted-foreground">
//             These are some of the technologies and tools I use to build
//             modern and responsive web applications.
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//             >
//               <h3 className="text-lg font-semibold">
//                 {skill.name}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-muted-foreground">
//                 {skill.description}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;
import { motion } from "motion/react";

const skills = [
  {
    name: "HTML",
    description: "Building semantic and accessible web pages.",
  },
  {
    name: "CSS",
    description: "Creating responsive and modern layouts.",
  },
  {
    name: "JavaScript",
    description: "Building interactive and dynamic web applications.",
  },
  {
    name: "React",
    description: "Building reusable components and modern interfaces.",
  },
  {
    name: "Tailwind CSS",
    description: "Creating responsive interfaces with utility classes.",
  },
  {
    name: "Git & GitHub",
    description: "Managing projects and version control.",
  },
];

const Skills = () => {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-muted-foreground">
            These are some of the technologies and tools I use to build modern
            and responsive web applications.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{skill.name}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
