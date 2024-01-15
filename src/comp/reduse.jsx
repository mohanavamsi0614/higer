function Reduse(prop) {
let d=prop.data.filter(i=>{
    return i.type="Designer"
  })
let total=0
d.forEach(item=>{
    total+=item.age
})
return(
    <>
    <p>{total}</p>
    </>
  ) 
}
export default Reduse