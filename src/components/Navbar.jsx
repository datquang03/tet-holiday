import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../assets/Beautiful In White.mp3";

const Navbar = () => {
  const audioRef = useRef(null);

  const [volume, setVolume] = useState(0.6); // volume mặc định
  const [prevVolume, setPrevVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(true);

  // Khởi tạo audio
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
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
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.muted = false;
          audioRef.current.play().catch(() => {});
        }
      }, 100);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.muted = true;
        }
      }, 100);
    }
  };

  return (
    <>
      {showAudioModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
          <div className="bg-[#231526] rounded-2xl p-8 flex flex-col items-center shadow-2xl max-w-xs w-full">
            <span className="text-pink-400 text-4xl mb-4 animate-glow">💗</span>
            <h2 className="text-white text-lg font-bold mb-2 text-center">Bạn có muốn nghe nhạc nền không?</h2>
            <p className="text-gray-300 text-sm mb-6 text-center">Nhạc nền sẽ phát tự động nếu bạn chọn "Có".</p>
            <div className="flex gap-4 w-full justify-center">
              <button
                className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
                onClick={() => {
                  setIsMuted(false);
                  setShowAudioModal(false);
                  setVolume(0.5);
                  setTimeout(() => {
                    if (audioRef.current) {
                      audioRef.current.muted = false;
                      audioRef.current.volume = 0.5;
                      audioRef.current.play().catch(() => {});
                    }
                  }, 100);
                }}
              >Có</button>
              <button
                className="px-6 py-2 rounded-full bg-gray-600 text-white font-semibold shadow hover:bg-gray-700 transition"
                onClick={() => {
                  setIsMuted(true);
                  setShowAudioModal(false);
                  setVolume(0);
                  setTimeout(() => {
                    if (audioRef.current) {
                      audioRef.current.muted = true;
                    }
                  }, 100);
                }}
              >Không</button>
            </div>
          </div>
        </div>
      )}
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
    </>
  );
};

export default Navbar;
