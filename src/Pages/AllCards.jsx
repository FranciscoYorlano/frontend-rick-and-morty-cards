import React from "react";

// Components
import Card from "../components/Card";

const characters = [
    {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        id: 3,
        name: "Summer Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
        id: 4,
        name: "Beth Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
        id: 5,
        name: "Beth Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
];

const AllCards = () => {
    return (
        <div className="w-screen grid grid-flow-dense justify-items-center m-5">
            {characters.map((char) => (
                <div key={char.id} className="my-2">
                    <Card char={char} />
                </div>
            ))}
        </div>
    );
};

export default AllCards;
