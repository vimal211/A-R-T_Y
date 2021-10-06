let artContainer = document.getElementById("art-conatiner");
let star=["3.0","3.5","4.0","4.5"];

document.getElementsByClassName('logo')[0].addEventListener('click',()=>{
    location.href="./index.html";
})

document.getElementsByClassName('nav_item')[0].addEventListener('click',()=>{
    location.href="./index.html";
})

function DataObj(name,imgurl,star,heart,view){
    this.name=name;
    this.imgurl=imgurl;
    this.star=star;
    this.heart=heart;
    this.view=view;
}

function randomStar(){
    return star[Math.floor(Math.random()*3)];
}
function randomHeart(){
    return Math.floor(Math.random()*80);
}
function randomView(){
    return Math.floor(Math.random()*200);
}

let dataArr= [
    (new DataObj("Virat","./Images/img1.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Mithali","./Images/img2.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Sachin","./Images/img3.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Rahul","./Images/img4.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Dhoni","./Images/img5.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Smirthi","./Images/img6.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Rohit","./Images/img7.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Arjun","./Images/img8.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Priya","./Images/img9.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Raina","./Images/img10.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Rishab","./Images/img11.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Messi","./Images/img12.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Neymar","./Images/img13.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Sunil","./Images/img14.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Geetha","./Images/img15.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Vishal","./Images/img16.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Ashwin","./Images/img17.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Vedha","./Images/img18.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Ajith","./Images/img19.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Lara","./Images/img20.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Warner","./Images/img21.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Smith","./Images/img22.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Root","./Images/img23.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Sara","./Images/img24.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Kavya","./Images/img25.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Surya","./Images/img26.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Amit","./Images/img27.jpg",randomStar(),randomHeart(),randomView())),
    (new DataObj("Neesham","./Images/img28.jpg",randomStar(),randomHeart(),randomView())),
]

for(let i =0;i<dataArr.length;i++){
let fragment = `
  <div id="${i+1}" onclick="displayArt(this)" class="arts">
       <img class="art_img" src="${dataArr[i].imgurl}" alt="" srcset="">
       <div class="art_bottom">
          <p id="artist">${dataArr[i].name}</p>
          <div>
          <i class=" star fas fa-star"></i>${dataArr[i].star}
          <i class=" heart fas fa-heart"></i>${dataArr[i].heart}k
          <i class=" eye fas fa-eye"></i>${dataArr[i].view}k
          </div>
       </div>
  </div>

`
artContainer.innerHTML+=fragment;
}

function displayArt(art){
   let key = art.id;
   sessionStorage.setItem("key",JSON.stringify(dataArr[key-1]));
   window.location.href="./display.html";
}
