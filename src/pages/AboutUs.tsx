import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Award, Globe, Target, Zap, Building2, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

interface AboutUsProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ isArabic, onNavigate }) => {
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

  const milestones = [
    {
      year: '2007',
      title: { en: 'Company Establishment', ar: 'تأسيس الشركة' },
      description: { en: 'Nibras Jordan was established as Jordan\'s first Independent Power Producer', ar: 'تأسست نبراس الأردن كأول منتج مستقل للطاقة في الأردن' }
    },
    {
      year: '2009',
      title: { en: 'Amman East Power Plant', ar: 'محطة عمان الشرقية للطاقة' },
      description: { en: '400 MW combined cycle power plant commissioned', ar: 'تشغيل محطة طاقة دورة مركبة بقدرة 400 ميجاواط' }
    },
    {
      year: '2015',
      title: { en: 'Levant Power Plant', ar: 'محطة بلاد الشام للطاقة' },
      description: { en: '241 MW tri-fuel peaking plant operational', ar: 'تشغيل محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط' }
    },
    {
      year: '2024',
      title: { en: 'Continued Excellence', ar: 'التميز المستمر' },
      description: { en: 'Over 8% of Jordan\'s electricity supply with 99.8% reliability', ar: 'أكثر من 8% من إمدادات الكهرباء في الأردن بموثوقية 99.8%' }
    }
  ];

  const leadership = [
    {
      name: 'Ahmed Al-Rashid',
      position: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Over 20 years of experience in power generation and energy infrastructure development.',
        ar: 'أكثر من 20 عاماً من الخبرة في توليد الطاقة وتطوير البنية التحتية للطاقة.'
      }
    },
    {
      name: 'Sarah Mitchell',
      position: { en: 'Chief Operating Officer', ar: 'مدير العمليات' },
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Expert in power plant operations with extensive experience in international energy markets.',
        ar: 'خبيرة في عمليات محطات الطاقة مع خبرة واسعة في أسواق الطاقة الدولية.'
      }
    },
    {
      name: 'Omar Hassan',
      position: { en: 'Chief Financial Officer', ar: 'المدير المالي' },
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Financial strategist with deep expertise in infrastructure financing and project development.',
        ar: 'استراتيجي مالي مع خبرة عميقة في تمويل البنية التحتية وتطوير المشاريع.'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: { en: 'Excellence', ar: 'التميز' },
      description: { en: 'Committed to operational excellence and continuous improvement', ar: 'ملتزمون بالتميز التشغيلي والتحسين المستمر' }
    },
    {
      icon: Users,
      title: { en: 'Integrity', ar: 'النزاهة' },
      description: { en: 'Conducting business with transparency and ethical standards', ar: 'ممارسة الأعمال بشفافية ومعايير أخلاقية' }
    },
    {
      icon: Globe,
      title: { en: 'Sustainability', ar: 'الاستدامة' },
      description: { en: 'Environmental stewardship and sustainable development', ar: 'الإشراف البيئي والتنمية المستدامة' }
    },
    {
      icon: Award,
      title: { en: 'Innovation', ar: 'الابتكار' },
      description: { en: 'Embracing technology and innovative solutions', ar: 'احتضان التكنولوجيا والحلول المبتكرة' }
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
              {isArabic ? 'من نحن' : 'About Us'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              {isArabic 
                ? 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'
                : 'We are committed to pioneering the energy of the future on a global scale'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'نظرة عامة على الشركة' : 'Company Overview'}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {isArabic
                    ? 'تأسست نبراس الأردن في عام 2007 كأول منتج مستقل للطاقة في الأردن، وهي شركة رائدة في قطاع الطاقة تلعب دوراً محورياً في تعزيز أمن الطاقة في المملكة.'
                    : 'Established in 2007 as Jordan\'s first Independent Power Producer, Nibras Jordan is a leading energy company that plays a pivotal role in enhancing the Kingdom\'s energy security.'
                  }
                </p>
                <p>
                  {isArabic
                    ? 'مع قدرة إجمالية تبلغ 641 ميجاواط من محطتين للطاقة، نوفر أكثر من 8% من احتياجات الأردن من الكهرباء بموثوقية استثنائية تبلغ 99.8%.'
                    : 'With a combined capacity of 641 MW from two power plants, we supply over 8% of Jordan\'s electricity needs with an exceptional reliability rate of 99.8%.'
                  }
                </p>
                <p>
                  {isArabic
                    ? 'نحن ملتزمون بالتميز التشغيلي والاستدامة البيئية والمساهمة في التنمية الاقتصادية للأردن من خلال الاستثمار في التكنولوجيا المتقدمة والشراكات الاستراتيجية.'
                    : 'We are committed to operational excellence, environmental sustainability, and contributing to Jordan\'s economic development through investment in advanced technology and strategic partnerships.'
                  }
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'محطة الطاقة' : 'Power Plant'}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'رحلتنا عبر الزمن' : 'Our Journey Through Time'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'معالم مهمة في تطوير قطاع الطاقة في الأردن'
                : 'Key milestones in Jordan\'s energy sector development'
              }
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#005670] opacity-20"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#005670] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#005670] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#231f20] mb-3">
                        {isArabic ? milestone.title.ar : milestone.title.en}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isArabic ? milestone.description.ar : milestone.description.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'فريق القيادة' : 'Leadership Team'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'قادة ذوو خبرة يقودون نبراس الأردن نحو مستقبل مستدام'
                : 'Experienced leaders driving Nibras Jordan towards a sustainable future'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <React.Fragment key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">{leader.name}</h3>
                    <p className="text-[#005670] font-semibold mb-4">
                      {isArabic ? leader.position.ar : leader.position.en}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {isArabic ? leader.bio.ar : leader.bio.en}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('business')}
                className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {isArabic ? 'أعمالنا' : 'Our Business'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {isArabic ? 'الوظائف' : 'Careers'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'المبادئ التي توجه عملنا وتشكل ثقافتنا المؤسسية'
                : 'The principles that guide our work and shape our corporate culture'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] mb-4">
                    {isArabic ? value.title.ar : value.title.en}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isArabic ? value.description.ar : value.description.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;