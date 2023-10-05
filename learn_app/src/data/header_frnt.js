import { GitArray } from "./gitData";
import { english } from "./englishData";
import { reactArray } from "./reactData";
import { JavaScript } from "./JSData";
import { allTogether } from "./allTogether/allData";
import { LinuxArray } from "./linuxData";



export const headFront = [
   
    {
        id:2,
        title: "Git",
        image: "url(https://avatars.githubusercontent.com/u/18133?s=200&v=4)",
        url: "/git2",
        arr: GitArray,
        sill: JSON.parse(localStorage.getItem("Git")) ?
              JSON.parse(localStorage.getItem("Git")) : 0,
    },
    {
        id:3,
        title: "JS",
        image: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png)",
        url: "/JavaScript",
        arr: JavaScript,
        sill: JSON.parse(localStorage.getItem("JS")) ?
              JSON.parse(localStorage.getItem("JS")) : 0,

    },
    {
        id:4,
        title: "React",
        image: "url(https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png)",
        url: "/sql",
        arr: reactArray,
        sill: JSON.parse(localStorage.getItem("English")) ?
              JSON.parse(localStorage.getItem("English")) : 0,
    },
    {
        id:5,
        title: "Linux",
        image: "url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/a4/54f3b90a5d4aa29c1d838fa815dbf6/LFCA.png?auto=format%2Ccompress&dpr=1)",
        url: "/linux",
        arr: LinuxArray,
        sill: JSON.parse(localStorage.getItem("Linux")) ?
              JSON.parse(localStorage.getItem("Linux")) : 0,
    },
    {
        id:6,
        title: "AllTogether",
        image: "url(https://www.neonvibes.co.uk/cdn/shop/products/NV-Do-Something-Greatneonvibes.co.ukLEDneonsignsMadeintheUK_4_2000x.jpg?v=1665760799)",
        url: "/AllTogether",
        arr: allTogether,
        sill: JSON.parse(localStorage.getItem("AllTogether")) ?
              JSON.parse(localStorage.getItem("AllTogether")) : 0,
    }
]