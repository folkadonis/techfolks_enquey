import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, ShoppingCart, Briefcase, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "business",
      type: "Business Website",
      description: "Modern corporate website with advanced features and CMS integration",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Responsive Design", "CMS Integration", "SEO Optimized"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Fashion Store Online",
      category: "ecommerce",
      type: "E-commerce",
      description: "Full-featured online store with payment integration and inventory management",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Stripe", "Firebase"],
      features: ["Payment Gateway", "Inventory System", "User Accounts"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "portfolio",
      type: "Portfolio",
      description: "Stunning portfolio website for a creative professional",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Framer Motion", "Tailwind"],
      features: ["Animations", "Gallery", "Contact Form"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant App",
      category: "mobile",
      type: "Mobile App",
      description: "Mobile-first restaurant ordering application",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Stripe"],
      features: ["Online Ordering", "Push Notifications", "Reviews"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Healthcare Platform",
      category: "business",
      type: "Business Platform",
      description: "Comprehensive healthcare management platform",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Express", "PostgreSQL"],
      features: ["Patient Management", "Appointments", "Reports"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Marketplace",
      category: "ecommerce",
      type: "E-commerce",
      description: "Multi-vendor marketplace for fitness equipment and supplements",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Stripe"],
      features: ["Multi-vendor", "Reviews", "Subscription Plans"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'business', name: 'Business', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <ShoppingCart className="h-4 w-4" /> },
    { id: 'portfolio', name: 'Portfolio', icon: <Code className="h-4 w-4" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="h-4 w-4" /> }
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover some of our recent projects. Each website is crafted with attention to detail,
            modern design principles, and optimized for performance and user experience.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="text-6xl text-primary-400">
                    {item.category === 'business' && <Briefcase />}
                    {item.category === 'ecommerce' && <ShoppingCart />}
                    {item.category === 'portfolio' && <Code />}
                    {item.category === 'mobile' && <Smartphone />}
                  </div>
                </div>

                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <a
                    href={item.liveUrl}
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={item.codeUrl}
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View code"
                  >
                    <Code className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to See Your Project Here?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Every project in our portfolio started
              with a conversation. What's your vision?
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              Start Your Project
              <Play className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Industries Served" },
            { number: "3x", label: "Average Performance Boost" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;