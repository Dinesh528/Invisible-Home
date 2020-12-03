import React from 'react'

function Footer() {
    return (
        <footer className="text-white pt-5">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase">Invisible Homes</h5>
                        <p>Book Your Home at cheaper rates</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Follow us on</h5>
                            <ul class="list-unstyled d-flex flex-row">
                                <li>
                                    <a href="#!">Facebook </a>
                                </li>&nbsp;
                                <li>
                                    <a href="#!">Instagram </a>
                                </li>&nbsp;
                                <li>
                                    <a href="#!">Twitter</a>
                                </li>
                            
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3 d-none d-sm-block">
                            <h5 className="text-uppercase">Contact us</h5>
                            <p>Name: xxxxx <br/>
                                Phone: xxxxx <br/>
                                Adress: xxxxxx
                            </p>
                        </div>
                </div>
                </div>
                <div className="text-center">
                    Copyright &copy;{new Date().getFullYear()} Invisible Homes
            </div>

       </footer>
    )
}

export default Footer;