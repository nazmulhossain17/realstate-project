import AgentCard from "./components/AgentCard";
import ContactForm from "./components/ContactForm";
import FeaturesSection from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import Navbar from "./components/Navbar/Navbar";
import PropertyList from "./components/PropertyList";
import SearchBar from "./components/SearchBar";

const agents = [
  {
    id: 1,
    name: "Nathan James",
    phone: "1-234-456-7893",
    email: "nathan@realhomes.io",
    listedProperties: 3,
    verified: true,
    image:
      "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43b25bee70.png",
  },
  {
    id: 2,
    name: "Melissa William",
    phone: "1-234-456-7892",
    email: "melissa@realhomes.io",
    listedProperties: 5,
    verified: false,
    image:
      "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c445a35f781.png",
  },
  {
    id: 3,
    name: "Alice Brian",
    phone: "1-234-456-7891",
    email: "alice@realhomes.io",
    listedProperties: 5,
    verified: true,
    image:
      "https://i0.wp.com/apob.ai/wp-content/uploads/2024/05/free-ai-face-generator.jpg?fit=361%2C400&ssl=1",
  },
  {
    id: 4,
    name: "John David",
    phone: "1-234-456-7890",
    email: "john@realhomes.io",
    listedProperties: 6,
    verified: true,
    image:
      "https://img.freepik.com/premium-photo/portrait-handsome-asian-man-smiling-with-clean-teeth_568301-2270.jpg",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute right-0 z-10 mr-8 -translate-y-1/2 top-1/2">
          <ContactForm />
        </div>
        <div className="relative z-20">
          <SearchBar />
        </div>
      </div>
      <PropertyList />
      <HeroCard />
      <div className="my-8 text-center">
        <h2 className="text-3xl ">Meet Our Agents</h2>
        <p className="p-3 text-gray-600">
          Get in touch with our real estate experts.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
}
