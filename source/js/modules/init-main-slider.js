export const initMainSlider = () => {
  // eslint-disable-next-line
  let swiper = new Swiper('[data-main-slider]', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};
