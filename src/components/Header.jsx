import React from 'react'

export default function Header() {
    let name = "PaginaPrueba2"
    const navbar = function NavBar() {
        const NavbarPromise = new Promise((resolve, reject) => {
        const toggle = document.querySelector('.toggle');
        if (toggle) {
            resolve(toggle);
        } else {
            reject(new Error("El elemento #toggle no se encontró en el DOM"));
        }
        });
        NavbarPromise.then((toggle) => {
            const navbarLinks = document.getElementsByClassName('navbarlinks')[0]
            toggle.addEventListener('click', () => {
                navbarLinks.classList.toggle('active')
            })
        });
     }
  return (
    <>
        <div>
            <nav class="navbar">
                <div id="title">{name}</div>
                <a href='#' class='toggle'>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    <ul>
                        <li><a href="#">parte1</a></li>
                        <li><a href="# ">parte2</a></li>
                        <li><a href="# ">parte3</a></li>
                        <li><a href="#">parte4</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
}
