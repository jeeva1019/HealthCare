import { useState } from "react";
import backView from "../../../assets/back_view_final.png";
import frontView from "../../../assets/front_view_final.png";
import leftView from "../../../assets/left_view_final.png";
import rightView from "../../../assets/right_view_final.png";

const AnatomySection = () => {
    const pathArray = [backView, frontView, leftView, rightView];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const changeImage = (newIndex) => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFade(true);
        }, 200);
    };

    const handleNext = () => {
        changeImage((currentIndex + 1) % pathArray.length);
    };

    const handlePrev = () => {
        changeImage((currentIndex - 1 + pathArray.length) % pathArray.length);
    };

    return (
        <div className="w-full h-fit relative shadow-xl bg-gradient-to-t from-blue-100 to-violet-100 overflow-hidden rounded-xl p-4">
            <div className="w-[200px] h-[200px] bg-violet-200 rounded-full absolute -top-[100px] -right-[70px] opacity-50"></div>

            <div className="mt-10 text-gray-700 flex flex-col items-center relative">
                <img
                    key={currentIndex}
                    src={pathArray[currentIndex]}
                    alt={`Human body view ${currentIndex + 1}`}
                    className={`h-[500px] object-contain mb-6 drop-shadow-md transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                        }`}
                />

                <div className="flex gap-6">
                    <button
                        onClick={handlePrev}
                        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-blue-600 transition select-none"
                    >
                        <span>⬅</span>
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-violet-600 transition select-none"
                    >
                        <span>➡</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnatomySection;
