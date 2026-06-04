// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Create this component that works everywhere
// export const filenameMap = {
//   "INSN1L545_śā.JPG": "INSN1L545_┼Ы─Б.JPG",
//   "INSN1L545_śe.JPG": "INSN1L545_┼Ыe.JPG",
//   "INSN1L545_ka.JPG": "INSN1L545_ka.JPG",
//   "INSN1L545_ku.JPG": "INSN1L545_ku.JPG",
//   "INSN1L545_śa.JPG": "INSN1L545_┼Ыa.JPG",
//   "INSN1L545_nā.JPG": "INSN1L545_n─Б.JPG",
//   "INSN1L545_mā.JPG": "INSN1L545_m─Б.JPG",
//   "INSN1L545_hā.JPG": "INSN1L545_h─Б.JPG",
// };

// // Accordion Component for each consonant family
// const AccordionSection = ({ title, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex text-start justify-between p-4 bg-[#50644b] hover:bg-[#4f5e4f]/90 transition-colors">
//         <span className="text-xl font-semibold text-white">{title}</span>
//         <span className="text-2xl text-white font-bold">
//           {isOpen ? "−" : "+"}
//         </span>
//       </button>
//       {isOpen && <div className="p-4">{children}</div>}
//     </div>
//   );
// };

// // SmartImage component
// const SmartImage = ({ originalSrc, className = "w-16 mx-auto", alt = "" }) => {
//   const filename = originalSrc.split("/").pop();
//   const mappedFilename = filenameMap[filename] || filename;
//   const encodedFilename = encodeURIComponent(mappedFilename);
//   const path = originalSrc.replace(filename, encodedFilename);
//   return <img src={path} className={className} alt={alt} />;
// };

// // Component to display a character in a box
// const CharacterBox = ({
//   image,
//   label,
//   link = "/insn-00001/details",
//   smartImage = false,
//   hasData = true,
// }) => {
//   const [imgError, setImgError] = useState(false);

//   // If no data available, show placeholder
//   if (!hasData) {
//     return (
//       <div className="inline-block border border-black mb-2 w-[140px]">
//         <div className="min-h-[140px] flex flex-col">
//           <div className="flex-1 p-4 text-center">
//             {/* <div className="w-16 mx-auto h-16 flex items-center justify-center text-gray-400 text-sm">
//                             {label}
//                         </div> */}
//             <p className="mt-2 text-sm text-gray-400 break-words">{label}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // For items with data
//   return (
//     <div className="inline-block border border-black mb-2 w-[140px]">
//       <div className="min-h-[140px] flex flex-col">
//         <div className="flex-1 p-4 text-center">
//           {image ? (
//             smartImage ? (
//               <SmartImage
//                 originalSrc={image}
//                 className="w-16 mx-auto h-16 object-contain"
//               />
//             ) : (
//               <img
//                 src={image}
//                 className="w-16 mx-auto h-16 object-contain"
//                 alt=""
//                 onError={(e) => {
//                   if (!imgError) {
//                     setImgError(true);
//                     e.target.style.display = "none";
//                   }
//                 }}
//               />
//             )
//           ) : (
//             <div className="w-16 mx-auto h-16 flex items-center justify-center text-gray-400 text-sm">
//               {label}
//             </div>
//           )}
//           <a href={link}>
//             <p className="mt-2 text-sm hover:text-blue-700 break-words">
//               {label}
//             </p>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Palaeographical = () => {
//   const [palaeographical, setPalaeographical] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     const fetchPalaeographical = async () => {
//       try {
//         const response = await axios.get(
//           "https://inscriptionbackend.saitsolution.com.np/api/palaeographical",
//         );
//         const data = response.data.data;
//         setPalaeographical(data);
//       } catch (error) {
//         console.error("fetching error", error);
//       }
//     };
//     fetchPalaeographical();
//   }, []);

//   useEffect(() => {
//     const fetchSubCategory = async () => {
//       try {
//         const response = await axios.get(
//           "https://inscriptionbackend.saitsolution.com.np/api/sub_categories",
//         );
//         const data = response.data.data;
//         setSubCategory(data);
//       } catch (error) {
//         console.error("fetching error", error);
//       }
//     };
//     fetchSubCategory();
//   }, []);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(
//           "https://inscriptionbackend.saitsolution.com.np/api/categories",
//         );
//         //   const data = await response.data();
//         const data = response.data.data;
//         setCategory(data);
//       } catch (error) {
//         console.error("fetching error", error);
//       }
//     };
//     fetchCategory();
//   }, []);

//   console.log(palaeographical);
//   console.log(subCategory);
//   console.log(category);
//   return (
//     <>
//       <div className="relative h-[50vh] mt-12 flex items-center justify-center">
//         <img
//           src="images/inscription/main.jpg"
//           alt="Inscriptions"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="absolute top-16 left-6 z-10 text-white p-3 flex items-center gap-2 text-base leading-6 tracking-wide">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <span>/</span>
//           <span className="opacity-80"> Palaeographical Database</span>
//         </div>
//         <h1 className="relative z-10 text-5xl text-white font-semibold">
//           Palaeographical Database of Inscriptions
//         </h1>
//       </div>

//       <div className="max-w-7xl px-4 mx-auto py-24">
//         <h2 className="text-3xl font-semibold mb-4">
//           Database of Palaeographical and Visual Features of Inscriptions
//         </h2>
//         <p className="text-lg mb-8 text-justify">
//           Inscriptions are among the earliest forms of writing in human
//           civilisation. This initiative aims to bring together palaeographic
//           research to build a comprehensive, evolving repository of
//           inscriptional features from Nepal across key historical periods,
//           including the Licchavi, Malla, and Shah/Rana eras. The project enables
//           both scholars and the wider public to explore, compare, and analyse
//           inscriptions from the region. By examining dated and undated materials
//           side by side, readers can better identify stylistic characteristics
//           and historical patterns. Beyond textual analysis, the study also sheds
//           light on craftsmanship, production techniques, usage contexts, and
//           intellectual traditions, with particular attention to the evolution of
//           scripts and visual paratextual elements.
//         </p>
//         <h2 className="mb-8 text-2xl ">
//           Our database is continually expanding, with new materials added on an
//           ongoing basis. Explore the collection.
//         </h2>

//         {/* FILTERS */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
//           <div>
//             <label className="block text-sm font-medium mb-2">Period</label>
//             <select className="border cursor-pointer p-3 rounded w-full">
//               <option>All Periods</option>
//               <option>Licchavi</option>
//               <option>Malla</option>
//               <option>Shah/Rana</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Script</label>
//             <select className="border cursor-pointer p-3 rounded w-full">
//               <option>All Scripts</option>
//               <option>Licchavi</option>
//               <option>Newari</option>
//               <option>Rañjanā</option>
//               <option>Devanāgarī</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm  font-medium mb-2">
//               Varṇa
//             </label>
//             <select className="border cursor-pointer p-3 rounded  w-full">
//               <option>Svaravarṇa </option>
//               <option>Vyañjanavarṇa</option>
//               <option>Saṃyuktavarṇa</option>
//             </select>
//           </div>

//           <div>
//             <label className="block cursor-pointer text-sm font-medium mb-2">
//               Symbols, Signs
//             </label>
//             <select className="border cursor-pointer p-3  rounded w-full">
//               <option>Siddham | Maṅgala</option>
//               <option>Visarga</option>
//               <option>Virāma</option>
//               <option>Avagraha</option>
//               <option>Yojakacihna</option>
//             </select>
//           </div>

