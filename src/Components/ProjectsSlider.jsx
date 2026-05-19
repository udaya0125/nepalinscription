import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: '𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬: 𝐇𝐮𝐦𝐢𝐝𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧, (𝐔𝐧)𝐫𝐨𝐥𝐥𝐢𝐧𝐠, 𝐃𝐢𝐠𝐢𝐭𝐢𝐳𝐚𝐭𝐢𝐨𝐧 & 𝐀𝐫𝐜𝐡𝐢𝐯𝐢𝐧𝐠 𝐓𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬',
    
    url: 'https://www.youtube.com/watch?v=1ThLDbN_5dI',
    id: '1ThLDbN_5dI',
  },
  {
    title: '𝐓𝐡𝐞 𝐒𝐢𝐥𝐯𝐞𝐫 𝑫𝒉𝒂̄𝒓𝒂𝒏̣𝒊̄ 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭 | 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐁𝐮𝐝𝐝𝐡𝐢𝐬𝐭 𝐁𝐨𝐨𝐤 𝐏𝐫𝐞𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 | रजताक्षर पुस्तक संरक्षण',
    
    url: 'https://www.youtube.com/watch?v=T3tpep5iPuA',
    id: 'T3tpep5iPuA',
  },
  {
    title: '𝐃𝐢𝐠𝐢𝐭𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭𝐬 𝐚𝐧𝐝 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐜𝐚𝐥 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 | 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐏𝐫𝐞𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧',
    
    url: 'https://www.youtube.com/watch?v=0XpANGxFL7A',
    id: '0XpANGxFL7A',
  },

  {
    title: '𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭 𝐒𝐢𝐳𝐞𝐬 & 𝐓𝐲𝐩𝐞𝐬 𝐨𝐟 𝐀𝐫𝐜𝐡𝐢𝐯𝐚𝐥 𝐁𝐨𝐱𝐞𝐬 | 𝐏𝐫𝐞𝐬𝐞𝐫𝐯𝐢𝐧𝐠 𝐀𝐧𝐜𝐢𝐞𝐧𝐭 𝐌𝐚𝐧𝐮𝐬𝐜𝐫𝐢𝐩𝐭𝐬 & 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐜𝐚𝐥 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬',
    url: 'https://www.youtube.com/watch?v=FSMpb6QFsHg',
    id: 'FSMpb6QFsHg',
  },
  {
    title: '𝐇𝐨𝐰 𝐭𝐨 𝐖𝐫𝐚𝐩 𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 𝐢𝐧 𝐋𝐨𝐤𝐭𝐚 𝐏𝐚𝐩𝐞𝐫 𝐭𝐨 𝐏𝐫𝐨𝐭𝐞𝐜𝐭 𝐓𝐡𝐞𝐦?',
    url: 'https://www.youtube.com/watch?v=lcso_vfe3ps',
    id: 'lcso_vfe3ps',
  },
  {
    title: "𝗧𝗵𝗲 ‘𝗚𝗼𝗹𝗱𝗲𝗻’ 𝙋𝙖𝙣̃𝙘𝙖𝙧𝙖𝙠𝙨̣𝙖̄ 𝗠𝗮𝗻𝘂𝘀𝗰𝗿𝗶𝗽𝘁 𝗮𝗻𝗱 𝗶𝘁𝘀 𝗣𝗿𝗲𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻",
    url: 'https://www.youtube.com/watch?v=0tmmz0Js40E',
    id: '0tmmz0Js40E',
  },
  {
    title: '𝐀 𝐑𝐨𝐲𝐚𝐥 𝐏𝐨𝐥𝐲𝐩𝐡𝐨𝐧𝐲 𝐨𝐟 𝐒𝐜𝐫𝐢𝐩𝐭𝐬 𝐚𝐧𝐝 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞𝐬: 𝐓𝐡𝐞 𝐇𝐚𝐧𝐮𝐦𝐚𝐧𝐝𝐡𝐨𝐤𝐚 𝐏𝐚𝐥𝐚𝐜𝐞 𝐈𝐧𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 𝐢𝐧 𝐊𝐚𝐭𝐡𝐦𝐚𝐧𝐝𝐮',
    url: 'https://www.youtube.com/watch?v=Ec9bZsFVqLs',
    id: 'Ec9bZsFVqLs',
  },
  {
    title: '𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐑𝐨𝐥𝐥𝐞𝐝 𝐏𝐚𝐥𝐦-𝐥𝐞𝐚𝐟 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 𝐭𝐡𝐞 𝐌𝐚𝐥𝐥𝐚 𝐏𝐞𝐫𝐢𝐨𝐝: 𝐀 𝐒𝐭𝐞𝐩-𝐛𝐲-𝐬𝐭𝐞𝐩 𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰',
    url: 'https://www.youtube.com/watch?v=1qgx6kLh5vE',
    id: '1qgx6kLh5vE',
  },
  
];

export default function ProjectsSlider() {
  return (
    <div className="w-[90%] mx-auto px-4 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl max-w-5xl mx-auto font-medium mb-6">Written Cultural Heritage of Nepal: Preservation and Documentation</h2>
        <p className="text-lg font-medium mb-12 leading-[32px] max-w-3xl mx-auto">
          Nepal is home to exceptionally diverse manuscript collections, featuring various scripts, languages, and topics. Initiated and produced by Dr Bidur Bhattarai, this series presents the activities carried out for the preservation of Nepal’s written cultural heritage, highlighting their diversity and uniqueness in writing, supports, materials, forms, and texts, along with practical guidance for manuscript and historical document conservation.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = '.custom-prev';
            swiper.params.navigation.nextEl = '.custom-next';
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
              >
                <img
                  src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
                  alt={project.title}
                  className="w-full h-[36vh] object-cover rounded-2xl group-hover:opacity-90 transition"
                />
                <div className="flex justify-between items-center border-b border-[#282118] py-4 mt-4">
                  <p className="text-xl font-medium line-clamp-2 group-hover:text-[#9f5e2e] transition">
                    {project.title}
                  </p>
                  {/* <button
                    className="w-12 h-12 shrink-0 focus:outline-none"
                    aria-label="Watch video"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-full h-full fill-current text-gray-700 group-hover:text-[#9f5e2e] transition-colors"
                    >
                      <polygon points="399.22 206.93 391.04 215.72 427.91 250 60 250 60 262 427.94 262 391.04 296.29 399.22 305.08 452 256.01 399.22 206.93" />
                    </svg>
                  </button> */}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (on top of slides) */}
        <button className="custom-prev absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-20 bg-[#efefe8]/80 text-[#282118] w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#efefe8] hover:scale-105 transition-all backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button className="custom-next absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20 bg-[#efefe8]/80 text-[#282118] w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#efefe8] hover:scale-105 transition-all backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Footer CTA */}
      {/* <div className="pt-12 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-medium">Want to see more?</h2>
        <p className="text-lg mb-12 font-medium leading-[32px] max-w-md mx-auto">
          Check out the blog to view the design archives and read the story behind each project.
        </p>
        <Link
          to="/blogs"
          className="bg-[#efefe8] border border-[#282118] text-[#282118] px-12 py-3 rounded-md hover:text-[#9f5e2e] transition-colors"
        >
          View the blog
        </Link>
      </div> */}
    </div>
  );
}
