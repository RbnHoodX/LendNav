
const Commercial = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
            <div className="inline-flex items-center bg-lendnow-600 bg-opacity-90 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="bg-white text-lendnow-600 size-6 flex items-center justify-center rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              Nav Commercial
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our now! loans: Ready to fund your growth</h2>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                Access premium commercial funding solutions tailored for established businesses looking to expand operations, invest in equipment, or manage cash flow.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Simplified application process with minimal documentation",
                  "Dedicated funding specialist assigned to your account",
                  "Competitive rates with flexible terms and no hidden fees"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-lendnow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="bg-lendnow-gradient rounded-xl p-6 text-white mb-6">
                <h3 className="text-xl font-semibold mb-2">Premium Rates</h3>
                <p className="text-white text-opacity-90">Starting at</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">4.9</span>
                  <span className="text-xl ml-1">%</span>
                  <span className="ml-2 text-white text-opacity-90">APR</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Loan Amounts:</span>
                  <span className="font-medium">$50K - $5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Term Length:</span>
                  <span className="font-medium">1 - 10 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Time to Fund:</span>
                  <span className="font-medium">As fast as 3 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
