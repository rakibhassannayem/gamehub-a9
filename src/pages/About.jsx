import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12 text-center">
      <title>GameHub - About</title>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-primary"
      >
        About GameHub
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-gray-300 mb-6"
      >
        GameHub is an online library where players can explore and support indie
        games. Our goal is to connect gamers with creative developers and make
        discovering new games fun and effortless.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-400 text-sm"
      >
        Created by{" "}
        <span className="text-primary font-semibold">Rakib Hassan Nayem</span>{" "}
        using React, TailwindCSS & Firebase.
      </motion.div>
    </div>
  );
};

export default About;
