
const GrowthAllies = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-lendnow-600 bg-opacity-30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>Growth Allies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Funding dreams, together.</h2>
            <p className="text-gray-300 text-lg mb-8">
              Since our founding, we've helped thousands of businesses access over $1 billion in funding. Our mission is to empower entrepreneurs with the capital they need to succeed.
            </p>
            
            <ul className="space-y-4">
              {[
                "Deep industry expertise across multiple sectors",
                "Dedicated account managers for every client",
                "Transparent terms with no hidden fees or surprises",
                "Ongoing support throughout the funding relationship"
              ].map((item, index) => (
                <li key={index} className="flex">
                  <svg className="h-6 w-6 text-lendnow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 inline-flex items-center bg-lendnow-gradient hover:bg-lendnow-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              About Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Funding team" 
                className="mb-8 rounded-xl shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lendnow-400">12+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lendnow-400">$1B+</div>
                  <div className="text-sm text-gray-400">Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lendnow-400">4.9</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/4540b4b9-d8cc-4166-a8d2-6df663e22ba5.png" 
                  alt="LendNow Logo" 
                  className="h-8 opacity-70"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lendnow-500 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lendnow-500 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAllies;
