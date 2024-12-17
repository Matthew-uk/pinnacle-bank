import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  { name: "Alex Johnson", role: "Small Business Owner", quote: "Pinnacle Bank has transformed how I manage my business finances. Their tools are intuitive and powerful, and the customer service is top-notch." },
  { name: "Sarah Lee", role: "Freelance Designer", quote: "I love the Pinnacle Bank! It's so easy to keep track of my expenses and invoices on the go. The real-time notifications give me peace of mind." },
  { name: "Michael Chen", role: "Recent Graduate", quote: "As a young professional, I appreciate how Pinnacle Bank helps me build my financial literacy and savings. The educational resources are incredibly helpful." },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <CardContent>
                <div className="flex items-center mb-4 cursor-text">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
