import React, { useState } from 'react';
import { assets } from "../assets/assets";

const websiteImages = [
    assets.marrakech_restaurant,
    assets.marrakech_restaurant1,
    assets.marrakech_restaurant2,
    assets.marrakech_restaurant3,
    assets.marrakech_restaurant4,
    assets.marrakech_restaurant5,
    assets.marrakech_restaurant6,
    assets.marrakech_restaurant7,
];

const ProjectDetail2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour fermer l'image agrandie
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="container mx-auto px-4 py-16 text-gray-100 bg-gray-900 min-h-screen">
            <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-400">Modernizing Pet Boarding Services</h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-300">
                    Modernizing 'La Mise au Vert' pet boarding with mobile apps, desktop tools, and a website for booking, pet tracking, and improved customer interaction.
                </p>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-teal-400">Website Interface</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {websiteImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Website Interface ${index + 1}`}
                                    className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg mb-4 mt-4">
                        <strong>Technologies utilisées :</strong> HTML, CSS, JavaScript, PHP
                    </p>
                </div>


                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative">
                            <img src={selectedImage} alt="Selected" className=" max-h-96 rounded-lg shadow-lg" />
                            <button onClick={closeImage} className="absolute top-2 right-2 text-green-600 text-4xl font-bold hover:text-green-800">&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail2;
