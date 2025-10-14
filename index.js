const loadCategory= ()=>{
    fetch('https://news-api-fs.vercel.app/api/categories')
    .then((res)=> res.json())
    .then((data)=> console.log(data))

    .catch( (err)=>{console.log(err)})
}
const categoryLod=()=>{

}