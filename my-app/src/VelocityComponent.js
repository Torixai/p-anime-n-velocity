import React from 'react';


function VelocityComponent() {
    /* Velocity */
    const fadeOutOpen = (e) => {

        e.velocity(
            "fadeOut",
            { duration: 200},
            function() {
                e.classList.add("js-inactive");
            }
        );
    }

    const openClickV = (e) => {
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
            fadeOutOpen($open);
            $menu.classList.add("js-inactive");
            // menu anime
            // disp close
        }
    }

  return (
    <div className="Velo">
    <div className="header">
        <a href="javascript:void(0)" className="menuButton menuButton--velo" js-menuButton-velo="" onClick={openClickV}>
        <span className="menuButton-string" js-open-velo="">Velocity.MENU</span>
        <span className="menuButton-string--close js-inactive"js-close-velo="">CLOSE</span>
        </a>
    </div>
    <div className="menu js-inactive">
        <div className="menu-content js-link-velo">
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
}

export default VelocityComponent;