import React from 'react';
import anime from '../node_modules/animejs/lib/anime.es.js';

function AnimeComponent() {
    /**
     * anime.js
     */
    const fadeOutOpen = (e,k) => {
        const hideOpen = () =>{
            e.classList.add("js-inactive");
        };
        const showClose = () =>{
            k.classList.remove("js-inactive");
        }

        const timeline = anime.timeline();
        timeline.add({
            targets: e,
            scale: [1, 0.5, 2],
            opacity: 0,
            duration: 1200,
            easing: 'easeInCubic',
            autoplay: false,
            complete: hideOpen
        }).add({
            targets: k,
            scale: 1.05,
            opacity: 1,
            duration: 200,
            easing: 'easeInCubic',
            autoplay: false,
            begin: showClose
        }, '+=600');
        timeline.play();

    }

    const openClick = (e) => {
        // console.log(e.currentTarget);
        const $button = document.querySelector('[js-menuButton-anime]');
        const $open = document.querySelector('[js-open-anime]');
        const $close = document.querySelector('[js-close-anime]');
        console.log($open)

        const $menu = document.querySelector('[js-menu-anime]');
        const $menuLink = document.querySelector('[js-link-anime]');

        const isOpen = $menu.classList.contains("js-inactive");

        if (!isOpen) {
            // dispnone close
            $menu.classList.remove("js-inactive");
            // menu anime
            // disp open
        }else{
            fadeOutOpen($open,$close);
            $menu.classList.add("js-inactive");
            // menu anime
            // disp close
        }
    }

    return (
    <div className="Anime">
        <div className="header">
        <a href="javascript:void(0)" className="menuButton menuButton--anime" js-menuButton-anime="" onClick={openClick}>
            <span className="menuButton-string" js-open-anime="">Anime.MENU</span>
            <span className="menuButton-string--close js-inactive" js-close-anime="">CLOSE</span>
        </a>
        </div>
        <div className="menu js-inactive" js-menu-anime="">
        <div className="menu-content" js-link-anime="">
            <ul>
            <li className="menu-content-item">
                <a href="#">About</a>
            </li>
            <li className="menu-content-item">
                <a href="#">Services</a>
            </li>
            <li className="menu-content-item">
                <a href="#">Gallery</a>
            </li>
            <li className="menu-content-item">
                <a href="#">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    );
};

export default AnimeComponent;