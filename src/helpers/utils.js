class Utils {
    static formatPhone = phone => {
        const strPhone = phone.toString();
        const countryCode = strPhone.slice(0, 1);
        const operatorCode = strPhone.slice(1, 4);
        const threeDigitPart = strPhone.slice(4, 7);
        const firstTwoDigitPart = strPhone.slice(7, 9);
        const secondTwoDigitPart = strPhone.slice(9);
        return `+${countryCode} (${operatorCode}) ${threeDigitPart}-${firstTwoDigitPart}-${secondTwoDigitPart}`;
    };
}

export default Utils;
