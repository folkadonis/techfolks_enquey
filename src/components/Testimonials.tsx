import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Johnson Consulting",
      role: "Founder & CEO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Techfolks transformed our online presence completely. The website they built not only looks stunning but has increased our lead generation by 300%. Their attention to detail and professional approach made the entire process smooth and enjoyable.",
      project: "Business Website"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Chen's Electronics",
      role: "Store Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "We needed an e-commerce platform that could handle our complex inventory and the team at Techfolks delivered beyond our expectations. Sales have doubled since launching our new site. Highly recommended!",
      project: "E-commerce Store"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Studio ER",
      role: "Creative Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As a creative professional, I needed a portfolio that truly showcased my work. Techfolks created a beautiful, fast-loading site that has helped me land several high-profile clients. The design perfectly captures my brand aesthetic.",
      project: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Thompson Law Firm",
      role: "Partner",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Professional, reliable, and results-driven. Techfolks understood our needs as a law firm and created a website that instills trust and generates quality leads. The ongoing support has been exceptional.",
      project: "Professional Services"
    },
    {
      id: 5,
      name: "Lisa Park",
      company: "Wellness Retreats",
      role: "Founder",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The booking system integration and beautiful design have made managing our retreat bookings so much easier. Our customers love the new site and we've seen a significant increase in online bookings.",
      project: "Booking Platform"
    },
    {
      id: 6,
      name: "Robert Kim",
      company: "Tech Innovations Inc",
      role: "CTO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Excellent technical expertise and project management. They delivered our complex web application on time and within budget. The code quality is outstanding and the documentation is comprehensive.",
      project: "Web Application"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience working with Techfolks.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <Quote className="h-12 w-12 text-primary-600" />
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>

                        {/* Client Details */}
                        <div className="text-center md:text-left">
                          <div className="font-semibold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-primary-600 font-medium">
                            {testimonial.company}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Project: {testimonial.project}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5-Star Reviews
            </h3>
            <p className="text-gray-600">
              Consistently rated 5 stars by our clients for quality and service
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Proven Results
            </h3>
            <p className="text-gray-600">
              Real testimonials from real clients who've seen real growth
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Long-term Partnerships
            </h3>
            <p className="text-gray-600">
              We build lasting relationships, not just websites
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Ready to experience the Techfolks difference? Let's create something amazing together
              and add your success story to our growing list of satisfied clients.
            </p>
            <a
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;