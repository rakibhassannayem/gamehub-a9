import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12 text-center">
      <title>GameHub - Contact</title>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-primary"
      >
        Contact GameHub
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-gray-300 mb-6"
      >
        Have questions, feedback, or collaboration ideas?  
        We're always happy to hear from you.
      </motion.p>

      {/* Simple contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="space-y-2 text-gray-300 mb-6"
      >
        <p>Email: <span className="text-primary">support@gamehub.com</span></p>
        <p>Phone: <span className="text-primary">+880 1234-567890</span></p>
      </motion.div>

      {/* Optional very simple contact form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        ></textarea>

        <button
          type="submit"
          className="btn w-full"
        >
          Send Message
        </button>
      </motion.form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-gray-400 text-sm mt-8"
      >
        Created by{" "}
        <span className="text-primary font-semibold">Rakib Hassan Nayem</span>{" "}
        using React, TailwindCSS & Firebase.
      </motion.div>
    </div>
  );
};

export default Contact;
