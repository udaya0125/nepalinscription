// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import mov1 from '../../public/images/inscription/INSN00003/inscription003.mp4';
// import backgroundimage from '../../public/images/inscription/INSN00003/INSN 00003_2.jpg'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import imageone from '../../public/images/inscription/INSN00003/INSN 00003_1.jpg'
// import imagetwo from '../../public/images/inscription/INSN00003/INSN 00003_2.jpg'
// import imagethree from '../../public/images/inscription/INSN00003/INSN 00003_3.jpg'
// import imagefour from '../../public/images/inscription/INSN00003/INSN 00003_4.jpg'
// import imagefive from '../../public/images/inscription/INSN00003/INSN 00003_5.jpg'
// import imagesix from '../../public/images/inscription/INSN00003/INSN 00003_6.jpg'
// import imageseven from '../../public/images/inscription/INSN00003/INSN 00003_7.jpg'
// import imageeight from '../../public/images/inscription/INSN00003/INSN 00003_8.jpg'
// import posterimage from '../../public/images/inscription/INSN00003/INSN 00003_2.jpg'

// const images = [
//     imageone,
//     imagetwo,
//     imagethree,
//     imagefour,
//     imagefive,
//     imagesix,
//     imageseven,
//     imageeight
// ];

// const tabs = [
//     'Description',
//     'Background',
//     'Text',
//     'Translation',
//     ' References',
//     'Glossary',
// ];

// const INSN00003 = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [activeTab, setActiveTab] = useState('Description');

//     return (
//         <>
//             {/* Hero */}
//             <div className="relative h-[50vh] mt-12 w-full">
//                 {/* Background Image */}
//                 <img
//                     src={backgroundimage}
//                     alt="Licchavi Inscription"
//                     className="w-full h-full object-cover object-top"
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Heading */}
//                 <p className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl text-white text-center px-4">
//                     A Licchavi Inscription from Swayambhu
//                 </p>
//             </div>


//             {/* Slider */}
//             <div className="max-w-7xl px-4 mx-auto py-16">
//                 <Swiper
//                     modules={[Navigation]}
//                     navigation
//                     spaceBetween={16}
//                     slidesPerView={2}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         768: { slidesPerView: 4 },
//                         1024: { slidesPerView: 4 },
//                     }}
//                 >
//                     {images.map((img, index) => (
//                         <SwiperSlide key={index}>
//                             <img
//                                 src={img}
//                                 onClick={() => setActiveIndex(index)}
//                                 className={`w-full h-48 object-cover cursor-pointer transition border-4 ${activeIndex === index ? 'border-black' : 'border-transparent'
//                                     }`}
//                                 alt=""
//                             />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* Main Image and Video */}
//             <div className="max-w-7xl mx-auto px-4 pb-12">
//                 <div className="grid sm:grid-cols-2 gap-8">
//                     {/* Image */}

//                     <div className="relative w-full h-[60vh] ">
//                         <img
//                             src={images[activeIndex]}
//                             alt=""
//                             className="w-full h-full object-contain"
//                         />
//                         <div className="absolute top-6 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-full">
//                             {activeIndex + 1} / {images.length}
//                         </div>
//                     </div>

//                     {/* Video */}
//                     <div className="w-full ">
//                         <video
//                             src={mov1}
//                             controls
//                             poster={posterimage}
//                             className="w-full h-full object-fill shadow-md"
//                         />
//                     </div>

//                 </div>

//                 {/* Tabs */}
//                 <div className="max-w-5xl mx-auto mt-12">
//                     <div className="flex flex-wrap gap-8 border-b">
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`text-md font-bold transition ${activeTab === tab
//                                     ? 'bg-black text-white px-4 py-2 rounded'
//                                     : 'text-black hover:text-black'
//                                     }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Tab Content */}
//                     <div className="py-10 text-black font-medium leading-relaxed text-md sm:text-lg">
//                         {activeTab === 'Description' && (
//                             <p>
//                                 A Licchavi Inscription from Swayambhu <br />
//                                 Inscriptions of Nepal ID: INSN 00003 <br />
//                                 Material: Stone <br />
//                                 Place: Swayambhu, Kathmandu <br />
//                                 Script: Licchavi <br />
//                                 Date: Licchavi period (based on palaeographical features) <br />
//                                 Language: Sanskrit <br />
//                                 Dimensions: 62 (L) x 47 (W) x 13 (T) cm
//                             </p>
//                         )}

//                         {activeTab === 'Background' && (
//                             <p>
//                                 The inscription is found on a stone slab near the step of the stairs on the right-hand side of the
//                                 entrance to the Pratapapur Temple at Swayambhu. The text appears on the longer side of the
//                                 slab, parallel to its thickness, while the mantra <span className='italic'>oṃ maṇi padme hūṃ</span> is inscribed in Tibetan
//                                 script on one of the narrower sides (width), now largely painted white. Although the
//                                 inscription is only partially legible due to its condition, it indicates, among other details, offering materials to the Buddha statue and related purposes, thereby
//                                 illustrating the country’s early religious and cultural practices.                            </p>
//                         )}

//                         {activeTab === 'Text' && <p>
//                             (1) … niśśeṣaṃ sāndra … sambuddhañ jagad ekagu … ṃ <br />
//                             (2) … ttigga yat puṇyaṃ sañcitam mayā teneyañ janatā kṛtsnā bauddham padam
//                             avāpnuyāt <br />
//                             (3) … na rddhasya valepaścimapradeśe kṣetram asya piṇḍakaṃ varttamānaviṃśatika … mā
//                             26<br />
//                             (4) cārddhamā … taṇḍulaś cārddhamā … mā 6 upalepanadhūpadīpānāmnā 3<br />
//                             (5) … ṣā …

//                         </p>}

//                         {activeTab === 'Translation' && <p>In preparation.</p>}
//                         {activeTab === ' References' && (
//                             <ul className="space-y-0 text-black
//                    list-disc pl-5 
//                    sm:list-none sm:pl-0">



//                                 <li>
//                                     Tevārī, Rāmajī et al. (eds.) (VS 2018), <span className='italic'>Abhilekha-saṃgraha.</span> Part 1. Kāṭhamāṇḍauṃ:
//                                     Saṃśodhana-maṇḍala.                                </li>
//                                 <li>
//                                     Vajrācārya, Dhanavajra (VS 2030), <span className='italic'>Licchavikālakā abhilekha,</span>  Kāṭhamāṇḍauṃ:
//                                     Nepāla ra eśiyālī adhyayana saṃsthāna.                                </li>

//                             </ul>
//                         )}


//                         {activeTab === 'Glossary' && <p>In preparation..</p>}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default INSN00003;


import React from 'react'

const INSN00003 = () => {
  return (
    <div>
      
    </div>
  )
}

export default INSN00003
