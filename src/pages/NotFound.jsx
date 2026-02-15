import React from 'react'
import image1 from "../assets/image1.jpg"
const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1a0e18] via-[#231526] to-[#1a0e18] overflow-hidden">
      {/* Floating hearts background */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className={`absolute left-[${Math.random()*100}%] animate-heart-float pointer-events-none select-none text-pink-400/30 text-2xl md:text-3xl`}
          style={{
            bottom: `-${Math.random()*20+5}%`,
            animationDelay: `${Math.random()*4}s`,
            animationDuration: `${Math.random()*4+6}s`,
          }}
        >
          ♥
        </span>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-[90px] sm:text-[120px] md:text-[160px] font-extrabold text-white/10 tracking-widest flex items-center justify-center relative">
          4
          <span className="mx-2 bg-pink-600/80 rounded-full flex items-center justify-center w-16 h-16 md:w-24 md:h-24 shadow-lg animate-glow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-lg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
          4
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-2 text-center drop-shadow-lg">
          Trang này lạc mất rồi...
        </h1>
        <p className="text-pink-100 italic text-center max-w-xl mb-6 text-sm md:text-base">
          "Giống như những mảnh ký ức vụn vỡ, nhưng tình yêu của chúng mình vẫn luôn tìm được đường về..."
        </p>
        <a
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-base shadow-lg hover:bg-pink-600 transition mb-8 animate-glow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-1">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Quay lại trang chủ
        </a>
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md">
          <img src={image1} alt="404" className="w-[320px] h-[180px] object-cover" />
        </div>
      </div>
      <footer className="w-full text-center text-xs text-gray-400 mt-10 mb-22 z-10 tracking-widest">
        MÃI MÃI MỘT TÌNH YÊU - 2024
      </footer>
    </div>
  )
}

export default NotFound
