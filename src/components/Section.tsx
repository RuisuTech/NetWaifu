import React from "react";

export default function Section () {
    return (
        <div className="bg-black flex place-content-center mt-2 p-24">
            <div className="text-white place-content-center">
                <h1 className="font-bold text-5xl">Disfruta en tu TV</h1>
                <h2 className="text-2xl">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, <br /> reproductores de Blu-ray y más.</h2>
            </div>
            <div className="flex bg-[url('./../tv.png')] bg-center bg-cover h-[450px] w-[600px] place-content-center z-10">
                <img className="w-[400px] h-[210px] mt-28 z-0" src="./../bg-port.webp" alt="image" />
            </div>
        </div>
        
    );
}
