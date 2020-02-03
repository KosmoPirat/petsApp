function throttle(...args) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;
    const [func, ms] = args;

    function wrapper() {
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
    }
    return wrapper;
}

export default throttle;
