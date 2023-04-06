import React from "react";

// Components
import Card from "../components/Card";

const characters = [
    {
        id: 826,
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
    {
        id: 6,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        id: 7,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        id: 8,
        name: "Summer Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
        id: 1,
        name: "Beth Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
        id: 9,
        name: "Beth Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
];

const AllCards = () => {
    return (
        <div className="flex flex-wrap justify-center ">
            {characters.map((char) => (
                <div
                    key={char.id}
                    className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
                >
                    <Card char={char} />
                </div>
            ))}
        </div>
    );
};

export default AllCards;
