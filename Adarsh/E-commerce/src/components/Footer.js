import React from 'react'
import styled from 'styled-components'
import '../index.css'


const List=styled.a`
    color: white;
    font-size: 70%;
`
const Head=styled.h5`
    color: white;
    font-size: 70%;
`

const Footer = () => {
    return (
        <div>

            <footer className="page-footer font-small blue pt-4 Footer">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <Head className="text-uppercase">About us</Head>
                            <List>Indore (Madhya Pradesh)</List><br/>
                            <List>Near Vadanta Bulding</List><br/>
                            <List>Pin Code: 452001</List>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <Head className="text-uppercase">Categories</Head>
                            <ul className="list-unstyled">
                                <li>
                                    <List href="#!">Mens Wear</List>
                                </li>
                                <li>
                                    <List href="#!">Women Wears</List>
                                </li>
                                <li>
                                    <List href="#!">Kids Wear</List>
                                </li>
                                <li>
                                    <List href="#!">Gifts</List>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <Head class="text-uppercase">Socil Media</Head>

                            <ul className="list-unstyled">
                                <li>
                                    <List href="#!">Facebook</List>
                                </li>
                                <li>
                                    <List href="#!">Instagram</List>
                                </li>
                                <li>
                                    <List href="#!">twitter</List>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="/"> 1996-2022, Phoenix.com, Inc. or its affiliates</a>
                </div>

            </footer>

        </div>
    )
}

export default Footer
