import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function AppPromotion() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Bank Anytime, Anywhere</h2>
          <p className="text-xl mb-8">Download our mobile app and take control of your finances with just a few taps. Enjoy seamless banking experience on the go.</p>
          <div className="flex space-x-4">
            <Button className="bg-white hover:bg-gray-800 transition duration-300">
              <Image src="/media/app-store-2.png" className='h-auto w-max' alt="App Store" width={120} height={40} />
            </Button>
            <Button className="bg-black hover:bg-gray-800 transition duration-300 text-center" variant={"secondary"}>
              <Image src="/media/play-store.png" className='h-auto w-[30px]' alt="Google Play" width={120} height={40} />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <Image
            src="https://cdn.dribbble.com/userupload/13267222/file/original-0bc477bfa03f17842bbe09ac29a41093.png?resize=2048x1536&vertical=center"
            alt="Mobile App"
            width={300}
            height={500}
            className="mx-auto rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  )
}
