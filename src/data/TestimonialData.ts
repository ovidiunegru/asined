interface DataType {
  id: number;
  page: string;
  avatar: string;
  name: string;
  designation: string;
  desc: string;
}

const testi_data: DataType[] = [
  {
    id: 1,
    page: "asined",
    avatar: "/assets/imgs/resources/testimonials-2.png",
    name: "Mihai Radu",
    designation: "Production Manager, AutoMec",
    desc: "“Asined delivered high-precision plastic components for our automotive line. Their attention to detail and delivery time were outstanding.”"
  },
  {
    id: 2,
    page: "asined",
    avatar: "/assets/imgs/resources/testimonials-1.png",
    name: "Laura Marin",
    designation: "Head of Product Development, MedForm",
    desc: "“The prototype molds we received from Asined were flawless. Their expertise helped us speed up development dramatically.”"
  },
  {
    id: 3,
    page: "asined",
    avatar: "/assets/imgs/resources/testimonials-2.png",
    name: "Victor Ionescu",
    designation: "Procurement Lead, Eltronix SRL",
    desc: "“We've worked with Asined for several tool and mold projects. Reliable, precise, and great communication.”"
  },
  {
    id: 4,
    page: "asined",
    avatar: "/assets/imgs/resources/testimonials-1.png",
    name: "Ioana Petrescu",
    designation: "Operations Manager, GreenPlast Systems",
    desc: "“Asined helped reduce our cycle times by refining mold design. Exceptional service and engineering insight.”"
  }
];

export default testi_data;
