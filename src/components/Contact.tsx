
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center flex flex-col gap-3">
        <h2 className="section-title">
          Contact
        </h2>
        <div className="flex justify-center gap-4 mb-4">
          <a href="mailto:oelan.rakotonirina@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">Email</a>
          <a href="https://www.linkedin.com/in/oelanr/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">LinkedIn</a>
          <a href="https://github.com/oelanr" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">GitHub</a>
        </div>
        <form className="flex flex-col gap-4 text-left">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea placeholder="Message" rows={4} className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">Send</button>
        </form>
      </div>
    </section>
  );
}
