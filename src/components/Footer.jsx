import React from 'react';
import { data, Link } from 'react-router-dom';

// icon import
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='bg-secondary-bg md:py-24 py-10'>
            <div className='section-container grid sm:grid-cols-2  md:grid-cols-5 gap-8 px-8'>

                {/* Logo and Details */}
                <div className='md:col-span-2'>
                    <h2 className='text-2xl font-bold mb-4'> <Link to="/">Logo</Link></h2>
                    <p className='md:mr-12'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>

                {/* Services Item */}
                <div>
                    <h2 className='text-xl font-semibold mb-4'>Services</h2>
                    <ul className='space-y-2'>
                        <li><Link to="/" className='hover:text-primary'>Email Marketing</Link></li>
                        <li><Link to="/" className='hover:text-primary'>Campaigns</Link></li>
                        <li><Link to="/" className='hover:text-primary'>Branding</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold mb-4'>Furniture</h2>
                    <ul className='space-y-2'>
                        <li><Link to="/" className='hover:text-primary'>Beds</Link></li>
                        <li><Link to="/" className='hover:text-primary'>Chair</Link></li>
                        <li><Link to="/" className='hover:text-primary'>All</Link></li>
                    </ul>
                </div>

                <div className='content-end'>
                    <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
                    <ul className='space-y-2'>

                        <li><Link to="https://www.facebook.com/lutforrhaman.santo" className='hover:text-primary flex items-center space-x-2 '  target="_blank"><FaFacebookF /><span>Facebook</span></Link></li>
                        <li><Link to="/" className='hover:text-primary flex items-center space-x-2'><FaTwitter /><span>Twitter</span></Link></li>
                        <li><Link to="/" className='hover:text-primary flex items-center space-x-2'><IoLogoInstagram /><span>Instagram</span></Link></li>
                       
                    </ul>
                </div>

            </div>

            {/* -----CopyRight---- */}

            <div className='section-container flex flex-col sm:flex-row sm:justify-between mt-12 pt-4 border-t border-gray-300'>
                <p>Copyright &copy; {new Date().getFullYear()} </p>
                <div className='sm:space-x-3 flex'>
                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>


        </footer>
    );
};

export default Footer;