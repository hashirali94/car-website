import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About LuxuryCars</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative h-[400px]">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-1arRo1lyOMzHoxGs1CB9uWx3uNzxHi.jpeg"
            alt="Our Showroom"
            fill
            className="rounded-lg shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            At LuxuryCars, we&apos;ve been providing premium automotive experiences since 1995. Our passion for excellence and commitment to customer satisfaction have made us a leader in the luxury car market.
          </p>
          <p className="text-lg mb-4">
            We offer a curated selection of the world&apos;s finest vehicles, each chosen for its exceptional quality, performance, and style. Our team of automotive experts is dedicated to helping you find the perfect car to match your lifestyle and preferences.
          </p>
          <p className="text-lg">
            Visit our state-of-the-art showroom to experience the epitome of automotive luxury. At LuxuryCars, we&apos;t just sell cars – we deliver dreams.
          </p>
        </div>
      </div>
    </div>
  )
}
