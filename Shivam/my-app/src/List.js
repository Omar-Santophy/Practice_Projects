import React from 'react'

const List = ({ animal }) => {
    return (
        <>
            {
                animal.map((Animals) => {
                    const { id, name, age, image } = Animals;
                    return <artical key={id} className="Animals">
                        <img src={image} alt="img" />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} year</p>
                        </div>
                    </artical>
                })}

        </>
    )
}

export default List