import React from 'react';
import Typical from 'react-typical';

const About = () => {
    return (
        <section id="about" className="wave-background text-white py-10">
            <div className="container mx-auto flex flex-col items-center text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    About Me
                </h2>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    I’m a passionate full-stack developer in my third year of a Bachelor's degree in Computer Science (Licence Informatique) with a focus on creating innovative solutions that enhance user experiences and address real-world challenges. My journey in tech has equipped me with a strong foundation in both front-end and back-end technologies, allowing me to build seamless, responsive, and efficient applications.
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    With a diverse skill set in programming languages such as Java, Python, PHP, and JavaScript, I have extensive experience in web development, where I have designed and implemented projects that prioritize user experience, accessibility, and maintainability. I am proficient in both the client and server sides of web applications, working with frameworks like React and Laravel to create robust, scalable solutions.
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Beyond technical skills, I am a firm believer in clean code and optimized algorithms, valuing software that is both functional and easy to maintain. I thrive in collaborative environments where I can learn from others, contribute to shared goals, and continuously push the boundaries of my skills.
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Currently, I am actively exploring the latest trends in web technologies, focusing on cloud integration, and refining my knowledge of full-stack frameworks. I am eager to take on challenging projects that leverage my background and drive for continual improvement in this ever-evolving field.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Key Skills
                </h3>
                <div className="text-2xl md:text-3xl font-semibold mb-6">
                    <span
                        className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent transition duration-500 ease-in-out">
                        <Typical
                            steps={['Java', 3000, 'React', 3000, 'PHP', 3000, 'HTML', 3000, 'CSS', 3000, 'JavaScript', 3000, 'Node.js']}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </span>
                </div>

            </div>
        </section>
    );
};

export default About;
