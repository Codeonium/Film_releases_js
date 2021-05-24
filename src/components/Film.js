const Film = ({name, children}) => {
    return (
        <>
            <p>{name}</p>
            <button><a href={children}> Click to See info</a></button>
        </>
    )
}

export default Film;