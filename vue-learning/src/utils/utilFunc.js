/* eslint-disable prefer-spread */
function debounce(fn, wait) {
    var timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    };
};
const dDebounce = {
    inserted: function (el, binding) {
        el.addEventListener('click', debounce(binding.value, 1000));
    },
};

export default dDebounce;