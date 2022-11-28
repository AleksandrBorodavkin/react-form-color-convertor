import React, {useState} from 'react';

const checkHex = (hex) => {
    const hexRegex = /^#*([A-Fa-f0-9]{6})$/i;
    if (hexRegex.test(hex)) {
        return true;
    }
};

export default function ColorConverter() {
    const [HEXString, setHEXString] = useState('');
    const [color, setColor] = useState('rgb(255, 250, 250)');

    const setInputHEX = ((e) => {
        setHEXString(e.target.value);
    });

    const hexToRgb = (hex) => {
        const x = [];
        hex = hex.replace('#', '');
        x.push(parseInt(hex.slice(0, 2), 16));
        x.push(parseInt(hex.slice(2, 4), 16));
        x.push(parseInt(hex.slice(4, 6), 16));
        setColor(`rgb(${x.toString()})`);
    };

    if (HEXString.length === 7) {
        if (checkHex(HEXString)) {
            hexToRgb(HEXString);
        } else {
            setColor('red');
        }
        setHEXString('');
    }

    return (
        <div className="ColorWindow__background"
             style={{backgroundColor: `${color}`}}>

            <div className="convertWrapper">
                <input type="text" className="windowHEX" placeholder="HEX"
                       value={HEXString} onChange={setInputHEX}/>
                <div
                    className="windowRGB">{color === 'red' ? 'Ошибка' : color}</div>
            </div>
        </div>

    );
}

