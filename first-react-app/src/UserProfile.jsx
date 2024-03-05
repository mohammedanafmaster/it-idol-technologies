import React from 'react'

function UserProfile() {
    let user = {
        name: 'React.js',
        age: '10',
        imageURL: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png',
        size: 100
    }
    return (
        <>
            <h1 className="mt-5 text-2xl">{user.name}</h1>
            <img
                className='mt-2'
                src={user.imageURL}
                alt={"Logo of " + user.name}
                style={{
                    width: user.size,
                    height: user.size
                }}
            />
        </>
    )
}

export default UserProfile