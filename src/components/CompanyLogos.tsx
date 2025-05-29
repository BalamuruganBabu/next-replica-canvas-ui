
const CompanyLogos = () => {
  const companies = [
    { name: "Netflix", logo: "N" },
    { name: "TikTok", logo: "T" },
    { name: "Uber", logo: "U" },
    { name: "Hulu", logo: "H" },
    { name: "Twitch", logo: "Tw" },
    { name: "Nike", logo: "✓" }
  ];

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 mb-12 text-lg">
          Trusted by the teams from around the world
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center group hover:bg-gray-700 transition-colors">
                <span className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
