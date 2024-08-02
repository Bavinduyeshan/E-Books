const product=[
    {
        id:0,
        image:'images/bpage4.jpeg',
        title:'The past is Rising',
        price:120
    },
    {
        id:1,
        image:'images/bpage2.jpg',
        title:'The last Collection',
        price:120
    },
    {
        id:3,
        image:'images/bpage3.jpeg',
        title:'Nimona',
        price:120
    },
    {
        id:4,
        image:'images/bpage1.jpg',
        title:'The war of swords',
        price:120
    },
    {
        id:5,
        image:'images/bpage3.jpeg',
        title:'Nimona',
        price:120
    },
    {
        id:6,
        image:'images/bpage1.jpg',
        title:'the war of the swords',
        price:120
    },
]
const categories = [...new  Set(product.map ((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items .map((item)=>{
        var {image, title} = item;//price
        return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                
                <button>Read Now</button>
            </div>
         </div>`   
        )
    }).join('')    
};
displayItem(categories);
   



