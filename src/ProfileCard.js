function ProfileCard({title, handle, image, description}) {
    //to reduce to repeat code we could create a variable to reducce the quantity of code writed
/*
    const title = props.title;
    const handle = props.handle;
    //We could reduce even more with:
*/
/*
    const {title, handle} = props;
*/
    //The past sentence in-line is the same that delcarae two separated const
    //But this in-line sencence could to be reduced and profesionalized even more
    //adding title, handle like parameters on ProfileCard() like this ProfileCard(title, handle) {
    return(
    <div className="card">
    {/*the props. is repeating a lot of time and we could to reduce code creating variables instead
    <div>Title is {props.title}</div>*/}
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="detailed Logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
    </div>
    );
}

export default ProfileCard;
