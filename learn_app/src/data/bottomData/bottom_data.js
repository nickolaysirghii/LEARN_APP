import { english } from "../englishData";
import { polishLanguage } from "./polish";


export const bottomHeader = [
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
        id:1,
        title: "Polish",
        image: "url(https://community.akamai.steamstatic.com/economy/image/JK4FciBLIAu85jMKoBcrnn81NafvG879F-ZdiplECbXpuAkezN_5XTD5F-bqb_wQ/360fx360f)",
        url: "/polish",
        arr: polishLanguage,
        sill: JSON.parse(localStorage.getItem("Polish")) ?
              JSON.parse(localStorage.getItem("Polish")) : 0,

    }
]