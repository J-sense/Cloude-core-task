const ContactPage = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center bg-white dark:bg-black px-4 py-16">
      <div className="w-full max-w-xl bg-zinc-100 dark:bg-zinc-900 shadow-xl rounded-3xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-violet-700 dark:text-violet-400">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          We&lsquo;d love to hear from you. Please fill out the form below and
          we&lsquo;ll get in touch with you shortly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
