jQuery(document).ready(function ($) {

    const html = document.querySelector('html');
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('.header-wrap__icon');
    const menu = document.querySelector('.header-wrap__nav');
    const links = document.querySelectorAll('a');
    const footerSocials = document.querySelector('.footer-wrap__socials');
    const pageSidebarItems = document.querySelectorAll('.page-wrap__sidebar .item');

    if (footerSocials) {
        document.querySelector('.contacts-wrap__content').append(footerSocials.cloneNode(true));
    }

    if (links[0]) {
        links.forEach(item => {
            item.addEventListener('click', () => {
                menuIcon.classList.remove('header-wrap__icon--active');
                menu.classList.remove('header-wrap__nav--active');
                html.classList.remove('fix');
            })
        })
    }

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('header-wrap__icon--active');
            menu.classList.toggle('header-wrap__nav--active');
            html.classList.toggle('fix');
        })
    }
    var isScrolling = false; 
    $('.services-wrap__list').slick({
        infinite: false,
        slidesToShow: 2.25,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1.875,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 551,
                settings: 'unslick'
            },
        ]
    });

        // Detect scroll on the slider
        $('.services-wrap__list').on('wheel', function(e) {
            console.log("hhhhee")
            if (isScrolling) return;  // Prevent continuous scrolling
            
            // Prevent page scrolling when slider is in focus
            e.preventDefault();
            isScrolling = true;
    
            // Scroll slider in the direction of wheel scroll
            if (e.originalEvent.deltaY > 0) {
                // Scroll down
                $(this).slick('slickNext');
            } else {
                // Scroll up
                $(this).slick('slickPrev');
            }
    
            // Timeout to prevent continuous scrolling
            setTimeout(function() {
                isScrolling = false;
            }, 300);  // Adjust timeout for smoother scrolling effect
        });

    addEventListener('scroll', () => {
        addHeaderSticky();
        addSibearActive();
    })

    function addHeaderSticky() {
        window.scrollY > 50 ? header.classList.add('header-sticky') : header.classList.remove('header-sticky');
    }

    addHeaderSticky();
    addSibearActive();

    $('.faq-wrap__list .item-top').click(function () {
        let faqIt = $(this).closest('.item');
        faqIt.toggleClass('open');
        faqIt.find('.item-text').slideToggle();
    });

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {

            const blockID = anchor.getAttribute('href').substr(1);
            const node = document.getElementById(blockID);

            if (node) {
                e.preventDefault();
                node.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }

    function elem_in_visible_area(selector) {
        let elem_p = $(selector),
            elem_p_height = elem_p.height(),
            offset_top_el = elem_p.offset().top,
            offset_bottom_el = offset_top_el + elem_p.height(),
            scrolled = $(window).scrollTop(),
            scrolled_bottom = scrolled + $(window).height();
        if (scrolled_bottom > offset_top_el && offset_bottom_el > scrolled) {
            return true;
        }
        return false;
    }

    function addSibearActive() {
        if (pageSidebarItems[0]) {
            pageSidebarItems.forEach(item => {
                const str = item.getAttribute('href').slice(1);
                const node = document.getElementById(str);
                if (node) {
                    if (elem_in_visible_area(node)) {
                        pageSidebarItems.forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                    }
                }
            })
        }
    }

})
