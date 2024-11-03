import React from 'react';
import { assets } from "../assets/assets";
import './AndroidGames.css'; // Ensure you import your CSS file

// Sample Android games data
const androidGames = [
    {
        title: 'Labyrinthe: Maze Puzzle Game',
        description: 'Navigate through complex mazes to solve puzzles.',
        link: 'https://play.google.com/store/apps/details?id=com.Wa_mad.LabyrintheMazePuzzleGame',
        technologies: ['Java', 'Android Studio'],
        image: assets.labyrithne,
    },
    {
        title: 'Dash Ball: Galaxy Adventure',
        description: 'Embark on a thrilling adventure through the galaxy.',
        link: 'https://play.google.com/store/apps/details?id=com.DashBallGalaxyAdventure',
        technologies: ['C#', 'Unity 3D'],
        image: assets.dashball,
    },
    {
        title: 'Fruitopia: Sort Fruits Game',
        description: 'Sort and match fruits in this fun puzzle game.',
        link: 'https://play.google.com/store/apps/details?id=com.wa_mad.fruitopiaChallengeFruitsSort',
        technologies: ['C#', 'Unity'],
        image: assets.fruitopia,
    },
    {
        title: 'Stickman Adventure: City Game',
        description: 'Join Stickman in this exciting city adventure.',
        link: 'https://play.google.com/store/apps/details?id=com.wa_mad.StickmanAdventureCityEdition',
        technologies: ['Java', 'Android Studio'],
        image: assets.stickman,
    },
    // Add more games as needed
];

const AndroidGames = () => {
    return (
        <section id="android games" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-10">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Explore My Android Games</h2>
                <p className="text-lg mb-12">Check out my latest mobile games available on the Play Store!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-44 gap-y-20"> {/* Reduced gap for compactness */}
                    {androidGames.map((game, index) => (
                        <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-lg transform shadow-emerald-500/50 transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 cursor-default"
                            style={{
                                backgroundImage: `url(${game.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '250px', // Reduced height
                            }}
                        >
                            <div className="bg-black bg-opacity-70 hover:bg-opacity-60 h-full flex flex-col justify-between p-4 backdrop-blur-sm transition duration-300"> {/* Reduced padding */}
                                <a href={game.link} target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{game.title}</h3> {/* Reduced title size */}
                                        <p className="text-lg mb-4 mt-8 mx-20">{game.description}</p>
                                        <p className="text-sm mb-1 mt-8">
                                            <strong>Technologies :</strong> {game.technologies.join(', ')}
                                        </p>{/* Reduced description size */}
                                    </div>
                                </a>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AndroidGames;