import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Shield, Leaf, Users, Handshake, Building2, Truck, Target, Award, Globe, CheckCircle } from 'lucide-react';

interface SustainabilityMainProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const SustainabilityMain: React.FC<SustainabilityMainProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sustainabilityFeatures = [
    {
      id: 'sustainability-safety',
      icon: Shield,
      title: { en: 'Safety First', ar: 'السلامة أولاً' },
      description: { 
        en: 'Prioritizing safety for our people, contractors, and communities',
        ar: 'إعطاء الأولوية للسلامة لموظفينا ومقاولينا ومجتمعاتنا'
      }
    },
    {
      id: 'sustainability-environment',
      icon: Leaf,
      title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
      description: { 
        en: 'Protecting the environment through sustainable practices',
        ar: 'حماية البيئة من خلال الممارسات المستدامة'
      }
    },
    {
      id: 'sustainability-social',
      icon: Users,
      title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
      description: { 
        en: 'Contributing to community development and social welfare',
        ar: 'المساهمة في التنمية المجتمعية والرفاه الاجتماعي'
      }
    },
    {
      id: 'sustainability-stakeholder',
      icon: Handshake,
      title: { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة' },
      description: { 
        en: 'Building strong relationships with all stakeholders',
        ar: 'بناء علاقات قوية مع جميع أصحاب المصلحة'
      }
    },
    {
      id: 'sustainability-assets',
      icon: Building2,
      title: { en: 'Asset Management', ar: 'إدارة الأصول' },
      description: { 
        en: 'Optimizing asset performance and lifecycle management',
        ar: 'تحسين أداء الأصول وإدارة دورة الحياة'
      }
    },
    {
      id: 'sustainability-supply',
      icon: Truck,
      title: { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد' },
      description: { 
        en: 'Ensuring sustainable and responsible supply chain practices',
        ar: 'ضمان ممارسات سلسلة التوريد المستدامة والمسؤولة'
      }
    }
  ];

  const sustainabilityStats = [
    {
      icon: Target,
      number: '99.8%',
      label: { en: 'Environmental Compliance', ar: 'الامتثال البيئي' }
    },
    {
      icon: Award,
      number: '15+',
      label: { en: 'Safety Awards', ar: 'جوائز السلامة' }
    },
    {
      icon: Globe,
      number: '100%',
      label: { en: 'World Bank Standards', ar: 'معايير البنك الدولي' }
    },
    {
      icon: Users,
      number: '170+',
      label: { en: 'Employees', ar: 'الموظفون' }
    }
  ];

  const commitments = [
    {
      title: { en: 'Environmental Stewardship', ar: 'الإشراف البيئي' },
      description: { en: 'Full compliance with World Bank, JBIC, and OPIC environmental guidelines', ar: 'الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC' }
    },
    {
      title: { en: 'Community Investment', ar: 'الاستثمار المجتمعي' },
      description: { en: 'Supporting local communities through education, healthcare, and development programs', ar: 'دعم المجتمعات المحلية من خلال برامج التعليم والرعاية الصحية والتنمية' }
    },
    {
      title: { en: 'Operational Excellence', ar: 'التميز التشغيلي' },
      description: { en: 'Maintaining highest standards of safety, efficiency, and reliability', ar: 'الحفاظ على أعلى معايير السلامة والكفاءة والموثوقية' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#005670] via-[#004558] to-[#003445] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-opacity-80 mb-8 text-sm">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors cursor-pointer flex items-center"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              {isArabic 
                ? 'نحن ملتزمون بالإشراف البيئي والامتثال والكفاءة عبر جميع العمليات'
                : 'We are committed to environmental stewardship, compliance, and efficiency across all operations'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-[#005670] mr-2" />
                <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                  {isArabic ? 'التزامنا' : 'Our Commitment'}
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-[#231f20] mb-8 leading-tight">
                {isArabic ? 'الاستدامة في نبراس الأردن' : 'Sustainability at Nibras Jordan'}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'في نبراس الأردن، الاستدامة ليست مجرد التزام - إنها جزء أساسي من هويتنا وعملياتنا. نحن نؤمن بأن النجاح الحقيقي يُقاس بقدرتنا على توفير طاقة موثوقة مع حماية البيئة ودعم المجتمعات التي نخدمها.'
                    : 'At Nibras Jordan, sustainability is not just a commitment - it is a fundamental part of who we are and how we operate. We believe that true success is measured by our ability to deliver reliable energy while protecting the environment and supporting the communities we serve.'
                  }
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'نهجنا الشامل للاستدامة يشمل الإشراف البيئي والمسؤولية الاجتماعية والحوكمة الأخلاقية، مما يضمن أن عملياتنا تساهم في مستقبل مستدام للأردن والمنطقة.'
                    : 'Our comprehensive approach to sustainability encompasses environmental stewardship, social responsibility, and ethical governance, ensuring that our operations contribute to a sustainable future for Jordan and the region.'
                  }
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'الاستدامة' : 'Sustainability'}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#005670] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">
                    {isArabic ? stat.label.ar : stat.label.en}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'التزاماتنا الرئيسية' : 'Our Key Commitments'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'نحن ملتزمون بأعلى معايير الاستدامة في جميع جوانب أعمالنا'
                : 'We are committed to the highest standards of sustainability across all aspects of our business'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#005670] mr-3" />
                  <h3 className="text-xl font-bold text-[#231f20]">
                    {isArabic ? commitment.title.ar : commitment.title.en}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {isArabic ? commitment.description.ar : commitment.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Areas */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'مجالات الاستدامة' : 'Sustainability Areas'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'استكشف مجالات التركيز الرئيسية لجهود الاستدامة لدينا'
                : 'Explore the key focus areas of our sustainability efforts'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-[#005670] hover:border-opacity-20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => onNavigate?.(feature.id)}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] group-hover:bg-[#004558] rounded-full mb-6 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#005670] mb-4 transition-colors duration-300">
                    {isArabic ? feature.title.ar : feature.title.en}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors duration-300">
                    {isArabic ? feature.description.ar : feature.description.en}
                  </p>
                  
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#005670] font-semibold text-sm mr-2">
                      {isArabic ? 'اقرأ المزيد' : 'Learn More'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#005670] transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'انضم إلى رحلة الاستدامة' : 'Join Our Sustainability Journey'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'تعرف على كيفية مساهمتك في مستقبل طاقة مستدام في الأردن'
                : 'Learn how you can contribute to a sustainable energy future in Jordan'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityMain;