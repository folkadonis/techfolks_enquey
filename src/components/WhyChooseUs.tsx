import React from 'react';
import {
  Award,
  Clock,
  Shield,
  HeadphonesIcon,
  CheckCircle2,
  Star,
  Globe,
  Rocket
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Expertise",
      description: "Years of experience in web development with proven track record of successful projects.",
      highlight: "Expert Team"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored websites designed specifically for your business needs and industry requirements.",
      highlight: "Personalized Approach"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time without compromising on quality.",
      highlight: "On-Time Delivery"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Ongoing Support",
      description: "Comprehensive support and maintenance to keep your website running smoothly post-launch.",
      highlight: "24/7 Support"
    }
  ];

  const stats = [
    { number: "100+", label: "Websites Built", icon: <Globe className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <HeadphonesIcon className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> }
  ];

  const features = [
    "Mobile-First Responsive Design",
    "SEO Optimized from Start",
    "Fast Loading Speeds",
    "Security Best Practices",
    "User-Friendly Interface",
    "Cross-Browser Compatibility",
    "Clean, Maintainable Code",
    "Analytics Integration"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Techfolks?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with creative design to deliver websites that not only look great
            but also drive business results and provide exceptional user experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex-shrink-0 text-primary-600 mt-1">
                {benefit.icon}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mr-3">
                    {benefit.title}
                  </h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Businesses Everywhere
            </h3>
            <p className="text-primary-100 text-lg">
              Our numbers speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-200 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What You Get With Every Website
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Every website we build comes with these essential features included,
              ensuring your online presence is professional, secure, and effective.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Quality Guarantee Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Guarantee
                </h4>
                <p className="text-gray-600 mb-6">
                  We stand behind our work with a satisfaction guarantee.
                  If you're not happy, we'll make it right.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Satisfaction Guarantee</span>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">30-Day Support</span>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Revisions Included</span>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;