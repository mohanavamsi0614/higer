function Filter2(prop) {
    const d=prop.data.filter(item=>{
       return 28<item.age || item.age>=50
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
export default Filter2