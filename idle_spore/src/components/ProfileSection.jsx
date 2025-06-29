import React, {useState, useEffect} from 'react';

function ProfileSection()
{
    const [pseudo, SetPseudo] = useState("");
    const [email, SetEmail] = useState("");
    const [date, SetDate] = useState("");

    useEffect(() => {
        fetch('http://localhost:5030/api/players/0', {
            method: 'GET',
        })
        .then((response) => {return response.json()})
        .then((data) => {
            SetPseudo(data.pseudo);
            SetEmail(data.emailAdress);
            SetDate(data.created);
        })
        .catch((error) => console.error("API call failed:", error))
    },[])
    return(
    <section>
        <h3>Your personal space</h3>
        <p>Your pseudonym : {pseudo}</p>
        <p>Your email address : {email}</p>
        <p>Member since : {date}</p>
    </section>
    );
}

export default ProfileSection;