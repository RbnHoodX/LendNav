
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-lendnow-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's get you funded</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to take your business to the next level? Our funding experts are standing by to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-lendnow-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