//           <div className="">
//             <label className="block text-sm font-medium mb-2">
//               <span className="">Citra</span> (figures)
//             </label>
//             <select className="border cursor-pointer p-3 w-full rounded">
//               <option>All Periods</option>
//               <option>Licchavi</option>
//               <option>Malla</option>
//               <option>Shah/Rana</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button className="px-6 py-2 border cursor-pointer rounded hover:bg-gray-100 transition">
//             Reset Filters
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl px-4 mx-auto ">
//         <AccordionSection title="Siddham | Maṅgala (auspicious symbols)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         {/* Svaravarṇa (vowels) - Main Accordion */}
//         <AccordionSection title="Svaravarṇa (vowels)">
//           {/* अ a */}
//           <AccordionSection title="अ a">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="अ a (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* आ ā */}
//           <AccordionSection title="आ ā">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="आ ā (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* इ i */}
//           <AccordionSection title="इ i">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="इ i (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ई ī */}
//           <AccordionSection title="ई ī">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ई ī (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* उ u */}
//           <AccordionSection title="उ u">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="उ u (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ऊ ū */}
//           <AccordionSection title="ऊ ū">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ऊ ū (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ऋ ṛ */}
//           <AccordionSection title="ऋ ṛ">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ऋ ṛ (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ॠ ṝ */}
//           <AccordionSection title="ॠ ṝ">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ॠ ṝ (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ऌ ḷ */}
//           <AccordionSection title="ऌ ḷ">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ऌ ḷ (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ॡ ḹ */}
//           <AccordionSection title="ॡ ḹ">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ॡ ḹ (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ए e */}
//           <AccordionSection title="ए e">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ए e (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ऐ ai */}
//           <AccordionSection title="ऐ ai">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ऐ ai (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ओ o */}
//           <AccordionSection title="ओ o">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ओ o (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* औ au */}
//           <AccordionSection title="औ au">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="औ au (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>
//         </AccordionSection>

