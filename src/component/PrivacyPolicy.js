import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Shield, Lock, Globe, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({
    interpretation: false,
    dataCollection: false,
    dataUsage: false,
    dataSharing: false,
    dataSecurity: false,
    changes: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <Shield className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        {/* <p className="text-gray-600 flex items-center justify-center gap-2">
          <Lock className="w-4 h-4" />
          Last Updated: March 3, 2022
        </p> */}
      </header>

      {/* Introduction */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-700">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure 
          of Your information when You respond to our advertisements and tells You about Your privacy 
          rights and how the law protects You.
        </p>
      </section>

      {/* Main Content - Accordion Style */}
      <div className="space-y-4">
        {/* Interpretation Section */}
        <div className="border rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('interpretation')}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              Interpretation and Definitions
            </h2>
            {expandedSections.interpretation ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSections.interpretation && (
            <div className="p-4 border-t">
              <h3 className="font-medium mb-2">Interpretation</h3>
              <p className="text-gray-700 mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following 
                conditions. The following definitions shall have the same meaning regardless of whether they 
                appear in singular or in plural.
              </p>
              
              <h3 className="font-medium mb-2">Definitions</h3>
              <ul className="space-y-3">
                {[
                  {
                    term: "Company",
                    definition: "(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to DivineLiightt & Divine Crystals."
                  },
                  {
                    term: "Device",
                    definition: "means any device that can access the Service such as a computer, a cellphone or a digital tablet."
                  },
                  {
                    term: "Personal Data",
                    definition: "is any information that relates to an identified or identifiable individual."
                  },
                  {
                    term: "Service",
                    definition: "refers to the advertisement, website, or application."
                  }
                ].map((item, index) => (
                  <li key={index}>
                    <strong>{item.term}</strong>: {item.definition}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Data Collection Section */}
        <div className="border rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('dataCollection')}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              Collecting and Using Your Personal Data
            </h2>
            {expandedSections.dataCollection ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSections.dataCollection && (
            <div className="p-4 border-t space-y-4">
              <div>
                <h3 className="font-medium mb-2">Types of Data Collected</h3>
                <h4 className="font-medium text-gray-700 mb-2">Personal Data</h4>
                <p className="text-gray-700 mb-3">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable 
                  information that can be used to contact or identify You.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {['First name and last name', 'Email address', 'Phone number', 'Location details', 'Personal preferences'].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Data Usage Section */}
        <div className="border rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('dataUsage')}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              Use of Your Personal Data
            </h2>
            {expandedSections.dataUsage ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSections.dataUsage && (
            <div className="p-4 border-t">
              <p className="text-gray-700 mb-3">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {[
                  'To provide and maintain our Service',
                  'To manage Your Account',
                  'For the performance of a contract',
                  'To contact You',
                  'To provide You with news and offers',
                  'To manage Your requests',
                  'For business transfers',
                  'For other purposes like data analysis'
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Data Security Section */}
        <div className="border rounded-lg overflow-hidden">
          <button 
            onClick={() => toggleSection('dataSecurity')}
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-indigo-600" />
              Security of Your Personal Data
            </h2>
            {expandedSections.dataSecurity ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSections.dataSecurity && (
            <div className="p-4 border-t">
              <p className="text-gray-700">
                The security of Your Personal Data is important to Us, but remember that no method of transmission 
                over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially 
                acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact & Footer */}
      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Mail className="w-5 h-5 text-indigo-600" />
          Contact Us
        </h3>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, You can contact us via phonenumber at {' '}
          <a href="mailto:admin@psychicvisions.in" className="text-indigo-600 hover:underline">
          +91 99103 86064
          </a>
        </p>
      </section>

      <footer className="mt-8 pt-6 border-t text-sm text-gray-600">
        <p className="mb-2">Copyright 2023 - The DivineLiightt & Divine Crystals. All rights reserved.</p>
        <p className="mb-4">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT 
          endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        {/* <div className="flex flex-wrap gap-4">
          <Link to="/refund-policy" className="text-indigo-600 hover:underline">Refund Policy</Link>
          <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
          <Link to="/terms-conditions" className="text-indigo-600 hover:underline">Terms & Conditions</Link>
        </div> */}
      </footer>
    </div>
  );
};

export default PrivacyPolicy;