const nextBtn = document.querySelector('#next');
const slide = document.querySelectorAll('.slide');

PushSlide = () => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.marginLeft = -600 + 'px'
    }
}

nextBtn.addEventListener('click', PushSlide);