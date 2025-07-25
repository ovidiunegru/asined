interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        mega_menus?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: true,
        // sub_menus: [
        //     { link: "/", title: "Home One" },
        //     { link: "/home-two", title: "Home Two" },
        //     { link: "/home-three", title: "Home Three" },
        //     { link: "/dark-home", title: "Home Dark" },
        // ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About Us",
        link: "/about",
    },
    // {
    //     id: 7,
    //     has_dropdown: false,
    //     title: "About Us",
    //     link: "/about-us",
    // },
    {
        id: 3,
        title: "Services",
        link: "/services/plastic-molding",
        has_dropdown: true,
        sub_menus: [
            // { link: "/services", title: "Services" },
            { link: "/services/industrial-textile-manufacturing", title: "Industrial Textile Manufacturing" },
            { link: "/services/plastic-molding", title: "Plastic Molding" }
        ],
    },
    // {
    //     id: 4,
    //     title: "Pages",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         {
    //             link: "#",
    //             title: "Projects",
    //             mega_menus: [
    //                 {
    //                     title: "Projects",
    //                     link: "/projects",
    //                 },
    //                 {
    //                     title: "Projects Details",
    //                     link: "/project-details",
    //                 }
    //             ],
    //         },
    //         { link: "/team", title: "Team" },
    //         { link: "/team-details", title: "Team Details" },
    //         { link: "/faq", title: "Faq's" },
    //         { link: "/not-found", title: "Error Page" },
    //     ],
    // },
    {
        id:8,
        link: "/faq",
        title: "Faq's" ,
        has_dropdown: false,
    },
    {
        id: 5,
        title: "Blog",
        link: "/blog-standard",
        has_dropdown: true,
        // sub_menus: [
        //     { link: "/blog-standard", title: "Blog Default" },
        //     { link: "/blog-grid", title: "Blog Grid" },
        //     { link: "/blog-details", title: "Blog Details" },
        // ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;