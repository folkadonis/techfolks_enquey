import React from 'react';
import {
  ShoppingCart,
  Smartphone,
  Search,
  Wrench,
  Palette,
  Code2,
  Rocket
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Unique, brand-focused designs that capture your business identity and engage your audience.",
      features: ["Responsive Design", "Brand Integration", "User Experience Focus"]
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, fast, and secure websites built with the latest technologies and best practices.",
      features: ["Clean Code", "Fast Loading", "Security First"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      features: ["Payment Gateway", "Inventory System", "Analytics Dashboard"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Websites that look perfect and function flawlessly on all devices and screen sizes.",
      features: ["Touch Optimized", "Cross-Device", "Performance Focused"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search results.",
      features: ["On-Page SEO", "Speed Optimization", "Schema Markup"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Website Building Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive web solutions tailored to your business needs.
            Every website we build is designed to drive results and grow your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 group"
            >
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h3>
            <p className="text-lg text-gray-600">
              Simple, transparent, and results-driven approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your business goals and requirements"
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes and visual designs for approval"
              },
              {
                step: "03",
                title: "Development",
                description: "Build your website with clean, efficient code"
              },
              {
                step: "04",
                title: "Launch",
                description: "Test, deploy, and provide ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives real results for your business.
            </p>
            <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              Start Your Project
              <Rocket className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;