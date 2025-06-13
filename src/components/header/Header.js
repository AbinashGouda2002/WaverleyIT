import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/site_logo/WaverleyIT_Logo_White_BG.png';
import icon1 from '../../images/icons/icon_wifi.svg';
import icon2 from '../../images/icons/icon_dollar_2.svg';
import icon7 from '../../images/icons/icon_pen.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = (props) => {
    const [mobileActive, setMobileState] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return React.createElement('header', { className: 'site_header site_header_1' },
        React.createElement('div', { className: `header_bottom stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}` },
            React.createElement('div', { className: 'container' },
                React.createElement('div', { className: 'row align-items-center' },
                    // Logo
                    React.createElement('div', { className: 'col-xl-3 col-lg-2 col-5' },
                        React.createElement('div', { className: 'site_logo' },
                            React.createElement(Link, { onClick: ClickHandler, className: 'site_link', to: '/' },
React.createElement('img', { src: logo, alt: 'Company Logo', style: { width: '250px', height: 'auto', display: 'block', margin: '0 auto' } })
                            )
                        )
                    ),
                    
                    // Main Navigation
                    React.createElement('div', { className: 'col-xl-6 col-lg-7 col-2' },
                        React.createElement('nav', { className: 'main_menu navbar navbar-expand-lg' },
                            React.createElement('div', { className: 'main_menu_inner collapse navbar-collapse justify-content-lg-center', id: 'main_menu_dropdown' },
                                React.createElement('ul', { className: 'main_menu_list unordered_list justify-content-center' },
                                    // Services Dropdown
                                    React.createElement('li', { className: 'dropdown' },
                                        React.createElement(Link, { 
                                            onClick: ClickHandler, 
                                            className: 'nav-link', 
                                            to: '/services', 
                                            id: 'services_submenu', 
                                            role: 'button', 
                                            'data-bs-toggle': 'dropdown', 
                                            'aria-expanded': 'false' 
                                        }, 'Services'),
                                        React.createElement('div', { className: 'dropdown-menu mega_menu_wrapper p-0', 'aria-labelledby': 'services_submenu', style: { minWidth: '600px' } },
                                            React.createElement('div', { className: 'container' },
                                                React.createElement('div', { className: 'row' },
                                                    React.createElement('div', { className: 'col-lg-4 bg-primary text-white p-4 rounded-start' },
                                                        React.createElement('h4', null, 'Our Services'),
                                                        React.createElement('p', null, 'Explore our range of software functions designed to empower your business.')
                                                    ),
                                                    React.createElement('div', { className: 'col-lg-8 p-4' },
                                                        // Web Development
                                                        React.createElement('div', { className: 'd-flex align-items-start mb-3' },
                                                            React.createElement('img', { src: icon7, alt: 'Web Development Icon', style: { width: '40px', height: '40px', marginRight: '15px' } }),
                                                            React.createElement('div', null,
                                                                React.createElement('h6', { className: 'mb-1' }, 'Web Development'),
                                                                React.createElement('p', { className: 'mb-0 text-muted', style: { fontSize: '0.9rem' } }, 'Custom web applications tailored to your needs.')
                                                            )
                                                        ),
                                                        // Cloud Solutions
                                                        React.createElement('div', { className: 'd-flex align-items-start mb-3' },
                                                            React.createElement('img', { src: icon1, alt: 'Cloud Solutions Icon', style: { width: '40px', height: '40px', marginRight: '15px' } }),
                                                            React.createElement('div', null,
                                                                React.createElement('h6', { className: 'mb-1' }, 'Cloud Solutions'),
                                                                React.createElement('p', { className: 'mb-0 text-muted', style: { fontSize: '0.9rem' } }, 'Scalable and secure cloud infrastructure.')
                                                            )
                                                        ),
                                                        // Cybersecurity
                                                        React.createElement('div', { className: 'd-flex align-items-start' },
                                                            React.createElement('img', { src: icon2, alt: 'Cybersecurity Icon', style: { width: '40px', height: '40px', marginRight: '15px' } }),
                                                            React.createElement('div', null,
                                                                React.createElement('h6', { className: 'mb-1' }, 'Cybersecurity'),
                                                                React.createElement('p', { className: 'mb-0 text-muted', style: { fontSize: '0.9rem' } }, 'Protect your digital assets with our security solutions.')
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    // Other menu items
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/about' }, 'About')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/contact' }, 'Contact')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/products' }, 'Products')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/events' }, 'Events')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/courses' }, 'Courses')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/interns' }, 'Interns')),
                                    React.createElement('li', null, React.createElement(Link, { onClick: ClickHandler, to: '/careers' }, 'Careers'))
                                )
                            )
                        )
                    ),
                    
                    // Right side buttons
                    React.createElement('div', { className: 'col-xl-3 col-lg-3 col-5' },
                        React.createElement('ul', { className: 'header_btns_group unordered_list justify-content-end' },
                            React.createElement('li', null,
                                React.createElement('button', { 
                                    className: 'mobile_menu_btn',
                                    onClick: () => setMobileState(!mobileActive),
                                    type: 'button',
                                    'data-bs-toggle': 'collapse',
                                    'data-bs-target': '#main_menu_dropdown',
                                    'aria-expanded': 'false',
                                    'aria-label': 'Toggle navigation'
                                }, React.createElement('i', { className: 'far fa-bars' }))
                            ),
                            React.createElement('li', null,
                                React.createElement(Link, { 
                                    onClick: ClickHandler, 
                                    className: 'btn btn-primary', 
                                    to: '/get-started' 
                                },
                                    React.createElement('span', { className: 'btn_label', 'data-text': 'Get Started' }, 'Get Started'),
                                    React.createElement('span', { className: 'btn_icon' },
                                        React.createElement('i', { className: 'fa-solid fa-arrow-up-right' })
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            // Mobile menu
            React.createElement('div', { className: 'mobail-wrap' },
                React.createElement('div', { className: `mobail-menu ${mobileActive ? "active" : ""}` },
                    React.createElement('div', { className: 'xb-header-menu-scroll' },
                        React.createElement('div', { 
                            className: 'xb-menu-close xb-hide-xl xb-close', 
                            onClick: () => setMobileState(!mobileActive) 
                        }),
                        React.createElement('nav', { className: 'xb-header-nav' },
                            React.createElement(MobileMenu, null)
                        )
                    )
                ),
                React.createElement('div', { 
                    className: 'xb-header-menu-backdrop', 
                    onClick: () => setMobileState(false) 
                })
            )
        )
    );
};

export default Header;
