interface DataType {
   id: number;
   page:string;
   thumb: string;
   icon: string;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   // Main services from asined.ro
   {
      id: 1,
      page:"home_2",
      thumb: "/assets/imgs/about/modling_resized.jpg",
      icon: "icon-roof",
      title: "Plastic Modling",
      desc: "We have the technological capability to inject plastic parts into molds produced by customers or our own molds."
   },
   {
      id: 2,
      page:"home_2",
      thumb: "/assets/imgs/service/service-5.jpg",
      icon: "icon-roof-8",
      title: "Laser cutting textile materials",
      desc: "Laser cutting is a process without any contact between the laser cutter and material, thus precise cuts are achieved, without deforming the fabric."
   },
   {
      id: 3,
      page:"home_2",
      thumb: "/assets/imgs/service/service-6.jpg",
      icon: "icon-roof-2",
      title: "Ultrasonic sewing textile materials",
      desc: "Ensure a perfect bonding (even of very thin materials), is a versatile solution, which offers strengthened seams."
   },
   {
      id: 4,
      page:"home_2",
      thumb: "/assets/imgs/service/service-7.jpg",
      icon: "icon-roof-3",
      title: "Plastics injection",
      desc: "We have the technological capability to inject plastic parts into molds produced by customers or our own molds."
   },

   // Main products from asined.ro (generic desc, as no details on site)
   {
      id: 5,
      page:"home_2",
      thumb: "/assets/imgs/asined/huse-pentru-paleti.jpg",
      icon: "icon-box",
      title: "Huse pentru paleti (Covers for pallets)",
      desc: "Protective covers designed for pallets, ideal for storage and transport."
   },
   {
      id: 6,
      page:"home_2",
      thumb: "/assets/imgs/asined/cearceaf-si-perne.jpg",
      icon: "icon-box",
      title: "Set cearceaf + fata de perna de unica folosinta (Disposable sheet + pillowcase set)",
      desc: "Disposable bedding set for hygiene and convenience."
   },
   {
      id: 7,
      page:"home_2",
      thumb: "/assets/imgs/asined/husa-saltea-sezlong.jpg",
      icon: "icon-box",
      title: "Husa de protectie saltea sezlong (Protective cover for sunbed mattress)",
      desc: "Protective cover for sunbed mattresses, ensuring cleanliness and durability."
   },
   {
      id: 8,
      page:"home_2",
      thumb: "/assets/imgs/asined/masca-3-straturi.jpg",
      icon: "icon-box",
      title: "Masca de unica folosinta, certificata cu 3 straturi (Disposable mask, certified, 3 layers)",
      desc: "Certified disposable mask with three protective layers."
   },
   {
      id: 9,
      page:"home_2",
      thumb: "/assets/imgs/service/service-7.jpg",
      icon: "icon-box",
      title: "Cearceaf si fete de perna (Sheets and pillowcases)",
      desc: "High-quality sheets and pillowcases for various uses."
   },
   {
      id: 10,
      page:"home_2",
      thumb: "/assets/imgs/asined/viziere-protectie.jpg",
      icon: "icon-box",
      title: "Viziere protectie (Protective visors)",
      desc: "Protective visors for face protection in various environments."
   },
   {
      id: 11,
      page:"home_2",
      thumb: "/assets/imgs/asined/combinezon-fas-tpu.png",
      icon: "icon-box",
      title: "Combinezon de protectie din fas impermeabil cu membrana TPU (Protective overall from waterproof fabric with TPU membrane)",
      desc: "Waterproof protective overall with TPU membrane for enhanced safety."
   },
   {
      id: 12,
      page:"home_2",
      thumb: "/assets/imgs/service/service-1.jpg",
      icon: "icon-box",
      title: "Combinezon biochimic de protectie - AVIZAT (Certified biochemical protective overall)",
      desc: "Certified biochemical protective overall for specialized use."
   },
   {
      id: 13,
      page:"home_2",
      thumb: "/assets/imgs/asined/sac-mortuar.jpg",
      icon: "icon-box",
      title: "Sac mortuar 2.3 x 1 m cu dublura (Body bag 2.3 x 1 m with lining)",
      desc: "Body bag with lining, dimensions 2.3 x 1 m."
   },
   {
      id: 14,
      page:"home_2",
      thumb: "/assets/imgs/asined/combinezon-tnt.jpg",
      icon: "icon-box",
      title: "Combinezon de unica folosinta cu gluga si buzunar din TNT (Disposable overall with hood and pocket from TNT)",
      desc: "Disposable overall with hood and pocket, made from TNT material."
   },

