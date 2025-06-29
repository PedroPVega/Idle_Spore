function ProfileSection({pseudo, mailAddress, date})
{
    return(
    <section>
        <h3>Your personal space</h3>
        <p>Your pseudonym : {pseudo}</p>
        <p>Your email address : {mailAddress}</p>
        <p>Member since : {date}</p>
    </section>
    );
}

export default ProfileSection;