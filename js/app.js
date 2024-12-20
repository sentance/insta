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
        prevArrow: '<div class="arrow slick-prev"><div class="arrow-icon"></div></div>',
        nextArrow: '<div class="arrow slick-next"><div class="arrow-icon"></div></div>',
        slidesToScroll: 1,
        arrows: true,
        dots: false,
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
    $('#toggleButton').click(function () {
        const icon = $('.app-wrap .item-top__icon');
        const flexBlock = $('.app-wrap__flex--content'); // Entire block to show/hide
    
        // Toggle active class for the icon
        icon.toggleClass('active');
    
        // Toggle display for the app-wrap__flex block
        if (flexBlock.is(':visible')) {
            flexBlock.css('display', 'none');
        } else {
            flexBlock.css('display', 'block');
        }
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
