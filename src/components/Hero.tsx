
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lendnow-100 rounded-full filter blur-3xl opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lendnow-100 rounded-full filter blur-3xl opacity-30 -z-10 transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-lendnow-50 text-lendnow-600 rounded-full text-sm font-medium">
              Funding That's Creative & Quick for Your Business
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get the <span className="text-transparent bg-clip-text bg-lendnow-gradient">right funding</span> to grow your business
            </h1>
            <p className="text-lg text-gray-600">
              Looking for flexible, fast business financing without the complexity? LendNow provides tailored funding solutions to help your business thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-lendnow-gradient hover:bg-lendnow-600 text-white font-medium px-6 py-2 rounded-lg">
                Get Funded Today
              </Button>
              <Button variant="outline" className="border-lendnow-300 text-gray-700">
                View Solutions
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500 flex items-center">
                <svg className="w-4 h-4 mr-1 text-lendnow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Quick approval within 24 hours
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in animated-delay-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-lendnow-50 rounded-lg p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Business funding" 
                    className="w-full h-32 object-cover rounded-md mb-2" 
                  />
                  <h3 className="text-sm font-medium">Business Loans</h3>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Cash advance" 
                    className="w-full h-32 object-cover rounded-md mb-2" 
                  />
                  <h3 className="text-sm font-medium">Cash Advances</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Equipment financing" 
                    className="w-full h-32 object-cover rounded-md mb-2" 
                  />
                  <h3 className="text-sm font-medium">Equipment Financing</h3>
                </div>
                <div className="bg-lendnow-50 rounded-lg p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Line of credit" 
                    className="w-full h-32 object-cover rounded-md mb-2" 
                  />
                  <h3 className="text-sm font-medium">Lines of Credit</h3>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lendnow-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lendnow-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
