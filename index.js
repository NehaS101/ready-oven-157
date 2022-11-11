let url = "./index.json";
let cont = document.getElementById("add");
let productData =[];

function fetchdata(url){
    fetch(url)
    .then((res) =>
        res.json()
    )
    .then((data) =>{
        return
        renderProducts(data);
        productData = data;
    })
}

function renderProducts(data){
    cont.innerHTML = "";
    data.forEach((el)=>{
        let pro = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.img;
        let tit = document.createElement("h2");
        tit.innerText = el.tittle

        let catogery =document.createElement("p");
        category.innerText = el.cat

        let rate =document.createElement("h3");
        rate.innerText = el.price
 
        pro.append(image,tit,category,rate);
        cont.append(pro);
    })
}
fetchdata(url);