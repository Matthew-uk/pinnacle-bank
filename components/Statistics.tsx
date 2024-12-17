'use client'

import { useState, useEffect, useRef } from 'react'
import { Users, Building, Calendar, Award } from 'lucide-react'

const stats = [
  { icon: <Users className="h-8 w-8 text-blue-500" />, value: 50000, label: "Happy Customers", prefix: "+" },
  { icon: <Calendar className="h-8 w-8 text-green-500" />, value: 25, label: "Years in Banking", suffix: "+" },
  { icon: <Building className="h-8 w-8 text-purple-500" />, value: 100, label: "Branches Nationwide", suffix: "+" },
  { icon: <Award className="h-8 w-8 text-yellow-500" />, value: 1000, label: "Successful Projects", prefix: "+" },
]

export function Statistics() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                {inView ? (
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  <span>{stat.prefix || ''}{0}{stat.suffix || ''}</span>
                )}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpInterface {
    end: any;
    duration?: number;
    prefix?: string;
    suffix?: string;
}
const CountUp:React.FC<CountUpInterface> = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [end, duration])

  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