//         {/* Vyañjanavarṇa (consonants) - Main Accordion */}
//         <AccordionSection title="Vyañjanavarṇa (consonants)">
//           {/* ka group */}
//           <AccordionSection title="क ka">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/ka.jpg"
//                 label="INSN1L545_ka"
//                 hasData={true}
//               />
//               <CharacterBox label="का kā (In preparation)" hasData={false} />
//               <CharacterBox label="कि ki (In preparation)" hasData={false} />
//               <CharacterBox label="की kī (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/ku.jpg"
//                 label="INSN1L545_ku"
//                 hasData={true}
//               />
//               <CharacterBox label="कू kū (In preparation)" hasData={false} />
//               <CharacterBox label="के ke (In preparation)" hasData={false} />
//               <CharacterBox label="कै kai (In preparation)" hasData={false} />
//               <CharacterBox label="को ko (In preparation)" hasData={false} />
//               <CharacterBox label="कौ kau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* kha group */}
//           <AccordionSection title="ख kha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ख kha (In preparation)" hasData={false} />
//               <CharacterBox label="खा khā (In preparation)" hasData={false} />
//               <CharacterBox label="खि khi (In preparation)" hasData={false} />
//               <CharacterBox label="खी khī (In preparation)" hasData={false} />
//               <CharacterBox label="खु khu (In preparation)" hasData={false} />
//               <CharacterBox label="खू khū (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_khe.JPG"
//                 label="INSN1L545_khe"
//                 hasData={true}
//               />
//               <CharacterBox label="खै khai (In preparation)" hasData={false} />
//               <CharacterBox label="खो kho (In preparation)" hasData={false} />
//               <CharacterBox label="खौ khau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ga group */}
//           <AccordionSection title="ग ga">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ग ga (In preparation)" hasData={false} />
//               <CharacterBox label="गा gā (In preparation)" hasData={false} />
//               <CharacterBox label="गि gi (In preparation)" hasData={false} />
//               <CharacterBox label="गी gī (In preparation)" hasData={false} />
//               <CharacterBox label="गु gu (In preparation)" hasData={false} />
//               <CharacterBox label="गू gū (In preparation)" hasData={false} />
//               <CharacterBox label="गे ge (In preparation)" hasData={false} />
//               <CharacterBox label="गै gai (In preparation)" hasData={false} />
//               <CharacterBox label="गो go (In preparation)" hasData={false} />
//               <CharacterBox label="गौ gau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* gha group */}
//           <AccordionSection title="घ gha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="घ gha (In preparation)" hasData={false} />
//               <CharacterBox label="घा ghā (In preparation)" hasData={false} />
//               <CharacterBox label="घि ghi (In preparation)" hasData={false} />
//               <CharacterBox label="घी ghī (In preparation)" hasData={false} />
//               <CharacterBox label="घु ghu (In preparation)" hasData={false} />
//               <CharacterBox label="घू ghū (In preparation)" hasData={false} />
//               <CharacterBox label="घे ghe (In preparation)" hasData={false} />
//               <CharacterBox label="घै ghai (In preparation)" hasData={false} />
//               <CharacterBox label="घो gho (In preparation)" hasData={false} />
//               <CharacterBox label="घौ ghau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ṅa group */}
//           <AccordionSection title="ङ ṅa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ङ ṅa (In preparation)" hasData={false} />
//               <CharacterBox label="ङा ṅā (In preparation)" hasData={false} />
//               <CharacterBox label="ङि ṅi (In preparation)" hasData={false} />
//               <CharacterBox label="ङी ṅī (In preparation)" hasData={false} />
//               <CharacterBox label="ङु ṅu (In preparation)" hasData={false} />
//               <CharacterBox label="ङू ṅū (In preparation)" hasData={false} />
//               <CharacterBox label="ङे ṅe (In preparation)" hasData={false} />
//               <CharacterBox label="ङै ṅai (In preparation)" hasData={false} />
//               <CharacterBox label="ङो ṅo (In preparation)" hasData={false} />
//               <CharacterBox label="ङौ ṅau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ca group */}
//           <AccordionSection title="च ca">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="च ca (In preparation)" hasData={false} />
//               <CharacterBox label="चा cā (In preparation)" hasData={false} />
//               <CharacterBox label="चि ci (In preparation)" hasData={false} />
//               <CharacterBox label="ची cī (In preparation)" hasData={false} />
//               <CharacterBox label="चु cu (In preparation)" hasData={false} />
//               <CharacterBox label="चू cū (In preparation)" hasData={false} />
//               <CharacterBox label="चे ce (In preparation)" hasData={false} />
//               <CharacterBox label="चै cai (In preparation)" hasData={false} />
//               <CharacterBox label="चो co (In preparation)" hasData={false} />
//               <CharacterBox label="चौ cau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* cha group */}
//           <AccordionSection title="छ cha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="छ cha (In preparation)" hasData={false} />
//               <CharacterBox label="छा chā (In preparation)" hasData={false} />
//               <CharacterBox label="छि chi (In preparation)" hasData={false} />
//               <CharacterBox label="छी chī (In preparation)" hasData={false} />
//               <CharacterBox label="छु chu (In preparation)" hasData={false} />
//               <CharacterBox label="छू chū (In preparation)" hasData={false} />
//               <CharacterBox label="छे che (In preparation)" hasData={false} />
//               <CharacterBox label="छै chai (In preparation)" hasData={false} />
//               <CharacterBox label="छो cho (In preparation)" hasData={false} />
//               <CharacterBox label="छौ chau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ja group */}
//           <AccordionSection title="ज ja">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_ja.JPG"
//                 label="INSN1L545_ja"
//                 hasData={true}
//               />
//               <CharacterBox label="जा jā (In preparation)" hasData={false} />
//               <CharacterBox label="जि ji (In preparation)" hasData={false} />
//               <CharacterBox label="जी jī (In preparation)" hasData={false} />
//               <CharacterBox label="जु ju (In preparation)" hasData={false} />
//               <CharacterBox label="जू jū (In preparation)" hasData={false} />
//               <CharacterBox label="जे je (In preparation)" hasData={false} />
//               <CharacterBox label="जै jai (In preparation)" hasData={false} />
//               <CharacterBox label="जो jo (In preparation)" hasData={false} />
//               <CharacterBox label="जौ jau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* jha group */}
//           <AccordionSection title="झ jha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="झ jha (In preparation)" hasData={false} />
//               <CharacterBox label="झा jhā (In preparation)" hasData={false} />
//               <CharacterBox label="झि jhi (In preparation)" hasData={false} />
//               <CharacterBox label="झी jhī (In preparation)" hasData={false} />
//               <CharacterBox label="झु jhu (In preparation)" hasData={false} />
//               <CharacterBox label="झू jhū (In preparation)" hasData={false} />
//               <CharacterBox label="झे jhe (In preparation)" hasData={false} />
//               <CharacterBox label="झै jhai (In preparation)" hasData={false} />
//               <CharacterBox label="झो jho (In preparation)" hasData={false} />
//               <CharacterBox label="झौ jhau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ña group */}
//           <AccordionSection title="ञ ña">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ञ ña (In preparation)" hasData={false} />
//               <CharacterBox label="ञा ñā (In preparation)" hasData={false} />
//               <CharacterBox label="ञि ñi (In preparation)" hasData={false} />
//               <CharacterBox label="ञी ñī (In preparation)" hasData={false} />
//               <CharacterBox label="ञु ñu (In preparation)" hasData={false} />
//               <CharacterBox label="ञू ñū (In preparation)" hasData={false} />
//               <CharacterBox label="ञे ñe (In preparation)" hasData={false} />
//               <CharacterBox label="ञै ñai (In preparation)" hasData={false} />
//               <CharacterBox label="ञो ño (In preparation)" hasData={false} />
//               <CharacterBox label="ञौ ñau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ṭa group */}
//           <AccordionSection title="ट ṭa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ट ṭa (In preparation)" hasData={false} />
//               <CharacterBox label="टा ṭā (In preparation)" hasData={false} />
//               <CharacterBox label="टि ṭi (In preparation)" hasData={false} />
//               <CharacterBox label="टी ṭī (In preparation)" hasData={false} />
//               <CharacterBox label="टु ṭu (In preparation)" hasData={false} />
//               <CharacterBox label="टू ṭū (In preparation)" hasData={false} />
//               <CharacterBox label="टे ṭe (In preparation)" hasData={false} />
//               <CharacterBox label="टै ṭai (In preparation)" hasData={false} />
//               <CharacterBox label="टो ṭo (In preparation)" hasData={false} />
//               <CharacterBox label="टौ ṭau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ṭha group */}
//           <AccordionSection title="ठ ṭha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ठ ṭha (In preparation)" hasData={false} />
//               <CharacterBox label="ठा ṭhā (In preparation)" hasData={false} />
//               <CharacterBox label="ठि ṭhi (In preparation)" hasData={false} />
//               <CharacterBox label="ठी ṭhī (In preparation)" hasData={false} />
//               <CharacterBox label="ठु ṭhu (In preparation)" hasData={false} />
//               <CharacterBox label="ठू ṭhū (In preparation)" hasData={false} />
//               <CharacterBox label="ठे ṭhe (In preparation)" hasData={false} />
//               <CharacterBox label="ठै ṭhai (In preparation)" hasData={false} />
//               <CharacterBox label="ठो ṭho (In preparation)" hasData={false} />
//               <CharacterBox label="ठौ ṭhau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ḍa group */}
//           <AccordionSection title="ड ḍa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ड ḍa (In preparation)" hasData={false} />
//               <CharacterBox label="डा ḍā (In preparation)" hasData={false} />
//               <CharacterBox label="डि ḍi (In preparation)" hasData={false} />
//               <CharacterBox label="डी ḍī (In preparation)" hasData={false} />
//               <CharacterBox label="डु ḍu (In preparation)" hasData={false} />
//               <CharacterBox label="डू ḍū (In preparation)" hasData={false} />
//               <CharacterBox label="डे ḍe (In preparation)" hasData={false} />
//               <CharacterBox label="डै ḍai (In preparation)" hasData={false} />
//               <CharacterBox label="डो ḍo (In preparation)" hasData={false} />
//               <CharacterBox label="डौ ḍau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ḍha group */}
//           <AccordionSection title="ढ ḍha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ढ ḍha (In preparation)" hasData={false} />
//               <CharacterBox label="ढा ḍhā (In preparation)" hasData={false} />
//               <CharacterBox label="ढि ḍhi (In preparation)" hasData={false} />
//               <CharacterBox label="ढी ḍhī (In preparation)" hasData={false} />
//               <CharacterBox label="ढु ḍhu (In preparation)" hasData={false} />
//               <CharacterBox label="ढू ḍhū (In preparation)" hasData={false} />
//               <CharacterBox label="ढे ḍhe (In preparation)" hasData={false} />
//               <CharacterBox label="ढै ḍhai (In preparation)" hasData={false} />
//               <CharacterBox label="ढो ḍho (In preparation)" hasData={false} />
//               <CharacterBox label="ढौ ḍhau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ṇa group */}
//           <AccordionSection title="ण ṇa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ण ṇa (In preparation)" hasData={false} />
//               <CharacterBox label="णा ṇā (In preparation)" hasData={false} />
//               <CharacterBox label="णि ṇi (In preparation)" hasData={false} />
//               <CharacterBox label="णी ṇī (In preparation)" hasData={false} />
//               <CharacterBox label="णु ṇu (In preparation)" hasData={false} />
//               <CharacterBox label="णू ṇū (In preparation)" hasData={false} />
//               <CharacterBox label="णे ṇe (In preparation)" hasData={false} />
//               <CharacterBox label="णै ṇai (In preparation)" hasData={false} />
//               <CharacterBox label="णो ṇo (In preparation)" hasData={false} />
//               <CharacterBox label="णौ ṇau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ta group */}
//           <AccordionSection title="त ta">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="त ta (In preparation)" hasData={false} />
//               <CharacterBox label="ता tā (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_ti.JPG"
//                 label="INSN1L545_ti"
//                 hasData={true}
//               />
//               <CharacterBox label="ती tī (In preparation)" hasData={false} />
//               <CharacterBox label="तु tu (In preparation)" hasData={false} />
//               <CharacterBox label="तू tū (In preparation)" hasData={false} />
//               <CharacterBox label="ते te (In preparation)" hasData={false} />
//               <CharacterBox label="तै tai (In preparation)" hasData={false} />
//               <CharacterBox label="तो to (In preparation)" hasData={false} />
//               <CharacterBox label="तौ tau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* tha group */}
//           <AccordionSection title="थ tha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="थ tha (In preparation)" hasData={false} />
//               <CharacterBox label="था thā (In preparation)" hasData={false} />
//               <CharacterBox label="थि thi (In preparation)" hasData={false} />
//               <CharacterBox label="थी thī (In preparation)" hasData={false} />
//               <CharacterBox label="थु thu (In preparation)" hasData={false} />
//               <CharacterBox label="थू thū (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_the.JPG"
//                 label="INSN1L545_the"
//                 hasData={true}
//               />
//               <CharacterBox label="थै thai (In preparation)" hasData={false} />
//               <CharacterBox label="थो tho (In preparation)" hasData={false} />
//               <CharacterBox label="थौ thau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* da group */}
//           <AccordionSection title="द da">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_da.JPG"
//                 label="INSN1L545_da"
//                 hasData={true}
//               />
//               <CharacterBox label="दा dā (In preparation)" hasData={false} />
//               <CharacterBox label="दि di (In preparation)" hasData={false} />
//               <CharacterBox label="दी dī (In preparation)" hasData={false} />
//               <CharacterBox label="दु du (In preparation)" hasData={false} />
//               <CharacterBox label="दू dū (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_de.JPG"
//                 label="INSN1L545_de"
//                 hasData={true}
//               />
//               <CharacterBox label="दै dai (In preparation)" hasData={false} />
//               <CharacterBox label="दो do (In preparation)" hasData={false} />
//               <CharacterBox label="दौ dau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* dha group */}
//           <AccordionSection title="ध dha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ध dha (In preparation)" hasData={false} />
//               <CharacterBox label="धा dhā (In preparation)" hasData={false} />
//               <CharacterBox label="धि dhi (In preparation)" hasData={false} />
//               <CharacterBox label="धी dhī (In preparation)" hasData={false} />
//               <CharacterBox label="धु dhu (In preparation)" hasData={false} />
//               <CharacterBox label="धू dhū (In preparation)" hasData={false} />
//               <CharacterBox label="धे dhe (In preparation)" hasData={false} />
//               <CharacterBox label="धै dhai (In preparation)" hasData={false} />
//               <CharacterBox label="धो dho (In preparation)" hasData={false} />
//               <CharacterBox label="धौ dhau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* na group */}
//           <AccordionSection title="न na">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_na.JPG"
//                 label="INSN1L545_na"
//                 hasData={true}
//               />
//               <CharacterBox
//                 image="/images/data/INSN1L545_nā.JPG"
//                 label="INSN1L545_nā"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox label="नि ni (In preparation)" hasData={false} />
//               <CharacterBox label="नी nī (In preparation)" hasData={false} />
//               <CharacterBox label="नु nu (In preparation)" hasData={false} />
//               <CharacterBox label="नू nū (In preparation)" hasData={false} />
//               <CharacterBox label="ने ne (In preparation)" hasData={false} />
//               <CharacterBox label="नै nai (In preparation)" hasData={false} />
//               <CharacterBox label="नो no (In preparation)" hasData={false} />
//               <CharacterBox label="नौ nau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* pa group */}
//           <AccordionSection title="प pa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_pa.JPG"
//                 label="INSN1L545_pa"
//                 hasData={true}
//               />
//               <CharacterBox label="पा pā (In preparation)" hasData={false} />
//               <CharacterBox label="पि pi (In preparation)" hasData={false} />
//               <CharacterBox label="पी pī (In preparation)" hasData={false} />
//               <CharacterBox label="पु pu (In preparation)" hasData={false} />
//               <CharacterBox label="पू pū (In preparation)" hasData={false} />
//               <CharacterBox label="पे pe (In preparation)" hasData={false} />
//               <CharacterBox label="पै pai (In preparation)" hasData={false} />
//               <CharacterBox label="पो po (In preparation)" hasData={false} />
//               <CharacterBox label="पौ pau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* pha group */}
//           <AccordionSection title="फ pha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="फ pha (In preparation)" hasData={false} />
//               <CharacterBox label="फा phā (In preparation)" hasData={false} />
//               <CharacterBox label="फि phi (In preparation)" hasData={false} />
//               <CharacterBox label="फी phī (In preparation)" hasData={false} />
//               <CharacterBox label="फु phu (In preparation)" hasData={false} />
//               <CharacterBox label="फू phū (In preparation)" hasData={false} />
//               <CharacterBox label="फे phe (In preparation)" hasData={false} />
//               <CharacterBox label="फै phai (In preparation)" hasData={false} />
//               <CharacterBox label="फो pho (In preparation)" hasData={false} />
//               <CharacterBox label="फौ phau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ba group */}
//           <AccordionSection title="ब ba">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ब ba (In preparation)" hasData={false} />
//               <CharacterBox label="बा bā (In preparation)" hasData={false} />
//               <CharacterBox label="बि bi (In preparation)" hasData={false} />
//               <CharacterBox label="बी bī (In preparation)" hasData={false} />
//               <CharacterBox label="बु bu (In preparation)" hasData={false} />
//               <CharacterBox label="बू bū (In preparation)" hasData={false} />
//               <CharacterBox label="बे be (In preparation)" hasData={false} />
//               <CharacterBox label="बै bai (In preparation)" hasData={false} />
//               <CharacterBox label="बो bo (In preparation)" hasData={false} />
//               <CharacterBox label="बौ bau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* bha group */}
//           <AccordionSection title="भ bha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_bha.JPG"
//                 label="INSN1L545_bha"
//                 hasData={true}
//               />
//               <CharacterBox label="भा bhā (In preparation)" hasData={false} />
//               <CharacterBox label="भि bhi (In preparation)" hasData={false} />
//               <CharacterBox label="भी bhī (In preparation)" hasData={false} />
//               <CharacterBox label="भु bhu (In preparation)" hasData={false} />
//               <CharacterBox label="भू bhū (In preparation)" hasData={false} />
//               <CharacterBox label="भे bhe (In preparation)" hasData={false} />
//               <CharacterBox label="भै bhai (In preparation)" hasData={false} />
//               <CharacterBox label="भो bho (In preparation)" hasData={false} />
//               <CharacterBox label="भौ bhau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ma group */}
//           <AccordionSection title="म ma">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_ma.JPG"
//                 label="INSN1L545_ma"
//                 hasData={true}
//               />
//               <CharacterBox
//                 image="/images/data/INSN1L545_mā.JPG"
//                 label="INSN1L545_mā"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox label="मि mi (In preparation)" hasData={false} />
//               <CharacterBox label="मी mī (In preparation)" hasData={false} />
//               <CharacterBox label="मु mu (In preparation)" hasData={false} />
//               <CharacterBox label="मू mū (In preparation)" hasData={false} />
//               <CharacterBox label="मे me (In preparation)" hasData={false} />
//               <CharacterBox label="मै mai (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_mo.JPG"
//                 label="INSN1L545_mo"
//                 hasData={true}
//               />
//               <CharacterBox label="मौ mau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ya group */}
//           <AccordionSection title="य ya">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_ya.JPG"
//                 label="INSN1L545_ya"
//                 hasData={true}
//               />
//               <CharacterBox label="या yā (In preparation)" hasData={false} />
//               <CharacterBox label="यि yi (In preparation)" hasData={false} />
//               <CharacterBox label="यी yī (In preparation)" hasData={false} />
//               <CharacterBox label="यु yu (In preparation)" hasData={false} />
//               <CharacterBox label="यू yū (In preparation)" hasData={false} />
//               <CharacterBox label="ये ye (In preparation)" hasData={false} />
//               <CharacterBox label="यै yai (In preparation)" hasData={false} />
//               <CharacterBox label="यो yo (In preparation)" hasData={false} />
//               <CharacterBox label="यौ yau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ra group */}
//           <AccordionSection title="र ra">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="र ra (In preparation)" hasData={false} />
//               <CharacterBox label="रा rā (In preparation)" hasData={false} />
//               <CharacterBox label="रि ri (In preparation)" hasData={false} />
//               <CharacterBox label="री rī (In preparation)" hasData={false} />
//               <CharacterBox label="रु ru (In preparation)" hasData={false} />
//               <CharacterBox label="रू rū (In preparation)" hasData={false} />
//               <CharacterBox label="रे re (In preparation)" hasData={false} />
//               <CharacterBox label="रै rai (In preparation)" hasData={false} />
//               <CharacterBox label="रो ro (In preparation)" hasData={false} />
//               <CharacterBox label="रौ rau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* la group */}
//           <AccordionSection title="ल la">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_la.JPG"
//                 label="INSN1L545_la"
//                 hasData={true}
//               />
//               <CharacterBox label="ला lā (In preparation)" hasData={false} />
//               <CharacterBox label="लि li (In preparation)" hasData={false} />
//               <CharacterBox label="ली lī (In preparation)" hasData={false} />
//               <CharacterBox label="लु lu (In preparation)" hasData={false} />
//               <CharacterBox label="लू lū (In preparation)" hasData={false} />
//               <CharacterBox label="ले le (In preparation)" hasData={false} />
//               <CharacterBox label="लै lai (In preparation)" hasData={false} />
//               <CharacterBox label="लो lo (In preparation)" hasData={false} />
//               <CharacterBox label="लौ lau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* va group */}
//           <AccordionSection title="व va">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_va.JPG"
//                 label="INSN1L545_va"
//                 hasData={true}
//               />
//               <CharacterBox label="वा vā (In preparation)" hasData={false} />
//               <CharacterBox label="वि vi (In preparation)" hasData={false} />
//               <CharacterBox label="वी vī (In preparation)" hasData={false} />
//               <CharacterBox label="वु vu (In preparation)" hasData={false} />
//               <CharacterBox label="वू vū (In preparation)" hasData={false} />
//               <CharacterBox label="वे ve (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_vai.JPG"
//                 label="INSN1L545_vai"
//                 hasData={true}
//               />
//               <CharacterBox label="वो vo (In preparation)" hasData={false} />
//               <CharacterBox label="वौ vau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* śa group */}
//           <AccordionSection title="श śa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="श śa (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_śa.JPG"
//                 label="INSN1L545_śa"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox
//                 image="/images/data/INSN1L545_śā.JPG"
//                 label="INSN1L545_śā"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox label="शि śi (In preparation)" hasData={false} />
//               <CharacterBox label="शी śī (In preparation)" hasData={false} />
//               <CharacterBox label="शु śu (In preparation)" hasData={false} />
//               <CharacterBox label="शू śū (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_śe.JPG"
//                 label="INSN1L545_śe"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox label="शै śai (In preparation)" hasData={false} />
//               <CharacterBox label="शो śo (In preparation)" hasData={false} />
//               <CharacterBox label="शौ śau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ṣa group */}
//           <AccordionSection title="ष ṣa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ष ṣa (In preparation)" hasData={false} />
//               <CharacterBox label="षा ṣā (In preparation)" hasData={false} />
//               <CharacterBox label="षि ṣi (In preparation)" hasData={false} />
//               <CharacterBox label="षी ṣī (In preparation)" hasData={false} />
//               <CharacterBox label="षु ṣu (In preparation)" hasData={false} />
//               <CharacterBox label="षू ṣū (In preparation)" hasData={false} />
//               <CharacterBox label="षे ṣe (In preparation)" hasData={false} />
//               <CharacterBox label="षै ṣai (In preparation)" hasData={false} />
//               <CharacterBox label="षो ṣo (In preparation)" hasData={false} />
//               <CharacterBox label="षौ ṣau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* sa group */}
//           <AccordionSection title="स sa">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox
//                 image="/images/data/INSN1L545_sa.JPG"
//                 label="INSN1L545_sa"
//                 hasData={true}
//               />
//               <CharacterBox label="सा sā (In preparation)" hasData={false} />
//               <CharacterBox label="सि si (In preparation)" hasData={false} />
//               <CharacterBox label="सी sī (In preparation)" hasData={false} />
//               <CharacterBox label="सु su (In preparation)" hasData={false} />
//               <CharacterBox label="सू sū (In preparation)" hasData={false} />
//               <CharacterBox label="से se (In preparation)" hasData={false} />
//               <CharacterBox label="सै sai (In preparation)" hasData={false} />
//               <CharacterBox label="सो so (In preparation)" hasData={false} />
//               <CharacterBox label="सौ sau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>

