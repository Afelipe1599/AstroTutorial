import { useState, useEffect } from "preact/hooks";
import '../styles/global.css';

const RotatingCard = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const rotationValue = scrollY / 5; // Ajusta este valor para personalizar la velocidad de rotación
            setRotation(rotationValue);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="rotating-card"
            style={{ transform: `rotateY(${rotation}deg)` }}
        >
            <div className="rotating-card-content">
                ¡Tarjeta giratoria!
            </div>
        </div>
    );
};

export default RotatingCard;
