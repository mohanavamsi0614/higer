function Map(prop) {
    return(
        <>
        {prop.data.map(item=>
             <div key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.type}</span>
           </div>
        )}
        </>
    )
}
export default Map