//           {/* ha group */}
//           <AccordionSection title="ह ha">
//             <div className="flex flex-wrap gap-2">
//               <CharacterBox label="ह ha (In preparation)" hasData={false} />
//               <CharacterBox
//                 image="/images/data/INSN1L545_hā.JPG"
//                 label="INSN1L545_hā"
//                 smartImage={true}
//                 hasData={true}
//               />
//               <CharacterBox label="हि hi (In preparation)" hasData={false} />
//               <CharacterBox label="ही hī (In preparation)" hasData={false} />
//               <CharacterBox label="हु hu (In preparation)" hasData={false} />
//               <CharacterBox label="हू hū (In preparation)" hasData={false} />
//               <CharacterBox label="हे he (In preparation)" hasData={false} />
//               <CharacterBox label="है hai (In preparation)" hasData={false} />
//               <CharacterBox label="हो ho (In preparation)" hasData={false} />
//               <CharacterBox label="हौ hau (In preparation)" hasData={false} />
//             </div>
//           </AccordionSection>
//         </AccordionSection>

//         <AccordionSection title="Saṃyuktavarṇa (ligatures)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>
//         <AccordionSection title="Avagraha">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Yojakacihna (hyphens)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Padavigrahasaṅketacihna">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Paṅktipūraṇasaṅketacihna (line-fillers)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Sthānapūraṇasaṅketacihna (space-fillers)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Visarga">
//           <CharacterBox
//             image="/images/data/INSN1L545_visarga.JPG"
//             label="INSN1L545_visarga"
//             hasData={true}
//           />
//         </AccordionSection>

