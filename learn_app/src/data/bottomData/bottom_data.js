import { english } from "../englishData";
import { polishLanguage } from "./polish";
import { ccoountries } from "./countries";


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
        id:2,
        title: "Polish",
        image: "url(https://community.akamai.steamstatic.com/economy/image/JK4FciBLIAu85jMKoBcrnn81NafvG879F-ZdiplECbXpuAkezN_5XTD5F-bqb_wQ/360fx360f)",
        url: "/polish",
        arr: polishLanguage,
        sill: JSON.parse(localStorage.getItem("Polish")) ?
              JSON.parse(localStorage.getItem("Polish")) : 0,

    },
    {
        id:3,
        title: "Countries",
        image: "url(https://storage.googleapis.com/siteassetsswd/198/slideshow/663/20200625074107_56_o_1ba8en13b14c61b15hei1bd63jlc.jpg)",
        url: "/countries",
        arr: ccoountries,
        sill: JSON.parse(localStorage.getItem("Countries")) ?
              JSON.parse(localStorage.getItem("Countries")) : 0,

    }
]