'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Main Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12 md:p-16">
          {/* Hello World Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
            Hello World
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Welcome to your beautiful Next.js application
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            This is a modern, responsive Hello World page built with Next.js 15, 
            Tailwind CSS, and beautiful gradients. Clean, simple, and ready for your next project.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Next.js 15</h3>
              <p className="text-blue-700 text-sm">
                Latest React framework with optimized performance
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">Tailwind CSS</h3>
              <p className="text-purple-700 text-sm">
                Utility-first styling for rapid development
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200/50">
              <h3 className="font-bold text-pink-900 mb-3 text-lg">Responsive</h3>
              <p className="text-pink-700 text-sm">
                Beautiful design that works on all devices
              </p>
            </div>
          </div>
          
          {/* Action Button */}
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
        
        {/* Footer */}
        <p className="text-gray-400 mt-8 text-sm">
          Built with ❤️ using Next.js and Tailwind CSS
        </p>
      </div>
    </div>
  )
}