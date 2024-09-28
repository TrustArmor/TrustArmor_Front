import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footers = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="flex flex-col items-center space-y-4">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-4 font-serif">TrustArmor</h1>
                
                {/* Sections (now horizontal) */}
                <div className="mb-4">
                    <ul className="flex justify-center space-x-4"> {/* flex + horizontal space */}
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Support</li>
                    </ul>
                </div>
                
                {/* Social Media Icons */}
                <div className="mb-4">
                    <div className="flex justify-center space-x-4">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div>
                    <p>&copy; {new Date().getFullYear()} TrustArmor. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
