import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerSections = [
  {
    title: "Products",
    links: ["Checking", "Savings", "Credit Cards", "Loans", "Mortgages", "Investments"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Security", "Terms of Service", "Privacy Policy"]
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQs", "Branch Locator", "ATM Finder", "Community Support"]
  },
  {
    title: "Resources",
    links: ["Blog", "Financial Calculators", "Market Updates", "Learning Center", "Mobile App", "Accessibility"]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-blue-300 transition duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; 2024 Pinnacle Bank. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-blue-300 transition duration-200">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300 transition duration-200">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300 transition duration-200">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300 transition duration-200">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
