import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const featuredCars = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-noAQQqZxQUXKUlKfZcGyc6SmYOaHbW.jpeg",
      title: "BMW M4 GTS",
      description: "Track-focused performance with distinctive orange accents"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(1)-Ofn4ZsV9xk0mPE96IRMAD1rXjKQN0y.jpeg",
      title: "BMW 5 Series M Sport",
      description: "Luxury meets sportiness in this executive sedan"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(2)-f3skU0PUiFEObtPoxUB9DwLkzYCFbT.jpeg",
      title: "BMW M4 Competition",
      description: "Aggressive styling with cutting-edge performance"
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to LuxuryCars</h1>
          <p className="text-xl mb-8">Find your dream car today</p>
          <Link 
            href="/contact" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src={car.image} 
                  alt={car.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
                <p className="text-muted-foreground mb-4">{car.description}</p>
                <Link href="/contact" className="text-primary hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}