   // Repeat for inner_page for consistency
   {
      id: 1,
      page:"inner_page",
      thumb: "/assets/imgs/asined/molding_resized_340_247.png",
      icon: "icon-roof",
      title: "Plastic Modling",
      desc: "We have the technological capability to inject plastic parts into molds produced by customers or our own molds."
   },
   {
      id: 2,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-5.jpg",
      icon: "icon-roof-8",
      title: "Laser cutting textile materials",
      desc: "Laser cutting is a process without any contact between the laser cutter and material, thus precise cuts are achieved, without deforming the fabric."
   },
   // {
   //    id: 3,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/service/service-6.jpg",
   //    icon: "icon-roof-2",
   //    title: "Ultrasonic sewing textile materials",
   //    desc: "Ensure a perfect bonding (even of very thin materials), is a versatile solution, which offers strengthened seams."
   // },
   // {
   //    id: 4,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/service/service-7.jpg",
   //    icon: "icon-roof-3",
   //    title: "Plastics injection",
   //    desc: "We have the technological capability to inject plastic parts into molds produced by customers or our own molds."
   // },
   // // Products for inner_page
   // {
   //    id: 5,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/huse-pentru-paleti.jpg",
   //    icon: "icon-box",
   //    title: "Huse pentru paleti (Covers for pallets)",
   //    desc: "Protective covers designed for pallets, ideal for storage and transport."
   // },
   // {
   //    id: 6,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/cearceaf-si-perne.jpg",
   //    icon: "icon-box",
   //    title: "Set cearceaf + fata de perna de unica folosinta (Disposable sheet + pillowcase set)",
   //    desc: "Disposable bedding set for hygiene and convenience."
   // },
   // {
   //    id: 7,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/husa-saltea-sezlong.jpg",
   //    icon: "icon-box",
   //    title: "Husa de protectie saltea sezlong (Protective cover for sunbed mattress)",
   //    desc: "Protective cover for sunbed mattresses, ensuring cleanliness and durability."
   // },
   // {
   //    id: 8,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/masca-3-straturi.jpg",
   //    icon: "icon-box",
   //    title: "Masca de unica folosinta, certificata cu 3 straturi (Disposable mask, certified, 3 layers)",
   //    desc: "Certified disposable mask with three protective layers."
   // },
   // {
   //    id: 9,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/service/service-7.jpg",
   //    icon: "icon-box",
   //    title: "Cearceaf si fete de perna (Sheets and pillowcases)",
   //    desc: "High-quality sheets and pillowcases for various uses."
   // },
   // {
   //    id: 10,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/viziere-protectie.jpg",
   //    icon: "icon-box",
   //    title: "Viziere protectie (Protective visors)",
   //    desc: "Protective visors for face protection in various environments."
   // },
   // {
   //    id: 11,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/combinezon-fas-tpu.png",
   //    icon: "icon-box",
   //    title: "Combinezon de protectie din fas impermeabil cu membrana TPU (Protective overall from waterproof fabric with TPU membrane)",
   //    desc: "Waterproof protective overall with TPU membrane for enhanced safety."
   // },
   // {
   //    id: 12,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/service/service-1.jpg",
   //    icon: "icon-box",
   //    title: "Combinezon biochimic de protectie - AVIZAT (Certified biochemical protective overall)",
   //    desc: "Certified biochemical protective overall for specialized use."
   // },
   // {
   //    id: 13,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/sac-mortuar.jpg",
   //    icon: "icon-box",
   //    title: "Sac mortuar 2.3 x 1 m cu dublura (Body bag 2.3 x 1 m with lining)",
   //    desc: "Body bag with lining, dimensions 2.3 x 1 m."
   // },
   // {
   //    id: 14,
   //    page:"inner_page",
   //    thumb: "/assets/imgs/asined/combinezon-tnt.jpg",
   //    icon: "icon-box",
   //    title: "Combinezon de unica folosinta cu gluga si buzunar din TNT (Disposable overall with hood and pocket from TNT)",
   //    desc: "Disposable overall with hood and pocket, made from TNT material."
   // },
];

export default service_data;