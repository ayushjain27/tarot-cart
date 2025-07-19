import React, { useEffect, useRef, useState } from "react";
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
  LockKeyhole,
  ClipboardList,
} from "lucide-react";
import Image9 from "./image/Screenshot 2025-07-05 at 11.44.34 PM.png";
import Image10 from "./image/20250706_162240.png";
import Image11 from "./image/20250706_170347-removebg-preview.png";
import Image12 from "./image/20250706_171104-removebg-preview.png";
import Image13 from "./image/20250706_171519-removebg-preview.png";
import Image14 from "./image/20250706_173915.png";
import Image15 from "./image/WhatsApp Image 2025-07-06 at 13.48.17.jpeg";
import Image16 from "./image/WhatsApp Image 2025-07-06 at 13.48.22.jpeg";
import Image17 from "./image/WhatsApp Image 2025-07-06 at 13.49.30.jpeg";
import Image18 from "./image/WhatsApp Image 2025-07-06 at 13.49.39.jpeg";
import Image19 from "./image/WhatsApp Image 2025-07-06 at 13.49.50.jpeg";
import Image20 from "./image/WhatsApp Image 2025-07-06 at 20.23.32.jpeg";
import Video1 from "./video/video.mp4";
import Video2 from "./video/video1.mp4";
import Video3 from "./video/video2.mp4";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TarotWorkshopScreen = () => {
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);

  const itemsToShow = 3;

  const testimonials = [
    {
      image: Image15,
      rating: 5,
    },
    {
      image: Image16,
      rating: 5,
    },
    {
      image: Image17,
      rating: 5,
    },
    {
      image: Image18,
      rating: 5,
    },
    {
      image: Image19,
      rating: 5,
    },
    {
      image: Image20,
      rating: 5,
    },
  ];

  const videoTestimonials = [
    { videoId: 1, video: Video1, thumbnail: "thumbnail1.jpg" },
    { videoId: 2, video: Video2, thumbnail: "thumbnail2.jpg" },
    { videoId: 3, video: Video3, thumbnail: "thumbnail3.jpg" },
  ];

  const videoRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video click
  const handleVideoClick = (index) => {
    // If clicking the already active video, toggle play/pause
    if (activeVideoIndex === index) {
      const video = videoRefs.current[index];
      if (video.paused) {
        playVideo(index);
      } else {
        video.pause();
        setIsPlaying(false);
      }
      return;
    }

    // Play the clicked video
    playVideo(index);
  };

  // Proper video play function with error handling
  const playVideo = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play the selected video
    const video = videoRefs.current[index];
    if (video) {
      // Reset video first to prevent freezing
      video.currentTime = 0;

      // Unmute only the clicked video
      video.muted = false;

      video
        .play()
        .then(() => {
          setActiveVideoIndex(index);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Play failed:", err);
          // Fallback to muted play
          video.muted = true;
          video.play().then(() => {
            setActiveVideoIndex(index);
            setIsPlaying(true);
          });
        });
    }
  };

  // Handle video ended event
  const handleVideoEnded = (index) => {
    if (activeVideoIndex === index) {
      const video = videoRefs.current[index];
      video.currentTime = 0;
      video.play();
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.src = ""; // Release video resources
        }
      });
    };
  }, []);

  // Determine which testimonials to show

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
    { icon: Users, text: "Inclusive Community", color: "text-rose-600" },
    {
      icon: Award,
      text: "Certified Expert Instructor",
      color: "text-amber-600",
    },
    { icon: Target, text: "Proven Learning Method", color: "text-emerald-600" },
  ];

  // Stats data
  const stats = [
    { number: "4+", label: "Years Experience", icon: Award },
    { number: "50k+", label: "Souls Transformed", icon: Users },
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
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      value: "50K+",
      label: "Souls Helped",
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
            "Instagram, YouTube & Facebook Growth Strategies for Tarot Readers",
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
      title: "Master Tarot Card Meanings",
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      items: [
        "I'll teach you how you can remember every tarot card meaning just by looking at the tarot card using my 'personal stories framework'",
        "No memorization / No book needed ",
        "you'll just see the card and will be able to explain its meaning beautifully",
      ],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      title: "Business & Social Media Growth",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      items: [
        "How to build your Tarot brand & get high-paying clients",
        "Social media strategies: Instagram, Facebook, YouTube growth",
        "High-ticket sales: How to sell 1:1 readings, courses & coaching",
        "Secrets to charging premium rates & handling tricky clients",
        "I’ll show you how you can conduct life-transforming tarot coaching sessions for clients (not doing stressful predictions) and charge Rs 10k to 50k per client (even if you’re just a beginner tarot reader and have no coaching experience)",
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
        "I’ll also show you our unique tarot client acquisition method that’s helping our students book 30-50 paid tarot appointments every month consistently.",
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
        "No deck is required to attend this webinar. Virtual deck will be given. Later we will guide for the deck",
    },
    {
      question: "Will a recording of the webinar be available?",
      answer:
        "Unfortunately, the webinar will not be recorded or shared later. We encourage you to attend the live session to get the most value.",
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

  // Bonuses
  const bonuses = [
    {
      image: Image11,
      title: "Tarot Cleansing Guide",
      description:
        "Protect from negative energies and maintain your deck's purity.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image12,
      title: "Tarot Shuffling Guide",
      description:
        "Connect deeply with your deck and enhance intuitive powers.",
      value: "Worth Rs. 499/-",
    },
    {
      image: Image10,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image13,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
    {
      image: Image14,
      title: "Daily Guidance Formula",
      description: "Better decision-making and aligned actions through tarot.",
      value: "Worth Rs. 999/-",
    },
  ];

  const uniqueFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Live Real-World Experience",
      description: "Work with actual clients from Day 1!",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Internship Opportunity",
      description: "Gain hands-on experience & confidence",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Tarot + Business Scaling",
      description: "Turn Tarot into a full-time, high-income career",
    },
    {
      icon: <LockKeyhole className="w-6 h-6 text-amber-600" />,
      title: "Exclusive Advanced Spreads & Rituals",
      description: "Access Tarot techniques no one else is teaching",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-rose-600" />,
      title: "Practical Exercises & Case Studies",
      description: "Daily exercises with real-world applications",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "Manifestation, Energy Work & Healing",
      description: "Use Tarot with crystals, affirmations, and rituals",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
      title: "Build Your Social Media Presence",
      description:
        "Attract high-paying clients via Instagram, YouTube, Facebook",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      title: "Pricing & Business Mastery",
      description: "Charge ₹5,000+ per session and scale your income",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-amber-50">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/8 to-amber-600/8"></div>
        <div className="relative z-10 px-6 py-4">
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
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 lg:px-0 mb-12">
              {/* Instructor Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-xl">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">EA</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Ekta Aggarwal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Certified Tarot Master • 4+ Years Experience
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mb-6 sm:hidden">
                  <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg border-4 border-white bg-white">
                    <img
                      src={Image9}
                      alt="Ekta Aggarwal - Tarot Mentor"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Talented intuitive tarot reader, coach, and co-founder of The
                  Founder of divineliightt & divine crystal. Committed to
                  guiding souls on their journey of personal growth using the
                  wisdom of tarot.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-2 sm:p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="flex justify-center mb-1 sm:mb-2">
                        <stat.icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Workshop Details */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 bg-violet-50 rounded-xl p-3 border border-violet-100">
                    <Calendar className="flex-shrink-0 w-5 h-5 text-violet-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        25th - 26th July
                      </p>
                      <p className="text-sm text-gray-600">2 Intensive Days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <Clock className="flex-shrink-0 w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        8:00 PM - 9:30 PM IST
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

                <div className="col-span-2 bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-8 shadow-xl mb-8 text-center animate-pulse">
                  <h3 className="text-2xl font-bold text-white mb-3 animate-bounce">
                    Ready to Start Your Tarot Journey?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Join thousands who've transformed their lives through tarot
                  </p>

                  <div className="space-y-4 max-w-md mx-auto">
                    <button
                      onClick={() =>
                        window.open(
                          "https://superprofile.bio/e/2dayTarotworkshop",
                          "_blank"
                        )
                      }
                      className="w-full bg-white text-violet-700 hover:bg-gray-100 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl animate-shake hover:animate-none"
                    >
                      <Play className="w-5 h-5" />
                      Enroll Now
                    </button>

                    <div className="text-white/80 text-sm flex items-center justify-center gap-2 animate-pulse">
                      <TimeIcon className="w-4 h-4 animate-spin" />
                      <span className="animate-shake">
                        Limited seats available
                      </span>
                    </div>
                  </div>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }

                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }

                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>
            {/* <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="h-160 overflow-hidden">
                    <img
                      src={Image10}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
            </div> */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
                    What Makes This Course{" "}
                    <span className="text-purple-600">Unique?</span>
                  </h2>
                  <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                    Discover the transformative elements that set our program
                    apart from conventional Tarot courses
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {uniqueFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-purple-50">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-700">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://superprofile.bio/e/2dayTarotworkshop",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:from-purple-700 hover:to-indigo-700 animate-shake"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Enroll Now to Access These Benefits
                  </button>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }

                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }

                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-purple-900 mb-4">
                    In Just 2 days, You will Learn What no one is Teaching You
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
                  <button
                    onClick={() =>
                      window.open(
                        "https://superprofile.bio/e/2dayTarotworkshop",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all animate-shake animate-pulse"
                  >
                    <Gem className="mr-2 h-5 w-5" />
                    Enroll Now to Start Your Journey
                  </button>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }

                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }

                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg mb-8">
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
            </div> */}

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
                  {/* Desktop Table (shown on md screens and up) */}
                  <div className="hidden md:block">
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
                            className="px-3 py-3.5 text-center text-sm font-semibold text-violet-700 bg-red-50"
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
                            <td className="whitespace-normal px-3 py-4 text-sm text-gray-900 bg-red-50 text-center">
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

                  {/* Mobile Cards (shown on screens smaller than md) */}
                  <div className="md:hidden space-y-4 p-4">
                    {newFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                      >
                        <div className="flex items-center mb-3">
                          <div className="mr-3 p-1 rounded-md bg-gray-100">
                            {feature.icon}
                          </div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {feature.name}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-2 border border-gray-200 rounded bg-red-50">
                            <XCircle className="h-5 w-5 text-red-400 mx-auto mb-1" />
                            <p className="text-xs text-red-500 font-medium">
                              Other Courses
                            </p>
                            <p className="text-xs text-gray-900 mt-1">
                              {feature.others}
                            </p>
                          </div>

                          <div className="text-center p-2 border border-purple-200 rounded bg-purple-50">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                            <p className="text-xs text-purple-700 font-medium">
                              Our Course
                            </p>
                            <p className="text-xs text-gray-900 mt-1">
                              {feature.yours}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://superprofile.bio/e/2dayTarotworkshop",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all animate-shake animate-pulse hover:animate-none"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Choose the Superior Learning Experience
                  </button>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }
                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }
                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-3">
                    Meet Your Mentor
                  </h2>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-purple-700">
                    Ekta Aggarwal
                  </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Mentor Photo */}
                  <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg overflow-hidden shadow-lg border-4 border-white bg-white">
                      <img
                        src={Image9}
                        alt="Ekta Aggarwal - Tarot Mentor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mentor Content */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-purple-100">
                      <h2 className="text-xl font-bold text-purple-900 mb-4">
                        {/* <span className="text-purple-600">Ekta Aggarwal</span>{" "} */}
                        Founder – DivineLiightt & Divine Crystals | India’s
                        Youngest Spiritual CEO
                      </h2>
                      <h6 className="text-md font-bold text-purple-500 mb-4">
                        I cracked the UPSC Prelims, but my soul was meant for
                        something bigger. I chose my true calling — and turned
                        it into a movement.
                      </h6>

                      <p className="text-gray-700 mb-4">
                        I cracked the UPSC Prelims, but my soul was meant for
                        something bigger. I chose my true calling — and turned
                        it into a movement. From a{" "}
                        <strong>single Instagram page</strong>, I delivered over{" "}
                        <strong>50,000+</strong> life-changing tarot readings in
                        just a few months — with <strong>zero ad spend</strong>.
                        Today, I run two of the most{" "}
                        <strong>trusted spiritual brands</strong>: ✨{" "}
                        <strong>DivineLiightt</strong> – India's leading
                        platform for spiritual education ✨{" "}
                        <strong>Divine Crystals</strong> – a premium brand for
                        energy-rich healing crystals
                      </p>

                      <p className="text-gray-700 mb-6">
                        I’ve read for celebrities, influencers, and global
                        seekers, but my mission is bigger — I don’t{" "}
                        <strong>
                          teach courses. I create spiritual millionaires.
                        </strong>{" "}
                        If you’re ready to build your purpose-led empire — this
                        is where it begins.
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
                        <button
                          onClick={() =>
                            window.open(
                              "https://superprofile.bio/e/2dayTarotworkshop",
                              "_blank"
                            )
                          }
                          className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:from-purple-700 hover:to-indigo-700 animate-shake animate-pulse hover:animate-none"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Join Ekta Aggarwal's Program
                        </button>

                        <style jsx>{`
                          @keyframes shake {
                            0%,
                            100% {
                              transform: translateX(0);
                            }
                            10%,
                            30%,
                            50%,
                            70%,
                            90% {
                              transform: translateX(-2px);
                            }
                            20%,
                            40%,
                            60%,
                            80% {
                              transform: translateX(2px);
                            }
                          }
                          .animate-shake {
                            animation: shake 2s ease-in-out infinite;
                          }
                          .animate-shake:hover {
                            animation: none;
                          }
                        `}</style>
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
                  <button
                    onClick={() =>
                      window.open(
                        "https://superprofile.bio/e/2dayTarotworkshop",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group animate-shake animate-pulse hover:animate-none"
                  >
                    <span className="mr-3">
                      Apply for Internship Opportunities
                    </span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }
                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }
                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            {/* Bonuses Section */}
            <div className="bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-6 shadow-lg mb-4 text-white">
              <h3 className="text-4xl font-bold text-center">
                Exclusive Bonuses – Only in Our Course!
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="h-80 overflow-hidden">
                      <img
                        src={bonus.image}
                        alt={bonus.title}
                        className="w-full h-full object-contain"
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
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                      <div className="flex items-center mb-4">
                        <Gem className="h-6 w-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Course Value
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        Rs 4,495
                      </div>
                      <p className="text-gray-500 mt-2">
                        Comprehensive tarot mastery program
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                      <div className="flex items-center mb-4">
                        <Gift className="h-6 w-6 text-indigo-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Bonus Value
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        Rs 4,296
                      </div>
                      <p className="text-gray-500 mt-2">
                        Exclusive materials & resources
                      </p>
                    </div>

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
                    <button
                      onClick={() =>
                        window.open(
                          "https://superprofile.bio/e/2dayTarotworkshop",
                          "_blank"
                        )
                      }
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 animate-shake animate-pulse hover:animate-none"
                    >
                      <span className="mr-2">Register Now for Just Rs 199</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>

                    <style jsx>{`
                      @keyframes shake {
                        0%,
                        100% {
                          transform: translateX(0);
                        }
                        10%,
                        30%,
                        50%,
                        70%,
                        90% {
                          transform: translateX(-2px);
                        }
                        20%,
                        40%,
                        60%,
                        80% {
                          transform: translateX(2px);
                        }
                      }
                      .animate-shake {
                        animation: shake 2s ease-in-out infinite;
                      }
                      .animate-shake:hover {
                        animation: none;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center bg-white p-3 rounded-full shadow-md mb-6">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-3">
                    Our Happy Students Reviews
                  </h1>
                  <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                    Hear what our students have to say about their
                    transformative journey
                  </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative xs: hidden md:block">
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={1000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                        <button
                          onClick={onClickHandler}
                          title={label}
                          className="absolute left-10 top-1/2 z-10 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-purple-100 transition-all transform hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            ></path>
                          </svg>
                        </button>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                        <button
                          onClick={onClickHandler}
                          title={label}
                          className="absolute right-10 top-1/2 z-10 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-purple-100 transition-all transform hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </button>
                      )
                    }
                    renderIndicator={(
                      onClickHandler,
                      isSelected,
                      index,
                      label
                    ) => (
                      <button
                        onClick={onClickHandler}
                        title={label}
                        className={`mx-1.5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isSelected ? "bg-purple-600 w-8" : "bg-purple-300"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                      />
                    )}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="px-4 py-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                          {/* Student Image */}
                          <div className="p-6 flex justify-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                            </div>
                          </div>

                          {/* Testimonial Content */}
                          <div className="px-6 pb-6 flex-grow">
                            <div className="flex items-center justify-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-10 h-10 ${
                                    i < testimonial.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>

                            <div className="text-center mb-4">
                              <h3 className="text-xl font-bold text-purple-900">
                                {testimonial.name}
                              </h3>
                              {testimonial.title && (
                                <p className="text-sm text-purple-600 mt-1">
                                  {testimonial.title}
                                </p>
                              )}
                            </div>

                            <div className="relative">
                              <svg
                                className="absolute -top-6 -left-2 w-8 h-8 text-purple-100"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                              <p className="text-gray-700 italic px-6 py-2">
                                {testimonial.content}
                              </p>
                              <svg
                                className="absolute -bottom-6 -right-2 w-8 h-8 text-purple-100"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>

                          {/* Testimonial Footer */}
                          <div className="bg-purple-50 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="w-5 h-5 text-purple-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                              </svg>
                              <span className="text-sm font-medium text-purple-700">
                                Tarot Transformation
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="relative md:hidden">
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={1000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={100}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                        <button
                          onClick={onClickHandler}
                          title={label}
                          className="absolute left-10 top-1/2 z-10 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-purple-100 transition-all transform hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            ></path>
                          </svg>
                        </button>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                        <button
                          onClick={onClickHandler}
                          title={label}
                          className="absolute right-10 top-1/2 z-10 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-purple-100 transition-all transform hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </button>
                      )
                    }
                    renderIndicator={(
                      onClickHandler,
                      isSelected,
                      index,
                      label
                    ) => (
                      <button
                        onClick={onClickHandler}
                        title={label}
                        className={`mx-1.5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isSelected ? "bg-purple-600 w-8" : "bg-purple-300"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                      />
                    )}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="px-4 py-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                          {/* Student Image */}
                          <div className="p-6 flex justify-center">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                            </div>
                          </div>

                          {/* Testimonial Content */}
                          <div className="px-6 pb-6 flex-grow">
                            <div className="flex items-center justify-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-10 h-10 ${
                                    i < testimonial.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>

                            <div className="text-center mb-4">
                              <h3 className="text-xl font-bold text-purple-900">
                                {testimonial.name}
                              </h3>
                              {testimonial.title && (
                                <p className="text-sm text-purple-600 mt-1">
                                  {testimonial.title}
                                </p>
                              )}
                            </div>

                            <div className="relative">
                              <svg
                                className="absolute -top-6 -left-2 w-8 h-8 text-purple-100"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                              <p className="text-gray-700 italic px-6 py-2">
                                {testimonial.content}
                              </p>
                              <svg
                                className="absolute -bottom-6 -right-2 w-8 h-8 text-purple-100"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>

                          {/* Testimonial Footer */}
                          <div className="bg-purple-50 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="w-5 h-5 text-purple-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                              </svg>
                              <span className="text-sm font-medium text-purple-700">
                                Tarot Transformation
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://superprofile.bio/e/2daypraticaltarotwebnair",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-xl animate-shake animate-pulse hover:animate-none"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                    Join Our Next Workshop
                  </button>

                  <style jsx>{`
                    @keyframes shake {
                      0%,
                      100% {
                        transform: translateX(0);
                      }
                      10%,
                      30%,
                      50%,
                      70%,
                      90% {
                        transform: translateX(-2px);
                      }
                      20%,
                      40%,
                      60%,
                      80% {
                        transform: translateX(2px);
                      }
                    }
                    .animate-shake {
                      animation: shake 2s ease-in-out infinite;
                    }
                    .animate-shake:hover {
                      animation: none;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            <div className="video-gallery-container relative px-4 py-4 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center bg-white p-3 rounded-full shadow-md mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-3">
                  Our Happy Students Success Stories
                </h1>
                <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                  Hear what our students have to say about their transformative
                  journey
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTestimonials.map((testimonial, index) => {
                  const isActive = activeVideoIndex === index;
                  return (
                    <div
                      key={index}
                      className="focus:outline-none"
                      style={{
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                        <div
                          className="relative w-full h-64 md:h-80 lg:h-96 cursor-pointer"
                          onClick={() => handleVideoClick(index)}
                        >
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            className="w-full h-full object-cover"
                            playsInline
                            muted={!isActive}
                            loop
                            preload="auto"
                            onEnded={() => handleVideoEnded(index)}
                            onCanPlay={() => {
                              if (isActive && isPlaying) {
                                videoRefs.current[index]?.play();
                              }
                            }}
                          >
                            <source src={testimonial.video} type="video/mp4" />
                            Your browser does not support videos.
                          </video>

                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                              {isActive && isPlaying ? (
                                <svg
                                  className="w-8 h-8 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <rect x="6" y="4" width="4" height="12" />
                                  <rect x="12" y="4" width="4" height="12" />
                                </svg>
                              ) : (
                                <svg
                                  className="w-8 h-8 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.3 2.8L16 10l-9.7 7.2V2.8z" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            <div className="bg-gradient-to-r from-violet-600 to-amber-600 rounded-3xl p-8 shadow-xl mb-8 text-center animate-pulse">
              <h3 className="text-2xl font-bold text-white mb-3 animate-bounce">
                Ready to Start Your Tarot Journey?
              </h3>
              <p className="text-white/90 mb-6">
                Join thousands who've transformed their lives through tarot
              </p>

              <div className="space-y-4 max-w-md mx-auto">
                <button
                  onClick={() =>
                    window.open(
                      "https://superprofile.bio/e/2dayTarotworkshop",
                      "_blank"
                    )
                  }
                  className="w-full bg-white text-violet-700 hover:bg-gray-100 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl animate-shake hover:animate-none"
                >
                  <Play className="w-5 h-5" />
                  Enroll Now
                </button>

                <div className="text-white/80 text-sm flex items-center justify-center gap-2 animate-pulse">
                  <TimeIcon className="w-4 h-4 animate-spin" />
                  <span className="animate-shake">Limited seats available</span>
                </div>
              </div>

              <style jsx>{`
                @keyframes shake {
                  0%,
                  100% {
                    transform: translateX(0);
                  }
                  10%,
                  30%,
                  50%,
                  70%,
                  90% {
                    transform: translateX(-2px);
                  }
                  20%,
                  40%,
                  60%,
                  80% {
                    transform: translateX(2px);
                  }
                }

                .animate-shake {
                  animation: shake 2s ease-in-out infinite;
                }

                .animate-shake:hover {
                  animation: none;
                }
              `}</style>
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
                        className="flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors animate-shake animate-pulse hover:animate-none"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        WhatsApp Us
                      </a>
                      <a
                        href="https://instagram.com/divineliightt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg transition-colors animate-shake animate-pulse hover:animate-none"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Follow on Instagram
                      </a>

                      <style jsx>{`
                        @keyframes shake {
                          0%,
                          100% {
                            transform: translateX(0);
                          }
                          10%,
                          30%,
                          50%,
                          70%,
                          90% {
                            transform: translateX(-2px);
                          }
                          20%,
                          40%,
                          60%,
                          80% {
                            transform: translateX(2px);
                          }
                        }
                        .animate-shake {
                          animation: shake 2s ease-in-out infinite;
                        }
                        .animate-shake:hover {
                          animation: none;
                        }
                      `}</style>
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
                      "https://superprofile.bio/e/2dayTarotworkshop",
                      "_blank"
                    )
                  }
                  className="flex items-center justify-center px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-md shadow-lg hover:shadow-xl transition-all hover:from-amber-300 hover:to-amber-400 animate-shake animate-pulse hover:animate-none"
                >
                  <span className="mr-2">Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <style jsx>{`
                  @keyframes shake {
                    0%,
                    100% {
                      transform: translateX(0);
                    }
                    10%,
                    30%,
                    50%,
                    70%,
                    90% {
                      transform: translateX(-2px);
                    }
                    20%,
                    40%,
                    60%,
                    80% {
                      transform: translateX(2px);
                    }
                  }
                  .animate-shake {
                    animation: shake 2s ease-in-out infinite;
                  }
                  .animate-shake:hover {
                    animation: none;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotWorkshopScreen;
