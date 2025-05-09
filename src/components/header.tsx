import logo from '../assets/images/logo.png'
export const Header = ({ children }: any) => {
    return (
        <header className="header-main">
            <div className="header-upper">
                <div className="container">
                    <div className="row">
                        <ul>
                            <li><a href="#">Signup/login</a></li>
                            <li>
                                <a href="shopcart.html">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>cart(<span className="cartitems">0</span>)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-lower clearfix">
                <div className="container">
                    <div className="row">
                        <h1 className="logo">
                            <a href="index-2.html">
                                <img src={logo} alt="logo" />
                            </a>
                        </h1>

                        <div className="menubar">
                            <nav className="navbar">
                                <div className="nav-wrapper">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="nav-menu">
                                        <ul className="nav navbar-nav menu-bar">
                                            <li>
                                                <a href="index-2.html" className="active">Home <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a href="about.html">about <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a>gallery <span></span><span></span><span></span><span></span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="gallerypage01.html">masonry</a></li>
                                                    <li><a href="gallery02.html">gallery column two</a></li>
                                                    <li><a href="gallery03.html">gallery column 03</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog.html">blog <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a href="bookTicket.html">book Tickets <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a href="shop.html">shop <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a href="contact.html">contact <span></span><span></span><span></span><span></span></a>
                                            </li>
                                            <li>
                                                <a>error <span></span><span></span><span></span><span></span></a>
                                                <ul className="sub-menu">
                                                    <li><a href="400.html">400 page</a></li>
                                                    <li><a href="401.html">401 page</a></li>
                                                    <li><a href="403.html">403 page</a></li>
                                                    <li><a href="404.html">404 page</a></li>
                                                    <li><a href="500.html">500 page</a></li>
                                                    <li><a href="503.html">503 page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/templatespoint.net" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/itobuztech" className="twitter">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.behance.net/" className="behance">
                                <i className="fa fa-behance"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
