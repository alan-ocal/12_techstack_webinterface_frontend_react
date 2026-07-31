import "/src/avatar.css";

function Profile(){
    const  user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
        imageSize: 90,
    };
    return (
        <>
            <h1> {user.name} </h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                //regular {} objects inside the style={ } JSX curly braces
                style={{
                    width:user.imageSize,
                    height:user.imageSize
                }}
            />
        </>
    );
}
export default Profile;