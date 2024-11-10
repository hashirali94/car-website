export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">LuxuryCars</h3>
              <p>Your premium car dealer since 1995</p>
            </div>
            <div>
              <p>&copy; 2023 LuxuryCars. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }