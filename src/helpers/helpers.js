import CarSecure from "../Images/Car Secure.png";
import Mern from "../Images/Mern.png";
import Pictures from "../Images/Pictures.png";
import Quotes from "../Images/Quotes.png";
import Weather from "../Images/Weather.png";
import Amazon from "../Images/Amazon.png";

export const getAltura = (altura) => {
    var posicion;
    if (altura >= 20) {
        posicion = "Sticky";
    } else {
        posicion = "Absolute";
    }
    return posicion;
};

export const portfolio = [{
        fondo: `${CarSecure}`,
        titulo: "Car Secures",
        descripcion: "App to quote the insurance of a vehicle model.",
        codigo: "https://github.com/Bobertwest/Cotizador-de-seguros/tree/master/cotizador-seguros-autos",
        web: "https://bobertwest.github.io/Cotizador-de-seguros/",
    },
    {
        fondo: `${Quotes}`,
        titulo: "Daily Phrase",
        descripcion: "App that gives a daily quote from a famous person in history.",
        codigo: "https://github.com/Bobertwest/Daily-Quotes",
        web: "https://bobertwest.github.io/Daily-Quotes/",
    },
    {
        fondo: `${Weather}`,
        titulo: "Weather app",
        descripcion: "Weather engine, shows the specific weather in a city.",
        codigo: "https://github.com/Bobertwest/Clima-app",
        web: "https://bobertwest.github.io/Clima-app/",
    },
    {
        fondo: `${Mern}`,
        titulo: "Mern Task",
        descripcion: "Mern stack App, that allows manage projects and tasks.",
        codigo: "https://github.com/Bobertwest/Client-MertStack",
        web: "https://mern-app-task.netlify.app/",
    },
    {
        fondo: `${Pictures}`,
        titulo: "Pictures Bay",
        descripcion: "Just another Image engine.",
        codigo: "https://github.com/Bobertwest/Picture-bay",
        web: "https://bobertwest.github.io/Picture-bay/",
    },
    {
        fondo: `${Amazon}`,
        titulo: "Amazon clone",
        descripcion: "An amazon clone, you can register, sign in, add and delete items from cart.",
        codigo: "https://github.com/Bobertwest/Amazon-clone/tree/master/amazon-clone",
        web: "https://clone-ba0bf.web.app/",
    },
];

export const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};