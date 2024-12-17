import { Card, CardContent } from "@/components/ui/card"
import { Lock, Smartphone, CreditCard, PiggyBank, BarChart, Users } from 'lucide-react'

const features = [
  { icon: <Lock className="h-12 w-12 text-blue-900" />, title: "Bank-Grade Security", description: "Your money and data are protected by state-of-the-art security systems and encryption." },
  { icon: <Smartphone className="h-12 w-12 text-blue-900" />, title: "Mobile Banking", description: "Manage your accounts, make payments, and more from our award-winning mobile app." },
  { icon: <CreditCard className="h-12 w-12 text-blue-900" />, title: "Smart Cards", description: "Our credit and debit cards come with advanced features, rewards, and fraud protection." },
  { icon: <PiggyBank className="h-12 w-12 text-blue-900" />, title: "Savings Goals", description: "Set and track your savings goals with our intuitive tools and automated savings plans." },
  { icon: <BarChart className="h-12 w-12 text-blue-900" />, title: "Financial Insights", description: "Gain valuable insights into your spending habits and financial health with our analytics." },
  { icon: <Users className="h-12 w-12 text-blue-900" />, title: "24/7 Support", description: "Our dedicated support team is always ready to assist you with any questions or concerns." },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pinnacle Bank?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <CardContent>
                <div className="flex justify-center mb-4 transition-transform duration-300 hover:scale-110">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
