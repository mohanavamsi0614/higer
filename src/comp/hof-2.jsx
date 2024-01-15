function Filter(prop) {
    console.log(prop.data)
    const d=prop.data.filter(item=>{
        return item.type=="Designer"
    })
    console.log(d)
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
export default Filter