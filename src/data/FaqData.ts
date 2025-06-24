interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      showAnswer: true,
      title: "What products does Asined offer?",
      desc: "Asined designs and manufactures a wide range of utilitarian products from industrial textile confections and plastics, including covers for pallets, disposable bedding, protective covers, masks, visors, and more.",
   },
   {
      id: 2,
      page: "home_2",
      showAnswer: false,
      title: "What industries does Asined serve?",
      desc: "We serve clients in the automotive, railway, construction, banking, and other industries requiring textile and plastic solutions for protection, storage, and transport.",
   },
   {
      id: 3,
      page: "home_2",
      showAnswer: false,
      title: "What technologies does Asined use?",
      desc: "We use manual and mechanical sewing, laser cutting, ultrasonic welding, and plastics injection technologies to deliver high-quality products.",
   },
   {
      id: 4,
      page: "home_2",
      showAnswer: false,
      title: "How can I request a custom product?",
      desc: "Contact us via phone or email to discuss your requirements. Our team will work with you to design and manufacture products tailored to your needs.",
   },
];

export default faq_data;