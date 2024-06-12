import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Home() {
    const data=useContext(UserContext)
    return (
        <>
            <section className="px-2 py-10 md:px-0 h-screen">
                <div className="mx-auto max-w-4xl">
                    <div className="md:flex md:items-center md:justify-center md:space-x-14">
                        <div className="mt-10 md:mt-0 container">
                           <img
                                className="border-4 border-purple-500 relative h-48 w-48 rounded-full object-covers centered-image mx-auto"
                                src={data['imgUrl']}
                                alt=""
                            />
                            <br />
                            <br />
                            <blockquote>
                                <p className="text-xl text-gray font-montserrat animate-pulse" >
                                    “My name is Siddhant Jha, and I am a postgraduate student at IIIT Delhi parsuing Masters in Computer Science and Engineering
                                    I am proficient in web  development, both Backend and Frontend, as well as Android development.”
                                </p>
                            </blockquote>
                            <p className="mt-7 text-lg font-semibold text-white">Siddhant Jha</p>
                            <p className="mt-1 text-base text-white">Post Graduate Student At</p>
                            <p className="mt-1 text-base text-white">Indraprastha Institute Of Information Technology</p>
                            <p className="mt-1 text-base text-white">Delhi - 110020</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
