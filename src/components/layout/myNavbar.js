import React, { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Navbar() {
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
    }, [])

    // class component alternative (make sure to use render() instead)
    // class Navbar extends Component {

    //     componentDidMount() {
    //         document.addEventListener('DOMContentLoaded', function () {
    //             var elems = document.querySelectorAll('.sidenav');
    //             var instances = M.Sidenav.init(elems, {});
    //         });
    //     };

    return (
        <div>
            <nav>
                <div class="nav-wrapper">

                    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>

                    <div className="container">
                        <a href="#" class="brand-logo">Rogers Development Services</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">About Us</a></li>
                            <li><a href="badges.html">Profile</a></li>
                            <li><a href="collapsible.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" class="sidenav">
                <li><div class="user-view">
                    <div class="background">
                        <img alt="RDS Logo" src="" />
                    </div>
                    <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                    <a href="#name"><span class="white-text name">Matthew Shane Rogers</span></a>
                    <a href="#email"><span class="white-text email">matthew.shane.rogers@gmail.com</span></a>
                </div></li>
                <li><a class="waves-effect" href="#!"><i class="material-icons">insert_drive_file</i>About Us</a></li>
                <li><a class="waves-effect" href="#!">Profile</a></li>
                <li><a class="waves-effect" href="#!">Contact Us</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Career Accomplishments</a></li>
                <li><a class="waves-effect" href="#!">Resume<i class="material-icons">insert_drive_file</i></a></li>
            </ul>
        </div>
    );
}

export default Navbar;