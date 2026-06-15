import React from 'react';

const AboutInfo = () => {
    return (
        <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto section-container">

            {/* Hero Section */}
            <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                About Our Store
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                We provide high-quality products that make your life easier and more stylish.
            </p>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
                <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="about"
                className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                />
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
                </h2>
                <p className="text-gray-600 mb-4">
                Our store started with a simple idea — to bring modern and affordable products.
                </p>
                <p className="text-gray-600">
                With a growing community of happy customers, we continue to improve every day.
                </p>
            </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
            {[
                { value: "10K+", label: "Customers" },
                { value: "500+", label: "Products" },
                { value: "50+", label: "Brands" },
                { value: "24/7", label: "Support" },
            ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-3xl font-bold text-primary">
                    {item.value}
                </h3>
                <p className="text-gray-600">{item.label}</p>
                </div>
            ))}
            </div>

            {/* Team */}
            <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                {
                    name: "John Doe",
                    role: "Founder",
                    img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                    name: "Jane Smith",
                    role: "Marketing Head",
                    img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                    name: "Lutfor Rhaman",
                    role: "Software Engineer",
                    img: "https://i.ibb.co.com/RkWLtQ4b/J5x0t-Ymxn9-X3.jpg",
                },
                ].map((member, i) => (
                <div key={i} className="text-center">
                    <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-gray-500">{member.role}</p>
                </div>
                ))}
            </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white text-center py-12 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">
                Start Shopping With Us Today!
            </h2>
            <p className="mb-6">
                Explore our latest collections and find what you love.
            </p>

            <a
                href="/shop"
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
                Shop Now
            </a>
            </div>
        </div>
        </section>
    );
};

export default AboutInfo;