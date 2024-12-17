import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and experience the Pinnacle Bank difference today. Open your account in minutes and start your journey to financial success.</p>
        <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
          Open Your Account Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
