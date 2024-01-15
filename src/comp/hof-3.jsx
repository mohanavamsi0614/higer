function Filter1(prop) {
    const d=prop.data.filter(item=>{
       return item.name[0]=="J"
    })
    return(
        <>
        { d.map(item=>
             <div key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.type}</span>
           </div>
        )}
        </>
    )
}
export default Filter1