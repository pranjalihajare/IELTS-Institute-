import React from "react";
import { FaBookReader, FaChalkboardTeacher, FaComments } from "react-icons/fa";
import { FiAward } from "react-icons/fi";

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
    <div className="text-2xl font-bold text-blue-600">IELTSPro</div>
    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li className="hover:text-blue-600 cursor-pointer">Home</li>
      <li className="hover:text-blue-600 cursor-pointer">Courses</li>
      <li className="hover:text-blue-600 cursor-pointer">About</li>
      <li className="hover:text-blue-600 cursor-pointer">Contact</li>
    </ul>
    <button className="md:hidden text-2xl">☰</button>
  </nav>
);

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50">
    <div className="max-w-lg space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Achieve Your Dream IELTS Band Score
      </h1>
      <p className="text-lg text-gray-600">
        Join IELTSPro and unlock expert-led training, practice tests, and AI-driven insights to reach your goals.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
    <img
      src="https://wpvip.edutopia.org/wp-content/uploads/2024/12/hero_blog_Brain-Based-Learning_Teaching-Strategies_photo_iStock_2154414848_SeventyFour.jpg?w=2880&quality=85"
      alt="Students studying"
      className="mt-8 md:mt-0 md:w-1/2 rounded-lg shadow-lg"
    />
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <FaComments className="text-blue-600 text-4xl mb-4" />,
      title: "Speaking Practice",
      desc: "Interactive speaking sessions with feedback from experts.",
    },
    {
      icon: <FaBookReader className="text-blue-600 text-4xl mb-4" />,
      title: "Mock Tests",
      desc: "Real exam-like practice to build confidence.",
    },
    {
      icon: <FiAward className="text-blue-600 text-4xl mb-4" />,
      title: "AI Band Score",
      desc: "Instant feedback with AI-based evaluation.",
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />,
      title: "Expert Mentorship",
      desc: "One-on-one guidance from certified trainers.",
    },
  ];

  return (
    <section className="py-12 bg-white px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why Choose IELTSPro?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
          >
            {f.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      review:
        "IELTSPro helped me boost my band score from 6.5 to 8.0 in just two months. Amazing mentors!",
    },
    {
      name: "Sophia Lee",
      review:
        "The AI band score system gave me real-time insights. It was like practicing with the real exam!",
    },
    {
      name: "Ravi Kumar",
      review:
        "The mock tests and speaking sessions made me confident. I highly recommend IELTSPro.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-600 italic mb-4">“{r.review}”</p>
            <h4 className="text-lg font-semibold text-gray-800">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-blue-600 text-white py-6 px-6 md:px-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p>© 2025 IELTSPro Institute. All rights reserved.</p>
      <div className="space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <div className="font-sans">
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default HomePage;
