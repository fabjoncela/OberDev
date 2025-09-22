import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-8 md:py-12 bg-primary text-white relative overflow-hidden flex items-center justify-center min-h-[40vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative z-10 flex items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to
            <br />
            build together?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-medium px-8"
            >
              BUILD A PROJECT WITH US
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 bg-transparent"
            >
              BUILD A CAREER WITH US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
