// src/pages/Homepage.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Navbar from "../components/Navbar";
import {
  FaHeart,
  FaCamera,
  FaHourglass,
  FaBook,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdReportProblem } from "react-icons/md";

// Import ảnh của bạn (điều chỉnh đường dẫn nếu cần)
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const getTimeDiff = (fromDate) => {
  const now = new Date();
  let diff = Math.floor((now - fromDate) / 1000);
  const days = Math.floor(diff / 86400);
  diff -= days * 86400;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;
  return { days, hours, minutes, seconds };
};
const timelineItem = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const galleryImages = [
  { src: image1, title: "Hai đứa cute vl", desc: '"Ở đâu đố biết."' },
  {
    src: image2,
    title: "Lần đầu thấy hoa anh đào ngoài đời thực",
    desc: '"Happy."',
  },
  {
    src: image3,
    title: "Ẻm xinh",
    desc: '"Không có ý gì đâu. Anh thấy tấm này xinh."',
  },
  {
    src: image4,
    title: "Đi ăn với cả gia đình ẻm",
    desc: '"Sashimi nhìn rất ngon nhưng ăn sống lại rất sợ."',
  },
  {
    src: image5,
    title: "Đón sinh nhật em",
    desc: '"Quả là một kỉ niệm đáng nhớ, nhưng nó sẽ trọn vẹn hơn nếu anh làm tốt."',
  },
  {
    src: image6,
    title: "New year New Us",
    desc: '"Hoa thì anh mượn nhưng em là của anh "',
  },
  {
    src: image7,
    title: "Ẻm đẹp",
    desc: "Not gonna lie, tấm này nhìn vừa xinh vừa hót",
  },
  {
    src: image8,
    title: "Giáng sinh",
    desc: "Lần đầu đi nhà thờ Con Gà, lần này gặp nhiều khó khăn...",
  },
  {
    src: image9,
    title: "Ảnh dìm",
    desc: "Dù là dìm nhưng em vẫn xinh. Sợ thật",
  },
  {
    src: image10,
    title: "Đồ ăn thái",
    desc: "Bữa này ảnh dào, ảnh dắt i ăng ngon",
  },
  {
    src: image11,
    title: "Lần đầu về nhà em",
    desc: "Hơi bần, hơi khó đi nhưng vuii",
  },
  {
    src: image12,
    title: "First pic",
    desc: "Có lẽ đây là bức ảnh đầu tiên hai đứa chụp chung...",
  },
  {
    src: image13,
    title: "Tập làm Chad",
    desc: "Hong bít sao nữa thấy tấm này anh làm đẹp vl",
  },
  {
    src: image14,
    title: "Đi mall",
    desc: "Biết em đau bụng, anh có ý mua đồ tẩm bổ mà uống được nửa ly anh làm đổ hết",
  },
  {
    src: image15,
    title: "Cute",
    desc: "Khúc này hình như mới bị giận mới làm lành hay gì nè.",
  },
  {
    src: image16,
    title: "Tấm này xinh vl",
    desc: "Tua lại một tí xíu, để làm rõ. Tấm này là do anh chụp nha",
  },
];

