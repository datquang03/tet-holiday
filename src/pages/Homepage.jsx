import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaHeart, FaPlus, FaCamera, FaHourglass, FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdReportProblem } from "react-icons/md";
import image2 from "../assets/image2.jpg";
import image1 from "../assets/image1.jpg";
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const timelineItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const getTimeDiff = (fromDate) => {
  const now = new Date();
  let diff = Math.floor((now - fromDate) / 1000); // seconds
  const days = Math.floor(diff / (3600 * 24));
  diff -= days * 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;
  return { days, hours, minutes, seconds };
};

const Homepage = () => {
  const [counter, setCounter] = useState(() =>
    getTimeDiff(new Date(2025, 10, 9, 0, 0, 0))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getTimeDiff(new Date(2025, 10, 9, 0, 0, 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      desc: "Lần đầu đi nhà thờ Con Gà, lần này gặp nhiều khó khăn, ẻm không mún toi dìa nhưng hong hiểu sao anh vẫn được về hihi",
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
      desc: "Có lẻ đây là bức ảnh đầu tiên hai đứa chụp chung. Mặc dù lúc này chưa được thân lắm nên ẻm có lẽ cũng hơi sượng khi đứng cùng toi",
    },
    {
      src: image13,
      title: "Tập làm Chad",
      desc: "Hong bít sao nữa thấy tấm này anh làm đẹp vl",
    },
    {
      src: image14,
      title: "Đi mall",
      desc: "Biết em đau bụng, anh có ý mua đồ tẩm bổ, mà bổ kiểu gì em uống nửa ly anh làm đổ hết",
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

  const [showCount, setShowCount] = useState(6);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      {/* HERO */}
      <motion.main
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-2 sm:px-4"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0">
          <img
            src={image2}
            alt="bg"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-2 w-full max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-pink-700/40 text-pink-200 text-xs tracking-widest font-semibold">
            HAPPY NEW YEAR
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Anh <span className="text-pink-500">&amp;</span> Em
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-gray-200 text-sm sm:text-base">
            
            <br />
            Chào mừng em đến với trang web này. Đây chính là những gì mà anh muốn bày tỏ cho ngày hôm nay
          </p>
        </div>
      </motion.main>
      {/* COUNTER */}
      <motion.section
        className="py-8 md:py-16 bg-[#181018]"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Máy đếm thời gian bên nhau
        </h2>
        <p className="text-gray-300 text-center mb-6 md:mb-10 text-sm sm:text-base">
          Thời gian đã bên nhau
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-10 max-w-xs sm:max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-[180px] md:h-[180px] rounded-2xl bg-[#1a0e18] border border-[#2a1126] flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
              {String(counter.days).padStart(2, "0")}
            </span>
            <span className="text-xs tracking-widest text-pink-300 mt-2">
              NGÀY
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-[180px] md:h-[180px] rounded-2xl bg-[#1a0e18] border border-[#2a1126] flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
              {String(counter.hours).padStart(2, "0")}
            </span>
            <span className="text-xs tracking-widest text-pink-300 mt-2">
              GIỜ
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-[180px] md:h-[180px] rounded-2xl bg-[#1a0e18] border border-[#2a1126] flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
              {String(counter.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs tracking-widest text-pink-300 mt-2">
              PHÚT
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-[180px] md:h-[180px] rounded-2xl bg-[#1a0e18] border border-[#2a1126] flex flex-col items-center justify-center shadow-lg"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
              {String(counter.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs tracking-widest text-pink-300 mt-2">
              GIÂY
            </span>
          </motion.div>
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
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-pink-500 via-pink-900/60 to-pink-500" />
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
      {/* GALLERY */}
      <section className="py-8 md:py-20 bg-[#1a0e18]">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Gallery Ảnh
            </h2>
            <p className="text-gray-300 mt-1 text-sm sm:text-base">
              Từng tấm hình, vạn lời yêu
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.slice(0, showCount).map((img, idx) => (
              <div
                key={idx}
                className="bg-[#231526] rounded-2xl p-4 flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setFullscreenImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="text-white font-semibold">{img.title}</div>
                <div className="text-gray-400 text-sm mt-1">{img.desc}</div>
              </div>
            ))}
          </div>
          {showCount < galleryImages.length && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold text-base shadow-lg hover:bg-pink-600 transition"
                onClick={() => setShowCount(showCount + 6)}
              >
                Xem thêm
              </button>
            </div>
          )}
          {fullscreenImg && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
              onClick={() => setFullscreenImg(null)}
            >
              <div className="relative flex items-center justify-center">
                <button
                  className="absolute top-2 right-2 z-10 bg-pink-600/80 hover:bg-pink-700 text-white rounded-full p-2 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImg(null);
                  }}
                  aria-label="Đóng"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={fullscreenImg}
                  alt="fullscreen"
                  className="w-[90vw] max-w-md h-[70vh] object-cover rounded-2xl shadow-2xl animate-[scaleIn_0.3s] bg-black"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
          {/* Thư gửi người thương */}
          <div className="mt-16 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Thư Gửi Em
            </h2>
            <div className="bg-[#231526] rounded-2xl p-6 flex flex-col items-center shadow-lg max-w-lg w-full mx-auto">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-xl bg-pink-700/30 flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-pink-400 text-3xl">💌</span>
                </div>
              </div>
              <div className="text-white text-base md:text-lg font-semibold mb-2">
                "Gửi Phương Kiều của anh."
              </div>
              <div className="text-gray-300 text-sm md:text-base mb-4 text-center">
                Cảm ơn em đã xuất hiện và làm cho cuộc sống của anh trở nên rực
                rỡ hơn theo cách khác tốt đẹp hơn. Từng ngày bên em là một món
                quà vô giá mà anh luôn trân trọng. Dù chúng ta đã đi qua không
                ít khó khăn và thử thách, anh vẫn tin rằng chỉ cần còn nắm tay
                nhau, chúng ta sẽ vượt qua tất cả để cùng nhau xây dựng một
                tương lai tươi sáng và bình yên hơn.
              </div>
              <hr className="w-full border-t border-pink-500 my-4" />
              <div className="text-gray-300 text-sm md:text-base mb-4 text-center">
                Bước sang năm mới, anh mong em luôn mạnh khỏe, bình an, giữ được
                nụ cười mà anh yêu nhất, và tiếp tục là chính em – dịu dàng, ấm
                áp nhưng cũng rất kiên cường. Anh thương em rất nhiều và mong
                rằng chúng ta sẽ còn thật nhiều kỷ niệm đẹp bên nhau trong những
                năm tháng sắp tới.
              </div>
              <hr className="w-full border-t border-pink-500 my-4" />
              <div className="text-gray-300 text-sm md:text-base mb-4 text-center">
                Nhân dịp năm mới, anh cũng xin gửi lời chúc chân thành nhất đến
                bố mẹ và anh Long nha. Chúc mọi người sẽ luôn dồi dào sức khỏe
                đặc biệt là có thật nhiều sức khỏe để có thể kiếm được thật
                nhiều tiền, an khang, hạnh phúc, mọi điều thuận lợi và tràn ngập
                tiếng cười trong ân sủng của Chúa. Năm mới, mong rằng yêu thương
                sẽ ở lại, bình yên sẽ đủ đầy, và chúng ta vẫn chọn nhau – mỗi
                ngày.
              </div>
              <div className="flex items-center gap-2 mt-2 justify-center">
                <span className="text-pink-400 text-xl"><FaHeart /></span>
                <span className="text-white font-semibold">Đạt</span>
              </div>
              <div className="w-full flex justify-center mt-1">
                <span className="text-gray-400 text-xs text-center">Chúc mừng năm mới</span>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-xs">
              <span className="inline-block mr-2">🎵</span>
              Background music:{" "}
              <a className="text-pink-400 underline">
                Beautiful In White - Shane Filan
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Scroll to top icon fixed bottom right */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-4 bottom-40 z-50 cursor-pointer animate-glow bg-pink-600/80 hover:bg-pink-700 text-white rounded-full p-3 shadow-2xl transition-all duration-300"
        style={{ boxShadow: '0 0 16px #ff1fa4, 0 0 32px #ff1fa4' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Homepage;
