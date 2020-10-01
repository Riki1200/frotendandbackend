import { useEffect, useState } from 'react';

export function FakeToken(count) {
    let [symbol, setSymbol] = useState('');
    useEffect(() => {

        let char = 'abcdefehigklmnpqrstwyz';
        let number = '123456789';
        let charUpper = char.toUpperCase();
        let combineChar = char + number + charUpper;
        let combine = ''
        for (let index = 0; index < combineChar.length - count; index += 1) {
            let passwordRandom = Math.floor(Math.random() * combineChar.length);
            combine += combineChar[passwordRandom];
        }
        setSymbol(combine);
    }, [count])

    return symbol;
}