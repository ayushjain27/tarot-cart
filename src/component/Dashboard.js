import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Star,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  ChevronRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Target,
  Gift,
  ArrowRight,
  Globe,
  DollarSign,
  Clock as TimeIcon,
  Sparkles,
  Heart,
  Quote,
  Zap,
  BadgeCheck,
  Gem,
  Briefcase,
  CheckCircle2,
  XCircle,
  UserCheck,
  Instagram,
  MessageSquare,
  Phone,
  X,
  Trophy,
} from "lucide-react";
import Image3 from "./trot-bonus-Image-01.webp";
import Image4 from "./tarot-bonus-2.webp";
import Image5 from "./actual-bonus-3-tarot-1.webp";
import Image6 from "./tarot-bonues-3-Image-01.webp";
import Image7 from "./tarot-bonus-05.webp";
import Image8 from "./tarot-bonues-3-Image-01 (1).webp";
import Image9 from "./mentor-img.webp";
import Image10 from "./Harpeet-kaur-new-image-new-1-1-2-1.webp";

const TarotWorkshopScreen = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 100px down if not dismissed
      if (!dismissed) {
        setVisible(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;
  // Features data
  const features = [
    {
      icon: Calendar,
      text: "2-Day Intensive Program",
      color: "text-violet-600",
    },
    { icon: Users, text: "Women-Only Community", color: "text-rose-600" },
    {
      icon: Award,
      text: "Certified Expert Instructor",
      color: "text-amber-600",
    },
    { icon: Target, text: "Proven Learning Method", color: "text-emerald-600" },
  ];

  // Stats data
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "10k+", label: "Women Trained", icon: Users },
    { number: "4.9", label: "Star Rating", icon: Star },
  ];

  const newStats = [
    {
      icon: <Star className="w-6 h-6 text-amber-400" />,
      value: "4.9",
      label: "Star Rating",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      value: "100K+",
      label: "Women Helped",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      value: "Tarot Trinity",
      label: "Framework",
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: "Real Client Experience",
      description:
        "Work with real clients from Day 1 to build confidence and skills",
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      title: "Hands-On Training",
      description:
        "Practical assignments and internship for immediate application",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Personalized Mentorship",
      description:
        "1:1 guidance from experienced practitioners to ensure your success",
      icon: <Award className="w-8 h-8 text-amber-600" />,
      color: "bg-amber-100",
    },
    {
      title: "Paid Opportunities",
      description: "Top performing students receive paid internship positions",
      icon: <Zap className="w-8 h-8 text-green-600" />,
      color: "bg-green-100",
    },
  ];

  const weeks = [
    {
      title: "Week 1: Foundations of Tarot & Intuition Development",
      days: [
        {
          day: 1,
          title: "Deep Dive into Solar Energy (Liken Mountage & Success)",
          icon: <Zap className="w-6 h-6 text-amber-600" />,
          topics: [
            "Major & Minor Arcana fundamentals",
            "Card meanings and associations",
            "Basic spreads for beginners",
          ],
        },
        {
          day: 2,
          title: "Understanding Lunar Energy (Guillaume & Energies)",
          icon: <Globe className="w-6 h-6 text-indigo-600" />,
          topics: [
            "Moon phases and tarot connections",
            "Intuitive reading techniques",
            "Energy sensing exercises",
          ],
        },
        {
          day: 3,
          title: "How to Access Your Psychic Abilities & Trust Your Intuition",
          icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
          topics: [
            "Developing clairvoyance with tarot",
            "Trusting your first impressions",
            "Removing self-doubt blocks",
          ],
        },
        {
          day: 4,
          title:
            "Advanced Tarot Spreads & Cultural Specials (EXCLUSIVE Content)",
          icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
          topics: [
            "Celtic Cross deep analysis",
            "Cultural interpretation methods",
            "Ancestral connection spreads",
          ],
        },
        {
          day: 5,
          title: "Tarot for Self-Healing & Shadow Work",
          icon: <Heart className="w-6 h-6 text-rose-600" />,
          topics: [
            "Identifying shadow aspects",
            "Healing spreads for trauma",
            "Journaling with tarot",
          ],
        },
        {
          day: 6,
          title: "Reading for Real Clients (LIVE Case Study Session)",
          icon: <Users className="w-6 h-6 text-blue-600" />,
          topics: [
            "Client communication techniques",
            "Ethical reading practices",
            "Live demonstration and Q&A",
          ],
        },
      ],
    },
    {
      title: "Week 2: Manifestation, Energy Protection & Advanced Techniques",
      days: [
        {
          day: 8,
          title: "Tarot & Crystal Healing (Powerful Combinations)",
          icon: <Shield className="w-6 h-6 text-violet-600" />,
          topics: [
            "Crystal-tarot pairings",
            "Energy grids with cards",
            "Amplifying readings",
          ],
        },
        {
          day: 9,
          title: "Alchemy, Journaling & Manifestation with Tarot",
          icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
          topics: [
            "Vision board integration",
            "Daily manifestation rituals",
            "Abundance mindset techniques",
          ],
        },
        {
          day: 10,
          title: "Energy Protection & Clearing Before & After Readings",
          icon: <Shield className="w-6 h-6 text-emerald-600" />,
          topics: [
            "Protection rituals",
            "Space clearing methods",
            "Energetic hygiene practices",
          ],
        },
      ],
    },
    {
      title: "Week 3: Business Growth, Marketing & High-Ticket Sales",
      days: [
        {
          day: 12,
          title:
            "Instagram, YouTube & TikTok Growth Strategies for Tarot Readers",
          icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
          topics: [
            "Content creation framework",
            "Algorithm optimization",
            "Viral post strategies",
          ],
        },
        {
          day: 13,
          title: "Pricing, High-Ticket Sales & Handling Difficult Clients",
          icon: <DollarSign className="w-6 h-6 text-green-600" />,
          topics: [
            "Value-based pricing",
            "Sales conversation scripts",
            "Boundary setting",
          ],
        },
        {
          day: 14,
          title: "How to Build a Six-Figure Tarot Business",
          icon: <DollarSign className="w-6 h-6 text-purple-600" />,
          topics: [
            "Scaling strategies",
            "Passive income streams",
            "Client retention systems",
          ],
        },
        {
          day: 15,
          title: "Graduation & Career Scaling",
          icon: <Users className="w-6 h-6 text-blue-600" />,
          topics: [
            "Certification process",
            "Alumni community access",
            "Next steps guidance",
          ],
        },
      ],
    },
  ];

  const sections = [
    {
      title: "Tarot Foundations & Psychic Development",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      items: [
        "Understanding Tarot history, myths, and misconceptions",
        "Deep dive into Major & Minor Arcana with psychological insights",
        "Understanding tarot elements, numerology & astrology integration",
        "How to trust and activate your intuition & psychic abilities",
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Advanced Tarot Techniques & Spreads",
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      items: [
        "Custom spreads for love, career, healing & manifestation",
        "Shadow Work & Subconscious Healing with Tarot",
        "Ethical tarot reading & managing difficult clients",
      ],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      title: "Tarot & Energy Healing Integration",
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      items: [
        "Using Tarot for chakra balancing & aura cleansing",
        "Combining Tarot with crystals, affirmations & journaling",
        "Tarot as a tool for deep meditation & self-discovery",
      ],
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      title: "Business & Social Media Growth",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      items: [
        "How to build your Tarot brand & get high-paying clients",
        "Social media strategies: Instagram, TikTok, YouTube growth",
        "High-ticket sales: How to sell 1:1 readings, courses & coaching",
        "Secrets to charging premium rates & handling tricky clients",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Real-World Case Studies & Internship",
      icon: <BadgeCheck className="w-6 h-6 text-emerald-600" />,
      items: [
        "Live practice with real clients from Day 1",
        "Understanding energy protection & avoiding spiritual burnout",
        "Paid internship for top students & direct mentorship",
      ],
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ];

  const newFeatures = [
    {
      name: "Curriculum Depth",
      others: "Basic card meanings",
      yours: "Deep psychological & spiritual insights",
      icon: <Star className="w-5 h-5 text-amber-500" />,
    },
    {
      name: "Practical Application",
      others: "Limited practice",
      yours: "Real-world application & business strategies",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Client Experience",
      others: "Theoretical only",
      yours: "Real client experience from Day 1",
      icon: <Users className="w-5 h-5 text-purple-500" />,
    },
    {
      name: "Career Support",
      others: "None",
      yours: "Paid internship for hardworking students",
      icon: <Award className="w-5 h-5 text-emerald-500" />,
    },
    {
      name: "Business Training",
      others: "Not covered",
      yours: "High-ticket sales & social media strategies",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    },
    {
      name: "Bonus Materials",
      others: "None",
      yours: "Healing candles, charged crystals & Tarot cleansing kit",
      icon: <Gift className="w-5 h-5 text-rose-500" />,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What will I learn in this tarot card reading course?",
      answer:
        "You'll master card interpretations, develop intuitive reading skills, and learn professional techniques.",
    },
    {
      question: "What makes your tarot card reading course unique?",
      answer:
        "Our Trinity Framework simplifies complex concepts and focuses on practical, results-driven learning.",
    },
    {
      question: "Do I need any prior experience with tarot cards?",
      answer:
        "No, this course is designed for both beginners and those looking to professionalize their skills.",
    },
    {
      question: "Do I need to purchase a tarot deck to take this course?",
      answer:
        "We recommend having your own deck, but we'll guide you in selecting the right one during the course.",
    },
    {
      question: "Are the classes recorded if I can't make a live session?",
      answer:
        "Yes, all sessions are recorded and available for 6 months after the course ends.",
    },
    {
      question: "Is there any Advance Level Courses also?",
      answer:
        "Yes, we offer advanced modules covering reversals, timing techniques, and professional practice.",
    },
    {
      question: "Are Remedies, Timings & Reversals covered in this program?",
      answer:
        "These are covered in our advanced modules, which you can access after completing the foundation course.",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 152,
      name: "Volahnavi",
      content:
        "Thank you very much madam, really I am very grateful to you. Actually I have attended many workshop online, but this is far more different from others. Honestly, I am feeling very satisfaction after completing this course. I have got something what I am searching here and there. Really you are not the greedy teacher like so many teachers of the present time. Actually I want to give a big thanks to God for bringing you to me through the course. Really you are really a spiritual teacher. Thank you once again madam for your lovely teaching and lovely support.",
      rating: 5,
    },
    {
      id: "Meghavi",
      name: "Meghavi",
      content:
        "This have been an absolutely amazing & enlightening journey with Ekta maam. I was not sure how the whole Course thing worked but was astonished at the different end in the school. It has been a wonderful evening and knowledge in the studies & activities we understood over so many days. The opportunities we got in the class to do reading of our field's Auchmarks boost our confidence and enthusiasm more. Thanks so very much Ekta Maam finally received his courses to everyone who is open minded to different views and to giving it a go.",
      activity: "Active 1: le-go",
      rating: 5,
    },
    {
      id: 153,
      name: "Sameeksha Gaur",
      content:
        "Hello, Sameeksha Gaur this side. I still want to make a career in tarot card reading then I'll learn other courses as well. My fiance suggested to me about you, he has booked this workshop and asked me to join. Genuinely speaking I've attended more than 10 workshops till now that never experienced such a lovely workshop before. I mean you are amazing, the way u engage people, the way you teach, it's just wow. You are a pure and positive soul. I felt like I found a guru for my new journey.",
      rating: 5,
    },
  ];

  // Bonuses
  const bonuses = [
    {
      image: Image3,
      title: "Tarot Cleansing Guide",
      description:
        "Protect from negative energies and maintain your deck's purity.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image4,
      title: "Tarot Shuffling Guide",
      description:
        "Connect deeply with your deck and enhance intuitive powers.",
      value: "Worth Rs. 499/-",
    },
    {
      image: Image5,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image6,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image7,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image8,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-amber-50">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/8 to-amber-600/8"></div>
        <div className="relative z-10 px-6 py-8">
          <div className="mx-auto">
            {/* Workshop Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-violet-600 to-amber-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Lightbulb className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Professional Tarot Certification
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
              The Most Comprehensive Tarot Course in India
            </h1>
            <h5 className="text-2xl font-bold text-center mb-2 text-gray-600">
              Welcome to the Ultimate Tarot Mastery Program!
            </h5>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Are you ready to unlock the secrets of Tarot and build a thriving
              career? Our 16-day structured course will take you from a beginner
              to a high-earning professional Tarot reader! This is NOT just
              another Tarot course—this is a complete business roadmap,
              empowering you to scale from zero to ₹1 Lakh+ per month with
              Tarot.
            </p>

            {/* Hero Section with Instructor */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Instructor Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">HK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Ekta aggarwal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Certified Tarot Master • 10+ Years Experience
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Talented intuitive tarot reader, coach, and co-founder of The
                  Founder of divineliightt & divine crystal. Committed to guiding women on their journey
                  of personal growth using the wisdom of tarot.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Workshop Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-violet-50 rounded-xl p-3 border border-violet-100">
                    <Calendar className="w-5 h-5 text-violet-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        18th - 19th July
                      </p>
                      <p className="text-sm text-gray-600">2 Intensive Days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        4:00 PM - 5:30 PM IST
                      </p>
                      <p className="text-sm text-gray-600">
                        Daily Live Sessions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300"
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color} mb-3`} />
                    <p className="text-sm font-medium text-gray-900">
                      {feature.text}
                    </p>
                  </div>
                ))}

                {/* Full width section */}
                <div className="col-span-2 bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-8 shadow-xl mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Start Your Tarot Journey?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Join thousands who've transformed their lives through tarot
                  </p>

                  <div className="space-y-4 max-w-md mx-auto">
                    <button
                      onClick={() =>
                        window.open(
                          "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                          "_blank"
                        )
                      }
                      className="w-full bg-white text-violet-700 hover:bg-gray-100 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Play className="w-5 h-5" />
                      Register Now
                    </button>

                    <div className="text-white/80 text-sm flex items-center justify-center gap-2">
                      <TimeIcon className="w-4 h-4" />
                      <span>Limited seats available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* Award Image - Replace with actual award image */}
                  <div className="h-160 overflow-hidden">
                    <img
                      src={Image10}
                      // alt={bonus.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Award Content */}
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-amber-800 mb-2">
                        The Award For
                      </h3>
                      <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
                        Tarot Life Coach{" "}
                        <span className="block">of the Year</span>
                      </h2>
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <Trophy className="w-8 h-8 text-amber-600" />
                        <p className="text-xl font-medium text-amber-800">
                          Goes to
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200">
                      <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">
                        Ekta Aggarwal
                      </h1>
                      <p className="text-sm text-gray-600 mb-4">
                        Mrs. Ekta Aggarwal
                      </p>
                      <div className="flex items-center justify-center gap-2 bg-amber-50 px-4 py-2 rounded-full inline-flex">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="font-medium text-amber-800">
                          Awarded as Best Tarot Coach
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="text-amber-800 font-medium ml-2">
                        5.0 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-purple-900 mb-4">
                    What You Will Learn{" "}
                    <span className="text-purple-600">– Basic to Advanced</span>
                  </h2>
                  <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                    Master every aspect of professional tarot reading from
                    foundational knowledge to building a thriving spiritual
                    business
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className={`${section.bgColor} rounded-xl p-6 border-l-4 ${section.borderColor} shadow-sm hover:shadow-md transition-all duration-300 h-full`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Zap className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <Gem className="mr-2 h-5 w-5" />
                    Enroll Now to Start Your Journey
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Course <span className="text-violet-600">Curriculum</span>
              </h3>

              <div className="space-y-8">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="mb-10">
                    <h4 className="text-lg font-bold mb-4 text-violet-700 bg-violet-50 px-4 py-2 rounded-lg">
                      {week.title}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {week.days.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex gap-3 items-start">
                            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                              {day.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-900">
                                Day {day.day}: {day.title}
                              </h5>
                            </div>
                          </div>

                          <div className="mt-3 space-y-2 pl-2">
                            {day.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {topic}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Other Tarot Courses{" "}
                    <span className="text-purple-600">vs.</span> Our Course
                  </h2>
                  <p className="text-lg text-gray-600">
                    See how we provide exponentially more value than
                    conventional tarot courses
                  </p>
                </div>

                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          Other Courses
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-purple-700 bg-purple-50"
                        >
                          Our Course
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {newFeatures.map((feature, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            <div className="flex items-center">
                              <div className="mr-3 p-1 rounded-md bg-gray-100">
                                {feature.icon}
                              </div>
                              {feature.name}
                            </div>
                          </td>
                          <td className="whitespace-normal px-3 py-4 text-sm text-gray-500 text-center">
                            <div className="flex flex-col items-center">
                              <XCircle className="h-5 w-5 text-red-400 mb-1" />
                              <span>{feature.others}</span>
                            </div>
                          </td>
                          <td className="whitespace-normal px-3 py-4 text-sm text-gray-900 font-medium bg-purple-50 text-center">
                            <div className="flex flex-col items-center">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mb-1" />
                              <span>{feature.yours}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-center">
                  <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <Star className="mr-2 h-5 w-5" />
                    Choose the Superior Learning Experience
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-3">
                    Meet Your Mentor
                  </h2>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-purple-700">
                    Ekta Aggarwal
                  </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  {/* Mentor Photo - Replace with actual image */}
                  <div className="h-160 overflow-hidden">
                    <img
                      src={Image9}
                      // alt={bonus.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-purple-100">
                      <h4 className="text-xl font-bold text-purple-900 mb-4">
                        <span className="text-purple-600">Ekta Aggarwal</span>{" "}
                        is a talented intuitive tarot card reader, coach, and
                        co-founder of The Occult Academy.
                      </h4>

                      <p className="text-gray-700 mb-4">
                        Her goal is to help <strong>100,000 women</strong> live
                        life on their terms and thrive financially, mentally,
                        and emotionally. With over <strong>10 years</strong> of
                        experience and a <strong>4.9-star rating</strong>,
                        Ekta is committed to guide others on their journey
                        of personal growth using the wisdom of tarot.
                      </p>

                      <p className="text-gray-700 mb-6">
                        Whether you want to deepen your spiritual connections,
                        achieve your goals, or simply understand life's
                        challenges better, Ekta can light the way. Her
                        special <strong>Tarot Trinity Framework</strong> makes
                        the card reading simple, and her practical coaching
                        helps you turn cosmic guidance into real success.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {newStats.map((stat, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg border border-gray-200 text-center"
                          >
                            <div className="flex justify-center mb-2">
                              {stat.icon}
                            </div>
                            <div className="text-xl font-bold text-gray-900">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:from-purple-700 hover:to-indigo-700">
                          <Zap className="w-5 h-5 mr-2" />
                          Join Ekta Aggarwal's Program
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white py-4 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Real-World Experience{" "}
                    <span className="text-purple-600">&</span> Internship
                    Opportunity
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Go beyond theory and gain practical experience that prepares
                    you for professional success
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                    >
                      <div
                        className={`${benefit.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                      >
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                    <span className="mr-3">
                      Apply for Internship Opportunities
                    </span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bonuses Section */}
            <div className="bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-6 shadow-lg mb-4 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Exclusive Bonuses Worth ₹10k
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="h-80 overflow-hidden">
                      <img
                        src={bonus.image}
                        alt={bonus.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg mb-2 mt-4">
                      {bonus.title}
                    </h4>
                    <p className="text-white/80 text-sm mb-3">
                      {bonus.description}
                    </p>
                    <div className="text-amber-200 text-sm font-medium">
                      {bonus.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br rounded-3xl from-purple-50 to-indigo-50 py-12 mt-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-purple-900 mb-3">
                      Limited Time Offer
                    </h2>
                    <p className="text-lg text-purple-700">
                      Transform your life with our Tarot course at an incredible
                      price
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Course Value */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                      <div className="flex items-center mb-4">
                        <Gem className="h-6 w-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Course Value
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        Rs 2,999
                      </div>
                      <p className="text-gray-500 mt-2">
                        Comprehensive tarot mastery program
                      </p>
                    </div>

                    {/* Bonuses Value */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                      <div className="flex items-center mb-4">
                        <Gift className="h-6 w-6 text-indigo-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Bonus Value
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        Rs 9,995
                      </div>
                      <p className="text-gray-500 mt-2">
                        Exclusive materials & resources
                      </p>
                    </div>

                    {/* Today's Price */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400 transform scale-105 z-10 relative">
                      <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                        SPECIAL OFFER
                      </div>
                      <div className="flex items-center mb-4">
                        <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Today's Price
                        </h3>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        Rs 199
                      </div>
                      <div className="flex items-center text-green-600 mb-3">
                        <BadgeCheck className="h-5 w-5 mr-2" />
                        <span className="font-medium">
                          + Free Access to All Bonuses
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        Save Rs 12,895 (98% off)
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105">
                      <span className="mr-2">Register Now for Just Rs 199</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            {/* <div className="bg-gradient-to-r from-violet-50 to-amber-50 rounded-3xl p-6 border border-gray-100 shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Success Stories: Students in the ₹1Lac+ Club
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {story.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {story.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-amber-50 px-3 py-2 rounded-lg">
                      <DollarSign className="w-4 h-4 text-amber-600" />
                      <span className="font-medium text-amber-800">
                        {story.achievement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="mb-4 bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4">
                      <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 flex items-center justify-center">
                        <BookOpen className="mr-3 w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                        Tarot Course Testimonials
                      </h1>
                      <p className="text-base sm:text-lg text-purple-700 max-w-2xl mx-auto">
                        Hear what our students have to say about their
                        transformative journey with Mrs. Ekta Aggarwal
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                        >
                          <div className="p-6 sm:p-6 flex-grow">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 bg-purple-100 p-2 sm:p-3 rounded-full">
                                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                              </div>
                              <div className="ml-4">
                                <div className="flex items-center flex-wrap">
                                  <h3 className="text-base sm:text-lg font-semibold text-purple-900">
                                    {testimonial.name}
                                  </h3>
                                  {testimonial.activity && (
                                    <span className="ml-2 sm:ml-3 mt-1 sm:mt-0 px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full">
                                      {testimonial.activity}
                                    </span>
                                  )}
                                </div>
                                <div className="mt-1 flex">
                                  {[...Array(testimonial.rating)].map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                      />
                                    )
                                  )}
                                </div>
                                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                                  {testimonial.content}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-purple-50 px-4 sm:px-6 py-3 flex items-center">
                            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2" />
                            <span className="text-xs sm:text-sm text-purple-700">
                              Tarot Transformation
                            </span>
                            <div className="ml-auto flex items-center">
                              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400 mr-1" />
                              <span className="text-xs sm:text-sm text-gray-500">
                                Inspired
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <button onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  } className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all">
                        <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Join Our Next Workshop
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-gray-900">{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <ChevronRight className="w-5 h-5 text-violet-600" />
                        </span>
                      </summary>
                      <p className="text-gray-600 mt-2 pl-2">{faq.answer}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-8 shadow-xl mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Start Your Tarot Journey?
              </h3>
              <p className="text-white/90 mb-6">
                Join thousands who've transformed their lives through tarot
              </p>

              <div className="space-y-4 max-w-md mx-auto">
                <button
                  onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  }
                  className="w-full bg-white text-violet-700 hover:bg-gray-100 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5" />
                  Enroll Now
                </button>

                <div className="text-white/80 text-sm flex items-center justify-center gap-2">
                  <TimeIcon className="w-4 h-4" />
                  <span>Limited seats available</span>
                </div>
              </div>
            </div>
            <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Contact information */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-2">
                      Transform Your Passion Into a Thriving Career
                    </h3>
                    <p className="text-purple-100 max-w-md">
                      Our powerful, business-focused Tarot course will help you
                      build the skills and confidence to succeed professionally.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <a
                        href="https://wa.me/919910386064"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        WhatsApp Us
                      </a>
                      <a
                        href="https://instagram.com/divineliightt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg transition-colors"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Follow on Instagram
                      </a>
                    </div>
                  </div>

                  {/* Right side - Contact details */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2 text-purple-300" />
                      Contact Us
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 mt-1 mr-3 text-purple-300 flex-shrink-0" />
                        <div>
                          <p className="font-medium">
                            Enrollment & Information
                          </p>
                          <a
                            href="tel:+919910386064"
                            className="text-purple-100 hover:text-white transition-colors text-lg font-semibold"
                          >
                            +91 99103 86064
                          </a>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-purple-800">
                        <p className="text-purple-200 text-sm">
                          DM us on WhatsApp or Instagram to enroll now and begin
                          your transformation!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-purple-800 text-center text-purple-300 text-sm">
                  <p>
                    © {new Date().getFullYear()} Divine Light Tarot Academy. All
                    rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 pointer-events-none`}>
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-xl transition-all duration-500 ${
            visible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
            pointerEvents: "auto",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="flex items-center mr-6">
                  <span className="text-2xl font-bold mr-2">Rs 199</span>
                  <span className="text-lg line-through opacity-70">₹2999</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1 text-yellow-300" />
                  <span>Registration Closing: 16th Jul 2025</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2daypraticaltarotwebnair?fbclid=PAQ0xDSwLWGSVleHRuA2FlbQIxMQABp8FG1c-grgtEaSu-mgmzgPiz4yZqT_E3-ULXKIdN1APXmecoBA39B2vDb6wK_aem_NDXj4ePOpKMB4mVDEnVofw",
                      "_blank"
                    )
                  }
                  className="flex items-center justify-center px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-md shadow-lg hover:shadow-xl transition-all hover:from-amber-300 hover:to-amber-400"
                >
                  <span className="mr-2">Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotWorkshopScreen;