const Homepage = () => {
  const [counter, setCounter] = useState(() =>
    getTimeDiff(new Date(2025, 10, 9, 0, 0, 0))
  );
  const [showCount, setShowCount] = useState(6);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getTimeDiff(new Date(2025, 10, 9, 0, 0, 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0d0512] to-black text-white font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <motion.main
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0">
          <img
            src={image2}
            alt="background love"
            className="w-full h-full object-cover brightness-[0.65] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.4 }}
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 backdrop-blur-md border border-pink-400/30 text-pink-200 text-sm md:text-base tracking-widest font-medium"
          >
            HAPPY NEW YEAR 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.3 }}
            className="mt-8 text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight"
          >
            Anh <span className="text-pink-500">&</span> Em
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.5 }}
            className="mt-10 text-lg sm:text-xl md:text-2xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed"
          >
            Xin chào, anh chưa thể tặng quà gì. Nhưng đây là những gì anh muốn bày tỏ gửi gắm đến em
          </motion.p>
        </div>
      </motion.main>

      {/* COUNTER SECTION */}
      <motion.section
        className="py-16 md:py-24 relative"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0714] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Thời gian bên nhau
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Mỗi giây trôi qua đều là một món quà
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.9 }}
                className="bg-gradient-to-br from-[#1c1126] to-[#140c1a] border border-pink-900/40 rounded-2xl p-6 md:p-8 shadow-2xl shadow-pink-900/30 backdrop-blur-sm"
              >
                <div className="text-5xl md:text-7xl font-black text-pink-400 tracking-tighter">
                  {String(counter[unit]).padStart(2, "0")}
                </div>
                <div className="mt-3 text-sm md:text-base tracking-widest text-pink-300/80 uppercase font-medium">
                  {unit === "days"
                    ? "NGÀY"
                    : unit === "hours"
                    ? "GIỜ"
                    : unit === "minutes"
                    ? "PHÚT"
                    : "GIÂY"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* TIMELINE */}
      <section className="py-8 md:py-20 bg-[#140c16]">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-pink-400 text-2xl">✦</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mt-2">
            Timeline Tình Yêu
          </h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Những cột mốc không thể nào quên
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto px-2 md:px-4">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-pink-900/60 to-pink-500" />
          <div className="flex flex-col gap-10 md:gap-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12 text-right flex flex-col items-end">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Ngày biết nhau lần đầu tiên
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs ml-auto text-sm sm:text-base">
                  Chỉ có toy là ấn tượng em này hoi. Chứ em này tính lãng quên
                  toy gòi !
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  THÁNG 08, 2025
                </span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <FaHeart className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12"></div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <MdReportProblem className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12 flex flex-col items-start">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Chông gai đầu tiên
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs text-sm sm:text-base">
                  Em này ẻm về nhà. Sau đó thì ẻm đang bị căng thẳng nhiều thứ
                  và chưa sẵn sàng cho một mối quan hệ nên toy đích thân phải về
                  đó kiếm ẻm để trao cho ẻm thương nhớ chứ không là ẻm thực tập
                  ở dưới đó ở lâu hơn là quên toy luôn rồi.
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  THÁNG 09, 2025
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12 text-right flex flex-col items-end">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Kỉ niệm đáng nhớ
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs ml-auto text-sm sm:text-base">
                  Lúc này là anh căn căn một ngày đẹp trời cuối tuần. Cảm thấy
                  mình tìm hiểu nhau cũng được 3 tháng rồi nên là toy cũng tính
                  toán quyết định là tỏ tình để cho hai đứa mang mắc người yêu
                  với nhau. Bắt đầu cuộc hành trình mới với hai con người tập
                  làm người lớn !
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  9 THÁNG 11, 2025
                </span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <FaCamera className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12"></div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <FaHourglass className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12 flex flex-col items-start">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Nhiều chông gai khác và lời nói thay đổi
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs text-sm sm:text-base">
                  Tới thời điểm lúc này thì hai đứa cũng đã trải qua nhiều tình
                  huống khó khăn rồi. Như cũng như các cặp người yêu khác thôi,
                  cũng gặp những khó khăn rồi cố gắng tiến lên vượt qua. Mà chủ
                  yếu các vấn đề thường là do anh gây ra không chứ 😅. Biết lỗi
                  lắm nhưng tính của anh nó còn hơi vô tư và trẻ con một chút
                  nên sau khi được em nhắc nhở thì anh vẫn muốn lắng nghe,
                  trưởng thành hơn để hai đứa tâm đầu hợp ý với nhau hơn và
                  không làm em buồn nhiều nữa
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  THÁNG 1, 2026
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12 text-right flex flex-col items-end">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Sự cố ngày sinh nhật
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs ml-auto text-sm sm:text-base">
                  Đây là chuyện khiến anh áy náy và rất nhạy cảm với em trong
                  khoảng thời gian gần đây. Nó khiến em buồn và thất vọng rất
                  nhiều. Lúc đó anh có thể thấy qua được nụ cười sượng của em
                  nhưng lúc đó chính anh cũng bất lực nữa. Anh tự tính toán mọi
                  thứ khiến cho anh cảm thấy rất khó khăn, anh còn suy nghĩ việc
                  anh hủy kèo về quê để để dành tiền và bù đắp cho lần tới khi
                  gặp lại. Nhưng mà anh thích em qua anh muốn đi nên anh lại bày
                  ra một trường hợp khác là anh sẽ canh tính toán chi tiêu số
                  tiền ít ỏi đó để chi tiêu cho những thứ cần thiết. Nhưng chỉ
                  cần chi vào một kế hoạch khác là coi như anh đi đời luôn cơ.
                  Với có một cái nữa là anh tự ti về việc tặng em những món quà
                  có giá trị thấp trong khi lúc này anh chưa được đi làm ra tiền
                  và bố mẹ anh cũng tạm dừng chu cấp anh rồi. Bởi thế thêm cái
                  vụ biếu quà tết lần đầu tiên trong đời này làm cho anh rất khó
                  đoán
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  THÁNG 2, 2026
                </span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <FaBook className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={timelineItem}
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex"
            >
              <div className="w-1/2 pr-12"></div>
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-pink-500 border-4 border-[#1a0e18] w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center">
                  <SlCalender className="text-white text-xl sm:text-2xl" />
                </div>
              </div>
              <div className="w-1/2 pl-12 flex flex-col items-start">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  Giáng sinh và năm mới đầu tiên bên nhaus
                </h3>
                <p className="text-gray-300 mt-1 max-w-xs text-sm sm:text-base">
                  Anh để ý tụi mình hay gặp chuyện vào những dịp lễ tết quan
                  trọng. Nên là anh cũng muốn cố gắng để làm cho những dịp lễ
                  tết này trở nên đặc biệt hơn với em. Anh cũng muốn tạo ra
                  những kỉ niệm đẹp cho hai đứa mình vào những dịp này. Anh biết
                  là anh còn nhiều thiếu sót và chưa làm được nhiều thứ như anh
                  mong muốn để khiến em vui nhưng anh sẽ cố gắng hơn nữa để làm
                  cho em hạnh phúc hơn nữa trong những dịp lễ sau này và cả
                  những ngày thường nữa nhé !
                </p>
                <span className="mt-3 text-pink-400 text-xs tracking-widest font-semibold">
                  16 THÁNG 2, 2026 (Mùng 1 tết)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-b from-[#0f0714] to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Album Kỷ Niệm
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Di chuột để xem chi tiết • Nhấn để phóng to
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {galleryImages.slice(0, showCount).map((img, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.06}
                transitionSpeed={450}
                gyroscope={true}
              >
                <motion.div
                  className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-black/70 cursor-pointer bg-gradient-to-b from-[#1e1322] to-[#120a18] border border-pink-900/30"
                  onClick={() => setFullscreenImg(img.src)}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: idx * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out gap-4 flex flex-col">
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                        {img.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 ring-2 ring-pink-500/0 group-hover:ring-pink-500/50 group-hover:ring-offset-4 group-hover:ring-offset-black transition-all duration-700 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>

          {showCount < galleryImages.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setShowCount((c) => c + 8)}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-lg shadow-xl shadow-pink-900/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Xem thêm kỷ niệm
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {fullscreenImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4"
            onClick={() => setFullscreenImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 180 }}
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white p-2 rounded-full transition-colors shadow-lg bg-transparent"
                onClick={() => setFullscreenImg(null)}
              >
                <FaTimes size={28} />
              </button>
              <img
                src={fullscreenImg}
                alt="fullscreen memory"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {galleryImages.find(img => img.src === fullscreenImg)?.title}
                </div>
                <div className="text-pink-200 text-base md:text-lg">
                  {galleryImages.find(img => img.src === fullscreenImg)?.desc}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LETTER SECTION */}
      <motion.section
        className="py-24 md:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-pink-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {!letterOpen ? (
            <motion.div
              className="inline-flex flex-col items-center cursor-pointer group"
              onClick={() => setLetterOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <FaEnvelope className="text-9xl md:text-[12rem] text-pink-500/80 group-hover:text-pink-400 transition-colors duration-700 drop-shadow-2xl" />
                <motion.div
                  className="absolute inset-0 bg-pink-500/30 rounded-full blur-3xl -z-10"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="mt-8 text-2xl md:text-3xl font-medium text-pink-300 group-hover:text-pink-200 transition-colors">
                Nhấn để mở thư của anh...
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#1a0f22] via-[#140c1a] to-[#0c0512] rounded-3xl p-10 md:p-16 shadow-2xl shadow-pink-900/50 border border-pink-800/40 relative overflow-hidden"
            >
              {/* floating glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-1500" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-12 text-center">
                  Gửi Phương Kiều của anh
                </h2>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.6 },
                    },
                  }}
                  className="space-y-8 md:space-y-10 text-lg md:text-2xl leading-relaxed text-gray-200/90 font-light text-center md:text-left"
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Cảm ơn em đã xuất hiện và làm cho cuộc sống của anh trở nên
                    rực rỡ hơn theo cách khác tốt đẹp hơn. Từng ngày bên em là
                    một món quà vô giá mà anh luôn trân trọng.
                  </motion.p>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Dù chúng ta đã đi qua không ít khó khăn và thử thách, anh
                    mong rằng tụi mình sẽ vượt qua mọi khó khăn và đến được đích đến cuối cùng.
                  </motion.p>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Bước sang năm mới, anh mong em luôn mạnh khỏe, bình an, giữ
                    được nụ cười mà anh yêu nhất, và tiếp tục làm người iu của anh – dịu
                    dàng, ấm áp và mãi dễ thưn.
                  </motion.p>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    Anh cũng xin gửi lời chúc chân thành nhất đến bố mẹ và anh
                    Long. Chúc mọi người luôn dồi dào sức khỏe, an khang, hạnh
                    phúc, và tràn đầy tiếng cười trong ân sủng của Chúa.
                  </motion.p>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="pt-10 flex items-center justify-center gap-4 text-3xl"
                  >
                    <FaHeart className="text-pink-500 animate-pulse" />
                    <span className="font-medium text-pink-300">Đạt</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* SCROLL TO TOP */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 bottom-8 z-50 cursor-pointer bg-gradient-to-br from-pink-600 to-purple-600 text-white p-5 rounded-full shadow-2xl shadow-pink-900/60 hover:scale-110 transition-all duration-300"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default Homepage;
