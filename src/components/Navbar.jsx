import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../assets/Beautiful In White.mp3";

const Navbar = () => {
  const audioRef = useRef(null);

  const [volume, setVolume] = useState(0.6); // volume mặc định
  const [prevVolume, setPrevVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  // Khởi tạo audio
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    audioRef.current.play().catch(() => {});

    // Tự động phát nhạc khi user có tương tác đầu tiên
    const tryPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        window.removeEventListener('click', tryPlay);
      }
    };
    window.addEventListener('click', tryPlay);
    return () => window.removeEventListener('click', tryPlay);
  }, []);

  // Khi volume thay đổi
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;

    if (volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }, [volume]);

  const toggleMute = () => {
    if (isMuted || volume === 0) {
      setVolume(prevVolume || 0.6);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between bg-black/80 shadow-lg rounded-b-2xl px-10 py-2 h-16 backdrop-blur-md">
      {/* Logo */}
      <div
        className="flex items-center font-bold text-white text-lg tracking-wide bg-gradient-to-r from-pink-900/60 via-pink-700/30 to-pink-900/60 rounded-xl px-4 py-1 shadow-lg cursor-pointer select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-pink-500 text-xl mr-2 animate-pulse drop-shadow-[0_0_8px_rgba(255,29,164,0.7)]">
          <span className="animate-glow inline-block">💗</span>
        </span>
        <span className="font-extrabold text-base md:text-lg">
          Dat&Kieu
        </span>
      </div>


      {/* Volume Control */}
      <div className="relative flex items-center">
        {/* Volume icon */}
        <button
          onClick={toggleMute}
          onMouseEnter={() => setShowSlider(true)}
          onMouseLeave={() => setShowSlider(false)}
          className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition hover:bg-pink-500/20"
        >
          {isMuted || volume === 0 ? (
            <FaVolumeMute className="text-pink-500 text-lg" />
          ) : (
            <FaVolumeUp className="text-pink-500 text-lg" />
          )}
        </button>

        {/* Vertical slider */}
        {showSlider && (
          <div
            onMouseEnter={() => setShowSlider(true)}
            onMouseLeave={() => setShowSlider(false)}
            className="absolute bottom-14 right-1 flex items-center justify-center w-8 h-32 bg-black/90 rounded-full shadow-xl border border-pink-500/20"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-slider"
            />
          </div>
        )}

        {/* Audio */}
        <audio ref={audioRef} src={music} loop autoPlay style={{ display: 'none' }} />
      </div>
    </nav>
  );
};

export default Navbar;
