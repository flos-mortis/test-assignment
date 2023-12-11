let splide = new Splide( '.splide', {
    type      : 'loop',
    padding   : '6rem',
    gap       : '1.25rem',
    pagination: false,
    start     : 1,
    drag      : false,
    autoplay  : true,
    interval  : 3000,
    classes: {
		arrows: 'splide__arrows custom-arrows',
		arrow : 'splide__arrow custom-arrow',
		prev  : 'splide__arrow--prev custom-arrow-prev',
		next  : 'splide__arrow--next custom-arrow-next',
  },
  } );

splide.mount();

const accordionHeads = document.querySelectorAll(".accordion-header");

accordionHeads.forEach(header => {
    header.addEventListener("click", () => {
        if (header.classList.contains("shown")) {
            header.classList.remove("shown");
        } 
        else {
            const accordionHeadsShown = document.querySelectorAll(".shown");
            accordionHeadsShown.forEach(itemShown => itemShown.classList.remove("shown"));
            header.classList.add("shown")
        }
    });
});
