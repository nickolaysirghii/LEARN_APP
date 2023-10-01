import { GitArray } from "./gitData";
import { english } from "./englishData";
import { reactArray } from "./reactData";
import { JavaScript } from "./JSData";



export const headFront = [
    {
        id:1,
        title: "English",
        image: "url(https://static.vecteezy.com/system/resources/thumbnails/011/571/351/small/circle-flag-of-uk-free-png.png)",
        url: "/",
        arr: english,
        sill: JSON.parse(localStorage.getItem("English")) ?
              JSON.parse(localStorage.getItem("English")) : 0,

    },
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
        title: "Deutsch",
        image: "url(https://play-lh.googleusercontent.com/QCOAKfY91JU_JZvTz-BNQCWvYTmE79i6uJcdkI2v-vH-Agqqk16tEWPBnwADX0w_Yv8)",
        url: "/sql",
        arr: english,
        sill: JSON.parse(localStorage.getItem("English")) ?
              JSON.parse(localStorage.getItem("English")) : 0,
    },
    {
        id:6,
        title: "Something",
        image: "url(https://www.neonvibes.co.uk/cdn/shop/products/NV-Do-Something-Greatneonvibes.co.ukLEDneonsignsMadeintheUK_4_2000x.jpg?v=1665760799)",
        url: "/sql",
        arr: english,
        sill: JSON.parse(localStorage.getItem("English")) ?
              JSON.parse(localStorage.getItem("English")) : 0,
    }
]