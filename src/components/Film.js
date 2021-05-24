const Film = ({name, children}) => {
    return (
        <>
        <div>
            <ul>
                <li><a href={children}>{name}</a></li>
            </ul>
        </div>
        </>
    )
}

export default Film;