//         <AccordionSection title="Virāma">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>

//         <AccordionSection title="Puṣpikā (symbols)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>
//         <AccordionSection title="Citra (figures)">
//           <CharacterBox label="In preparation" hasData={false} />
//         </AccordionSection>
//         {/* Aṅka (numerals) Section */}
//         <AccordionSection title="Aṅka (numerals)">
//           <div className="flex flex-wrap gap-2">
//             {Array.from({ length: 30 }).map((_, index) => {
//               const number = index + 1;
//               const data = `INSN1L545_${number}`;

//               return (
//                 <div
//                   key={index}
//                   className="border border-black w-[140px] min-h-[140px] p-2 text-center flex flex-col justify-between">
//                   <div className="flex flex-col justify-end gap-2 h-[80px]">
//                     <img
//                       src={`/images/data/${data}.JPG`}
//                       className="w-16 mx-auto h-16 object-contain"
//                       alt=""
//                       onError={(e) => {
//                         e.target.style.display = "none";
//                         e.target.parentElement.innerHTML =
//                           '<div class="w-16 mx-auto h-16 flex items-center justify-center text-gray-400 text-sm">In preparation</div>';
//                       }}
//                     />
//                     <a href={`/insn-00001/details`}>
//                       <p className="text-xs hover:text-blue-700 break-words">
//                         {data}
//                       </p>
//                     </a>
//                   </div>
//                   <p className="text-sm border-t border-black py-1">{number}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </AccordionSection>
//       </div>
//     </>
//   );
// };

// export default Palaeographical;

import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

