import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in">
            Banking Made Simple, Secure, and Smart
          </h1>
          <p className="text-xl mb-8 text-blue-100 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Experience the future of banking with Pinnacle Bank. Manage your money with ease and confidence, anytime, anywhere.
          </p>
          <div className="space-x-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
              Open an Account
            </Button>
            <Button variant="outline" className="text-blue-500 border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 rounded-full transition duration-300">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105"></div>
          <Image
            src="https://oriontrustbank.com/assets/img/hero/1.png"
            alt="Online Banking"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl relative z-10 transform -rotate-3"
          />
        </div>
      </div>
    </section>
  )
}
