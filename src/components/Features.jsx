import React from "react";
import { Settings, Eye, Search, MapPin, UserCog, Upload } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 space-y-4 text-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-50">
      <Icon className="w-8 h-8 text-teal-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="leading-relaxed text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Live Customizer",
      description:
        "To help you configure and customize stuff around your website without going into code. You can customize the price format to any currency in the world. You can customize the URL slugs to your required ones.",
    },
    {
      icon: Eye,
      title: "Design Variations",
      description:
        "Real Homes theme includes two major design variations. You can use the classic or modern look based on your choice.",
    },
    {
      icon: Search,
      title: "Advance Search",
      description:
        "Real Homes includes advanced properties search feature that is powerful and fully customizable to fulfill various needs. You can select which fields you want to display and what data will be displayed in those fields.",
    },
    {
      icon: MapPin,
      title: "Google & OpenStreet Maps",
      description:
        "Real Homes includes Google Maps API integration that enables you to display Google map with properties markers on search results page, properties display pages, property detail page, home page and taxonomy archive pages.",
    },
    {
      icon: UserCog,
      title: "Member Support",
      description:
        "You can provide user registration, login and forgot password features on your site to let users access member only features. Social login feature allow you to integrate any social network with your website for user login and registration.",
    },
    {
      icon: Upload,
      title: "Front End Property Submit",
      description:
        "Real Homes provides front end property submit template and related configurations. So you can restrict certain level of users from accessing administrator dashboard and provide them an interface on front end to submit properties.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="font-medium text-teal-500">Amazing</span>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Features</h2>
        <p className="mt-4 text-gray-600">All featured from us.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
