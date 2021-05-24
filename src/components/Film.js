const Film = ({name, children}) => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>{name}</th>
                    <th><button><a href={children}>Info</a></button></th>
                </tr>
            </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}

export default Film;