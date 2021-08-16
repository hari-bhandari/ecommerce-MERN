function debounce(func: { (): void; apply?: any; }, wait: number, immediate: undefined) {
    let timeout: any;

    return function executedFunction(...args: any[]) {
        // @ts-ignore
        const context: any = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debounce;
