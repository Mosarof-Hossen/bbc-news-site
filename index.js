const categoryContainer=document.getElementById('categorey-container')



const loadCategory= ()=>{
    fetch('https://news-api-fs.vercel.app/api/categories')
    .then((res)=> res.json())
    .then((data)=> {
        // console.log(data.categories)
        const allCategoryes=data.categories
        allCategoryes.forEach(element => {
            categoryContainer.innerHTML +=`
            <li id="${element.id}" class="py-2 hover:border-b-4 hover:border-red-600 cursor-pointer ">${element.title}</li>
            `
            
        });
        categoryContainer.addEventListener('click',(e)=>{
            console.log(e)
            // const allLi=document.querySelectorAll("li")
            // allLi.forEach(li=>{
            //     li.classList.remove("border-b-4")
            // })
            // if(e.target.localName=== 'li'){
            //     e.target.classList.add('border-b-4')
            // }

            const allUlLi=document.querySelectorAll('li')
            allUlLi.forEach(li=>{
                li.classList.remove('')
            })
            if(e.target.localName==='li'){
                e.target.classList.add('border-b-4')
            }
        })

    })

    .catch( (err)=>{console.log(err)})
}

loadCategory()
const categoryLod=()=>{

}