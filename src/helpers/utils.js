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

    static preventXSS = html => {
        if (!html.startsWith('<iframe ')) {
            return '';
        }

        return html.replace(/>.+<\/iframe>/, '></iframe>');
    };

    static multiplyDigits = (num1, num2) => num1 * num2;

    static throttle = (...args) => {
        let isThrottled = false;
        let savedArgs;
        let savedThis;
        const [func, ms] = args;

        const wrapper = () => {
            if (isThrottled) {
                savedArgs = args;
                savedThis = this;
                return;
            }

            func.apply(this, args);

            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = null;
                    savedThis = null;
                }
            }, ms);
        };
        return wrapper;
    };
}

export default Utils;
