import React from 'react';

// ------icon Import-----
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Info = () => {
    return (
       <section class="bg-gray-50 py-24 px-4">
            <div class=" section-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* <!-- Left: Contact Info --> */}
                <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p class="text-gray-600 mb-6">
                    Have questions about our products or orders? Feel free to reach out to us anytime.
                </p>

                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                    <span class="text-primary text-xl"><MdLocationOn /></span>
                    <p class="text-gray-700">Dhaka, Bangladesh</p>
                    </div>

                    <div class="flex items-center space-x-3">
                    <span class="text-primary text-xl"> <FaPhoneAlt /></span>
                    <p class="text-gray-700">+8801798960830</p>
                    </div>

                    <div class="flex items-center space-x-3">
                    <span class="text-primary text-xl"><MdOutlineEmail /></span>
                    <p class="text-gray-700">lutfor251588@gmail.com</p>
                    </div>
                </div>

                {/* <!-- Map --> */}
                <div class="mt-6">
                    <iframe 
                    class="w-full h-64 rounded-lg border"
                    src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowfullscreen=""
                    loading="lazy">
                    </iframe>
                </div>
                </div>

                {/* <!-- Right: Contact Form --> */}
                <div class="bg-white p-8 rounded-xl shadow-md">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send Message</h3>

                <form class="space-y-5">

                    <div>
                    <label class="block text-sm text-gray-600 mb-1">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name"
                        class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    </div>

                    <div>
                    <label class="block text-sm text-gray-600 mb-1">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    </div>

                    <div>
                    <label class="block text-sm text-gray-600 mb-1">Message</label>
                    <textarea 
                        rows="5"
                        placeholder="Write your message..."
                        class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none">
                    </textarea>
                    </div>

                    <button 
                    type="submit"
                    class="w-full bg-primary text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300">
                    Send Message
                    </button>

                </form>

                </div>

            </div>
       </section>
    );
};

export default Info;