// ── CharacterBox Component ────────────────────────────────────────────────────
const CharacterBox = ({ image, label, link, hasData = true }) => {
  const [imgError, setImgError] = useState(false);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_PATH;

  if (!hasData) {
    return (
      <div className="inline-block border border-black mb-2 w-[120px] sm:w-[140px]">
        <div className="min-h-[120px] sm:min-h-[140px] flex flex-col">
          <div className="flex-1 p-3 sm:p-4 text-center">
            <p className="mt-2 text-xs sm:text-sm text-gray-400 break-words">
              {label}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${imageBaseUrl}/${image}`
    : null;

  return (
    <div className="inline-block border border-black mb-2 w-[120px] sm:w-[140px]">
      <div className="min-h-[120px] sm:min-h-[140px] flex flex-col">
        <div className="flex-1 p-3 sm:p-4 text-center">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              className="w-12 sm:w-16 mx-auto h-12 sm:h-16 object-contain"
              alt={label}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-12 sm:w-16 mx-auto h-12 sm:h-16 flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              {label}
            </div>
          )}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="mt-2 text-xs sm:text-sm hover:text-blue-700 break-words">
                {label}
              </p>
            </a>
          ) : (
            <p className="mt-2 text-xs sm:text-sm break-words">{label}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Helper: extract trailing number from image_name ──────────────────────────
const extractSuffixNumber = (imageName) => {
  if (!imageName) return null;
  const match = imageName.match(/_(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
};

const sortNumeralItems = (items) =>
  [...items].sort((a, b) => {
    const numA = extractSuffixNumber(a.image_name) ?? Infinity;
    const numB = extractSuffixNumber(b.image_name) ?? Infinity;
    return numA - numB;
  });

// ── NumeralBox Component ──────────────────────────────────────────────────────
const NumeralBox = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_PATH;
  const imageUrl = item.image
    ? item.image.startsWith("http")
      ? item.image
      : `${imageBaseUrl}/${item.image}`
    : null;

  const displayNumber = extractSuffixNumber(item.image_name);

  return (
    <div className="border border-black w-[120px] sm:w-[140px] min-h-[120px] sm:min-h-[140px] p-2 text-center flex flex-col justify-between">
      <div className="flex flex-col justify-end gap-2 h-[70px] sm:h-[80px]">
        {imageUrl && !imgError ? (
          <img
            src={imageUrl}
            className="w-12 sm:w-16 mx-auto h-12 sm:h-16 object-contain"
            alt={item.image_name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-12 sm:w-16 mx-auto h-12 sm:h-16 flex items-center justify-center text-gray-400 text-xs">
            In preparation
          </div>
        )}
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <p className="text-xs hover:text-blue-700 break-words">
              {item.image_name}
            </p>
          </a>
        ) : (
          <p className="text-xs break-words">{item.image_name}</p>
        )}
      </div>
      <p className="text-sm border-t border-black py-1">
        {displayNumber !== null ? displayNumber : "—"}
      </p>
    </div>
  );
};

// ── Tree Node ─────────────────────────────────────────────────────────────────
// const TreeNode = ({
//   label,
//   nodeKey,
//   selectedKey,
//   onSelect,
//   children,
//   depth = 0,
// }) => {
//   const isSelected = selectedKey === nodeKey;
//   const hasChildren = React.Children.count(children) > 0;
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (selectedKey && selectedKey.startsWith(nodeKey + "_")) {
//       setOpen(true);
//     }
//   }, [selectedKey, nodeKey]);

//   const paddingLeft = depth === 0 ? "pl-3" : depth === 1 ? "pl-5" : "pl-7";

//   return (
//     <div>
//       <button
//         onClick={() => {
//           onSelect(nodeKey);
//           if (hasChildren) setOpen((o) => !o);
//         }}
//         className={`w-full text-left flex items-center justify-between gap-1 py-3 pr-3 text-sm transition-colors ${paddingLeft} ${
//           isSelected
//             ? "bg-[#3d4f39] text-white font-semibold"
//             : "bg-[#50644b] text-white"
//         } ${depth === 0 ? "font-semibold text-[0.92rem] mt-1" : "font-normal mt-0.5"}`}>
//         <span className="leading-snug">{label}</span>
//         {hasChildren && (
//           <span className="text-base shrink-0 font-bold leading-none">
//             {open ? "−" : "+"}
//           </span>
//         )}
//       </button>
//       {hasChildren && open && (
//         <div className="border-l border-[#50644b]/30 ml-3 mt-1 space-y-0.5">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// ── Tree Node ─────────────────────────────────────────────────────────────────
const TreeNode = ({
  label,
  nodeKey,
  selectedKey,
  onSelect,
  children,
  depth = 0,
  openKeys,
}) => {
  const isSelected = selectedKey === nodeKey;
  const hasChildren = React.Children.count(children) > 0;
  const open = openKeys.has(nodeKey);

  const paddingLeft = depth === 0 ? "pl-4" : depth === 1 ? "pl-7" : "pl-10";

  const depthStyles =
    depth === 0
      ? "font-semibold text-[0.93rem] mt-2 py-3"
      : depth === 1
        ? "font-normal text-[0.87rem] mt-1 py-2.5"
        : "font-normal text-[0.83rem] mt-0.5 py-2";

  return (
    <div>
      <button
        onClick={() => onSelect(nodeKey, { hasChildren, isOpen: open })}
        className={`w-full text-left flex items-center justify-between gap-2 pr-4 text-sm transition-colors ${paddingLeft} ${depthStyles} ${
          isSelected
            ? "bg-[#3d4f39] text-white"
            : depth === 0
              ? "bg-[#50644b] text-white hover:bg-[#445840]"
              : depth === 1
                ? "bg-[#4a5e45] text-white/90 hover:bg-[#3d4f39]"
                : "bg-[#445840] text-white/80 hover:bg-[#3a4c36]"
        }`}>
        <span className="leading-snug">{label}</span>
        {hasChildren && (
          <span className="text-sm shrink-0 font-bold leading-none opacity-70">
            {open ? "−" : "+"}
          </span>
        )}
      </button>
      {hasChildren && open && (
        <div className="ml-0 mt-0.5 space-y-0.5 border-l-2 border-white/10 ml-4">
          {children}
        </div>
      )}
    </div>
  );
};

// ── Sidebar Content (shared between desktop & mobile drawer) ──────────────────
const SidebarContent = ({
  sortedCategories,
  getSubCategoriesForCategory,
  getChildCategoriesForSubCategory,
  selectedKey,
  onSelect,
  openKeys,
}) => (
  <>
    <div className="p-3 bg-[#50644b] text-white text-sm font-semibold tracking-wide uppercase rounded-t-lg sticky top-0 z-10">
      Categories
    </div>
    <nav className="py-2 flex flex-col">
      {sortedCategories.map((cat) => {
        const subCats = getSubCategoriesForCategory(cat.id);
        return (
          <TreeNode
            key={cat.id}
            label={cat.name}
            nodeKey={`cat_${cat.id}`}
            selectedKey={selectedKey}
            onSelect={onSelect}
            depth={0}
            openKeys={openKeys}>
            {subCats.map((sc) => {
              const childCats = getChildCategoriesForSubCategory(sc.id);
              return (
                <TreeNode
                  key={sc.id}
                  label={sc.name}
                  nodeKey={`sub_${sc.id}`}
                  selectedKey={selectedKey}
                  onSelect={onSelect}
                  depth={1}
                  openKeys={openKeys}>
                  {childCats.map((cc) => (
                    <TreeNode
                      key={cc.id}
                      label={cc.name}
                      nodeKey={`child_${cc.id}`}
                      selectedKey={selectedKey}
                      onSelect={onSelect}
                      depth={2}
                      openKeys={openKeys}
                    />
                  ))}
                </TreeNode>
              );
            })}
          </TreeNode>
        );
      })}
    </nav>
  </>
);

// ── Main Component ────────────────────────────────────────────────────────────
const Palaeographical = () => {
  const [palaeographical, setPalaeographical] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [childCategory, setChildCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [autoSelected, setAutoSelected] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState(new Set());
  const [filters, setFilters] = useState({
    period: "All",
    script: "All",
    varna: "All",
    symbols: "All",
    citra: "All",
  });

  const drawerRef = useRef(null);
  const contentPanelRef = useRef(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/palaeographical`)
      .then((r) => setPalaeographical(r.data.data))
      .catch(console.error);
    axios
      .get(`${API_BASE_URL}/sub_categories`)
      .then((r) => setSubCategory(r.data.data))
      .catch(console.error);
    axios
      .get(`${API_BASE_URL}/categories`)
      .then((r) => setCategory(r.data.data))
      .catch(console.error);
    axios
      .get(`${API_BASE_URL}/child_categories`)
      .then((r) => setChildCategory(r.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!autoSelected && category.length > 0) {
      const first = [...category].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at),
      )[0];
      setSelectedKey(`cat_${first.id}`);
      setAutoSelected(true);
    }
  }, [category, autoSelected]);

  // Close drawer on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        drawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [drawerOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const sameId = (l, r) => l != null && r != null && String(l) === String(r);

  const sortedCategories = [...category].sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at),
  );

  const unique = (key) => [
    "All",
    ...new Set(palaeographical.map((i) => i[key]).filter(Boolean)),
  ];

  const filteredPalaeographical = palaeographical.filter((item) => {
    if (filters.period !== "All" && item.period !== filters.period)
      return false;
    if (filters.script !== "All" && item.script !== filters.script)
      return false;
    if (filters.varna !== "All" && item.varna !== filters.varna) return false;
    if (filters.symbols !== "All" && item.symbols !== filters.symbols)
      return false;
    if (filters.citra !== "All" && item.citra !== filters.citra) return false;
    return true;
  });

  const getSubCategoriesForCategory = (catId) =>
    subCategory
      .filter((sc) => sameId(sc.category_id, catId))
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  const getChildCategoriesForSubCategory = (subCatId) =>
    [
      ...childCategory.filter((cc) => sameId(cc.sub_category_id, subCatId)),
      ...filteredPalaeographical
        .filter(
          (item) =>
            sameId(item.sub_category_id, subCatId) && item.child_category,
        )
        .map((item) => item.child_category),
    ]
      .filter(
        (cc, idx, arr) =>
          cc?.id !== undefined &&
          arr.findIndex((c) => sameId(c?.id, cc.id)) === idx,
      )
      .sort(
        (a, b) => new Date(a.created_at || 0) - new Date(b.created_at || 0),
      );

  const isNumeralCat = (cat) =>
    cat.name.toLowerCase().includes("aṅka") ||
    cat.name.toLowerCase().includes("anka") ||
    cat.name.toLowerCase().includes("numeral");

  // const resolveContent = (key) => {
  //   if (!key) return null;

  //   if (key.startsWith("cat_")) {
  //     const catId = key.replace("cat_", "");
  //     const cat = category.find((c) => String(c.id) === catId);
  //     const directItems = filteredPalaeographical
  //       .filter(
  //         (item) =>
  //           sameId(item.category_id, catId) &&
  //           item.sub_category_id == null &&
  //           item.child_category_id == null,
  //       )
  //       .sort(
  //         (a, b) => new Date(a.created_at || 0) - new Date(b.created_at || 0),
  //       );

  //     return {
  //       title: cat?.name,
  //       items: directItems,
  //       isNumeral: cat ? isNumeralCat(cat) : false,
  //     };
  //   }

  //   if (key.startsWith("sub_")) {
  //     const subId = key.replace("sub_", "");
  //     const sc = subCategory.find((s) => String(s.id) === subId);
  //     const parentCat = category.find((c) => sameId(c.id, sc?.category_id));
  //     const childCats = getChildCategoriesForSubCategory(subId);

  //     const items =
  //       childCats.length === 0
  //         ? filteredPalaeographical.filter((p) =>
  //             sameId(p.sub_category_id, subId),
  //           )
  //         : [];

  //     return {
  //       title: sc?.name,
  //       items,
  //       isNumeral: parentCat ? isNumeralCat(parentCat) : false,
  //       hint:
  //         childCats.length > 0
  //           ? "Select a sub-section from the left to view items."
  //           : null,
  //     };
  //   }

  //   if (key.startsWith("child_")) {
  //     const childId = key.replace("child_", "");
  //     const cc =
  //       childCategory.find((c) => String(c.id) === childId) ||
  //       filteredPalaeographical.find((p) =>
  //         sameId(p.child_category?.id, childId),
  //       )?.child_category;

  //     const parentSub = subCategory.find((s) =>
  //       sameId(s.id, cc?.sub_category_id),
  //     );
  //     const parentCat = category.find((c) =>
  //       sameId(c.id, parentSub?.category_id),
  //     );

  //     const items = filteredPalaeographical.filter(
  //       (p) =>
  //         sameId(p.child_category_id, childId) ||
  //         sameId(p.child_category?.id, childId),
  //     );

  //     return {
  //       title: cc?.name,
  //       items,
  //       isNumeral: parentCat ? isNumeralCat(parentCat) : false,
  //     };
  //   }

  //   return null;
  // };

  const getOpenPathForNode = (key, options = {}) => {
    if (!key) return [];

    if (key.startsWith("cat_")) {
      const catId = key.replace("cat_", "");
      const hasSubCategories = getSubCategoriesForCategory(catId).length > 0;
      return options.hasChildren ?? hasSubCategories ? [key] : [];
    }

    if (key.startsWith("sub_")) {
      const subId = key.replace("sub_", "");
      const currentSubCategory = subCategory.find((item) => sameId(item.id, subId));

      if (!currentSubCategory) return [];

      const hasChildCategories =
        options.hasChildren ?? getChildCategoriesForSubCategory(subId).length > 0;
      const path = [`cat_${currentSubCategory.category_id}`];

      if (hasChildCategories) {
        path.push(key);
      }

      return path;
    }

    if (key.startsWith("child_")) {
      const childId = key.replace("child_", "");
      const currentChildCategory =
        childCategory.find((item) => sameId(item.id, childId)) ||
        filteredPalaeographical.find((item) => sameId(item.child_category?.id, childId))
          ?.child_category;
      const parentSubId = currentChildCategory?.sub_category_id;

      if (!parentSubId) return [];

      const parentSubCategory = subCategory.find((item) => sameId(item.id, parentSubId));

      if (!parentSubCategory) return [];

      return [`cat_${parentSubCategory.category_id}`, `sub_${parentSubCategory.id}`];
    }

    return [];
  };

  const getClosedPathForNode = (key) => {
    if (!key) return [];

    if (key.startsWith("cat_")) {
      return [];
    }

    if (key.startsWith("sub_")) {
      const subId = key.replace("sub_", "");
      const currentSubCategory = subCategory.find((item) => sameId(item.id, subId));

      return currentSubCategory ? [`cat_${currentSubCategory.category_id}`] : [];
    }

    if (key.startsWith("child_")) {
      const childId = key.replace("child_", "");
      const currentChildCategory =
        childCategory.find((item) => sameId(item.id, childId)) ||
        filteredPalaeographical.find((item) => sameId(item.child_category?.id, childId))
          ?.child_category;
      const parentSubId = currentChildCategory?.sub_category_id;

      if (!parentSubId) return [];

      const parentSubCategory = subCategory.find((item) => sameId(item.id, parentSubId));

      return parentSubCategory
        ? [`cat_${parentSubCategory.category_id}`, `sub_${parentSubCategory.id}`]
        : [];
    }

    return [];
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 1200, behavior: "smooth" });
  // };

  const resolveContent = (key) => {
    if (!key) return null;

    if (key.startsWith("cat_")) {
      const catId = key.replace("cat_", "");
      const cat = category.find((c) => String(c.id) === catId);
      const subCats = getSubCategoriesForCategory(catId);

      // If category has sub-categories → show hint only, never show category-level items
      if (subCats.length > 0) {
        return {
          title: cat?.name,
          items: [],
          isNumeral: cat ? isNumeralCat(cat) : false,
          hint: "Select a sub-section from the left to view items.",
        };
      }

      // No sub-categories → show direct items
      const directItems = filteredPalaeographical
        .filter(
          (item) =>
            sameId(item.category_id, catId) &&
            item.sub_category_id == null &&
            item.child_category_id == null,
        )
        .sort(
          (a, b) => new Date(a.created_at || 0) - new Date(b.created_at || 0),
        );

      return {
        title: cat?.name,
        items: directItems,
        isNumeral: cat ? isNumeralCat(cat) : false,
      };
    }

    if (key.startsWith("sub_")) {
      const subId = key.replace("sub_", "");
      const sc = subCategory.find((s) => String(s.id) === subId);
      const parentCat = category.find((c) => sameId(c.id, sc?.category_id));
      const childCats = getChildCategoriesForSubCategory(subId);

      // If sub-category has child categories → show hint only, never show sub-level items
      if (childCats.length > 0) {
        return {
          title: sc?.name,
          items: [],
          isNumeral: parentCat ? isNumeralCat(parentCat) : false,
          hint: "Select a sub-section from the left to view items.",
        };
      }

      // No child categories → show direct items
      const items = filteredPalaeographical.filter((p) =>
        sameId(p.sub_category_id, subId),
      );

      return {
        title: sc?.name,
        items,
        isNumeral: parentCat ? isNumeralCat(parentCat) : false,
      };
    }

    if (key.startsWith("child_")) {
      const childId = key.replace("child_", "");

      // Look up the child category from state first, then fall back to embedded objects
      const cc =
        childCategory.find((c) => String(c.id) === childId) ||
        filteredPalaeographical
          .find((p) => sameId(p.child_category?.id, childId))?.child_category;

      const parentSub = subCategory.find((s) =>
        sameId(s.id, cc?.sub_category_id),
      );
      const parentCat = category.find((c) =>
        sameId(c.id, parentSub?.category_id),
      );

      const items = filteredPalaeographical.filter(
        (p) =>
          sameId(p.child_category_id, childId) ||
          sameId(p.child_category?.id, childId),
      );

      return {
        title: cc?.name,
        items,
        isNumeral: parentCat ? isNumeralCat(parentCat) : false,
      };
    }

    return null;
  };
  const content = resolveContent(selectedKey);

  const handleTreeSelect = (key, options = {}) => {
    setSelectedKey(key);
    const nextOpenPath =
      options.hasChildren && options.isOpen
        ? getClosedPathForNode(key)
        : getOpenPathForNode(key, options);

    setOpenKeys(new Set(nextOpenPath));

    // const shouldScrollToTop =
    //   (key.startsWith("cat_") && !options.hasChildren) ||
    //   (key.startsWith("sub_") && !options.hasChildren) ||
    //   key.startsWith("child_");

    // if (shouldScrollToTop) {
    //   scrollToTop();
    // }

    if (drawerOpen && !options.hasChildren) {
      setDrawerOpen(false);
    }
  };

  const handleFilterChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const resetFilters = () =>
    setFilters({
      period: "All",
      script: "All",
      varna: "All",
      symbols: "All",
      citra: "All",
    });

  const sidebarProps = {
    sortedCategories,
    getSubCategoriesForCategory,
    getChildCategoriesForSubCategory,
    selectedKey,
    onSelect: handleTreeSelect,
    openKeys,
  };

  // Derive current category label for the mobile header button
  const selectedLabel = (() => {
    if (!selectedKey || !content?.title) return "Select Category";
    return content.title.length > 22
      ? content.title.slice(0, 22) + "…"
      : content.title;
  })();

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] sm:h-[50vh] mt-12 flex items-center justify-center">
        <img
          src="images/inscription/main.jpg"
          alt="Inscriptions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-16 left-4 sm:left-6 z-10 text-white p-3 flex items-center gap-2 text-sm sm:text-base leading-6 tracking-wide">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="opacity-80">Palaeographical Database</span>
        </div>
        <h1 className="relative px-4 z-10 text-2xl sm:text-4xl md:text-5xl text-white font-semibold text-center leading-tight">
          Palaeographical Database of Inscriptions
        </h1>
      </div>

      {/* Intro */}
      <div className="px-6 lg:px-20 mx-auto py-10 sm:py-16">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4">
          Database of Palaeographical and Visual Features of Inscriptions
        </h2>
        <p className="text-base sm:text-lg mb-8 text-justify">
          Inscriptions are among the earliest forms of writing in human
          civilisation. This initiative aims to bring together palaeographic
          research to build a comprehensive, evolving repository of
          inscriptional features from Nepal across key historical periods,
          including the Licchavi, Malla, and Shah/Rana eras. The project enables
          both scholars and the wider public to explore, compare, and analyse
          inscriptions from the region. By examining dated and undated materials
          side by side, readers can better identify stylistic characteristics
          and historical patterns. Beyond textual analysis, the study also sheds
          light on craftsmanship, production techniques, usage contexts, and
          intellectual traditions, with particular attention to the evolution of
          scripts and visual paratextual elements.
        </p>

        <div className="max-w-3xl mx-auto px-4 pb-10 sm:pb-12 text-center text-sm leading-relaxed">
          <p className="font-medium break-words">
            नातिकृशैर्नातिदीर्घैर्ह्रस्वदीर्घादिलक्षितैः ।
          </p>
          <p className="font-medium break-words">
            सम्पूर्णावयवैर्मात्राबिन्दुसंयोगलक्षितै: ॥
          </p>
          <p>nātikṛśair nātidīrghair hrasvadīrghādilakṣitaiḥ |</p>
          <p>sampūrṇāvayavair mātrābindusaṃyogalakṣitaiḥ ||</p>
          <p className="mt-2">
            [The letters should not be] too broad or too thin,{" "}
            <br className="hidden sm:block" />
            the short and long vowel signs [should be] marked [properly],{" "}
            <br className="hidden sm:block" />
            all parts [of the letters should be] inscribed [fully],{" "}
            <br className="hidden sm:block" />
            [and] the dots and conjunctions [should be] marked [clearly].
          </p>
          <p className="text-xs mt-3 text-gray-600">
            (<span className="italic">Hayaśīrṣapañcarātra,</span> 2.31.11)
          </p>
          <div className="mt-4 flex justify-center">
            <div className="cursor-pointer w-full sm:w-3/4">
              <audio controls controlsList="nodownload" className="w-full">
                <source src="/images/database.wav" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        <h2 className="mb-6 sm:mb-8 text-lg sm:text-2xl text-center">
          Our database is under development and continues to expand as new
          materials are added on ongoing basis. Visit and explore the
          collection!
        </h2>

        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-6">
          {[
            { key: "period", label: "Period", allLabel: "All Periods" },
            { key: "script", label: "Script", allLabel: "All Scripts" },
            { key: "varna", label: "Varṇa", allLabel: "All Varṇa" },
            {
              key: "symbols",
              label: "Symbols, Signs",
              allLabel: "All Symbols",
            },
            { key: "citra", label: "Citra (figures)", allLabel: "All Citra" },
          ].map(({ key, label, allLabel }) => (
            <div key={key}>
              <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                {label}
              </label>
              <select
                className="border cursor-pointer p-2 sm:p-3 rounded w-full text-sm"
                value={filters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}>
                {unique(key).map((v) => (
                  <option key={v} value={v}>
                    {v === "All" ? allLabel : v}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-8 sm:mb-10">
          <button
            onClick={resetFilters}
            className="px-4 sm:px-6 py-2 border cursor-pointer rounded text-sm hover:bg-gray-100 transition">
            Reset Filters
          </button>
        </div>
      </div>

      {/* ── Two-Panel Layout ─────────────────────────────────────────────────── */}
      <div className="px-6 lg:px-20 mx-auto pb-24">
        {/* Mobile/Tablet: Category toggle button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#50644b] text-white text-sm font-medium rounded-lg shadow-sm w-full sm:w-auto">
            {/* Hamburger icon */}
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
            <span>Categories</span>
            {selectedKey && content?.title && (
              <>
                <span className="opacity-50 mx-1">·</span>
                <span className="opacity-80 truncate">{selectedLabel}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex gap-6 lg:gap-16 min-h-[500px] lg:min-h-[600px]">
          {/* ── Left: Desktop Sidebar ───────────────────────────────────────── */}
          {/* <aside className="hidden lg:block w-72 shrink-0  border border-gray-200 backdrop-blur-xl rounded-lg overflow-y-auto self-start  sticky top-4">
            <SidebarContent {...sidebarProps} />
          </aside> */}
          {/* ── Left: Desktop Sidebar ───────────────────────────────────────── */}
          <aside className="hidden lg:block w-96 shrink-0 border border-gray-200 rounded-lg overflow-y-auto self-start sticky top-4 ">
            <SidebarContent {...sidebarProps} />
          </aside>

          {/* ── Right: Content Panel ──────────────────────────────────────── */}
          <div
            ref={contentPanelRef}
            className="flex-1 p-4 sm:p-6 overflow-y-auto border border-gray-200 rounded-lg min-w-0 max-h-[80vh] self-start lg:sticky top-24">
            {!selectedKey ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 gap-3 py-16 sm:py-20">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
                <p className="text-base sm:text-lg font-medium">
                  Select a category
                </p>
                <p className="text-sm max-w-xs">
                  {window.innerWidth < 1024
                    ? 'Tap "Categories" above to browse.'
                    : "Click on any category, sub-category, or section to view its palaeographical items."}
                </p>
              </div>
            ) : content ? (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  {content.title}
                </h3>

                {content.hint && (
                  <p className="text-sm text-gray-500 italic mb-4 sm:mb-6">
                    {content.hint}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 sm:gap-6">
                  {content.items.length > 0
                    ? content.isNumeral
                      ? sortNumeralItems(content.items).map((item) => (
                          <NumeralBox key={item.id} item={item} />
                        ))
                      : [...content.items]
                          .sort((a, b) => {
                            const aOrder = a.order ?? null;
                            const bOrder = b.order ?? null;
                            if (aOrder === null && bOrder === null) return 0;
                            if (aOrder === null) return 1;
                            if (bOrder === null) return -1;
                            return aOrder - bOrder;
                          })
                          .map((item) => (
                            <CharacterBox
                              key={item.id}
                              image={item.image}
                              label={item.image_name || item.name || "Untitled"}
                              link={item.url || null}
                              hasData={true}
                            />
                          ))
                    : //  content.items.map((item) => (
                      //     <CharacterBox
                      //       key={item.id}
                      //       image={item.image}
                      //       label={item.image_name || item.name || "Untitled"}
                      //       link={item.url || null}
                      //       hasData={true}
                      //     />
                      //   ))
                      !content.hint && (
                        <CharacterBox
                          label={`${content.title} (In preparation)`}
                          hasData={false}
                        />
                      )}
                </div>
              </>
            ) : (
              <CharacterBox label="In preparation" hasData={false} />
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer Overlay ──────────────────────────────────────────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel */}
          <div
            ref={drawerRef}
            className="absolute top-12 left-0 h-full w-[280px] sm:w-[320px] backdrop-blur-lg shadow-2xl flex flex-col overflow-hidden"
            style={{ animation: "slideInLeft 0.25s ease-out" }}>
            {/* Drawer header with close button */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#50644b]">
              <span className="text-white font-semibold text-sm tracking-wide uppercase">
                Categories
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded"
                aria-label="Close categories">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable tree */}
            <div className="flex-1 overflow-y-auto">
              <SidebarContent {...sidebarProps} />
            </div>
          </div>
        </div>
      )}

      {/* Drawer animation keyframe */}
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Palaeographical;

