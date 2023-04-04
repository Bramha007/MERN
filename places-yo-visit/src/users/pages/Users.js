import React from "react";

import UsersList from "../components/UsersList";

const USERS = [
    {
        id: "u1",
        name: "John Jacos",
        image: "https://askmescript.com/upload/photos/2020/04/EZQXmD79fDXYYB7CpoDb_22_2564e94001831683083bda12432b7e56_image.png",
        places: 3,
    },
    {
        id: "u2",
        name: "Doe Jonh",
        image: "https://pbs.twimg.com/profile_images/864104988146114560/MSWTWwno_400x400.jpg",
        places: 1,
    },
];
const Users = () => {
    return <UsersList items={USERS} />;
};

export default Users;
