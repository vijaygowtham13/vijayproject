'use client'

export default function TestimonialsSection() {
  const testimonials = [
    [
      {
        text: "We never realised the power of paid advertising until we found Conversion. It's doubled our revenue in just a few months, absolutely incredible.",
        author: "Amber Staynings",
        title: "CEO at Hurricane HL Ltd",
      },
      {
        text: "AcquisitionX's social media expertise helped us go viral on LinkedIn and double our inbound leads within weeks.",
        author: "Syed Sikandar",
        title: "Sales Manager",
      },
    ],
    [
      {
        text: "Suprava and her team secured 100+ webinar attendees in 3 days without ads, resulting in 5 new leads. Grateful for their support!",
        author: "Ted Fluck",
        title: "IGTD Philips",
      },
      {
        text: "Suprava and her team revolutionized our marketing efforts, generating 7,000 leads and doubling demo bookings.",
        author: "Volodymyr Dybenko",
        title: "CEO at Salee",
      },
    ],
    [
      {
        text: "Thanks to Divyanshi's social strategy, our Instagram and LinkedIn saw 50,000+ views. Incredible visibility boost.",
        author: "Maya Schmid",
        title: "Change Management Consultant",
      },
      {
        text: "Suprava and her team at Ogilvy provided incredible copywriting support with amazing attention to detail and creativity.",
        author: "Helge Hoffmann",
        title: "Creative Director at Ogilvy",
      },
    ],
  ]

  return (
    <div className="bg-black text-white py-0 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
        What our clients say
      </h2>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((column, colIdx) => (
          <div
            key={colIdx}
            className="overflow-hidden relative h-[300px]"
          >
            <div
              className="flex flex-col gap-6"
              style={{
                animation: `${colIdx === 1 ? 'scroll-up' : 'scroll-down'} 12s linear infinite`,
              }}
            >
              {[...column, ...column].map((item, i) => (
                <div
                  key={`desktop-${colIdx}-${i}`}
                  className="border border-white/10 p-5 rounded-2xl backdrop-blur-md bg-white/5"
                >
                  <p className="text-sm text-white/90 mb-4">{item.text}</p>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-xs text-white/60">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-12">
        {testimonials.map((row, rowIdx) => (
          <div key={rowIdx} className="overflow-hidden w-full">
            <div
              className="flex gap-6 w-max"
              style={{
                animation: `${rowIdx === 1 ? 'scroll-right' : 'scroll-left'} 14s linear infinite`,
              }}
            >
              {[...row, ...row].map((item, i) => (
                <div
                  key={`mobile-${rowIdx}-${i}`}
                  className="min-w-[250px] max-w-[300px] border border-white/10 p-5 rounded-2xl backdrop-blur-md bg-white/5"
                >
                  <p className="text-sm text-white/90 mb-4">{item.text}</p>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-xs text-white/60">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
