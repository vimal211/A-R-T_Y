let artContainer = document.getElementById("art-conatiner");
let star=["3.0","3.5","4.0","4.5"];
let uploadBtn = document.getElementById('uploadBtn');

document.getElementsByClassName('logo')[0].addEventListener('click',()=>{
    location.href="./main.html";
})

document.getElementsByClassName('nav_item')[0].addEventListener('click',()=>{
    location.href="./main.html";
})

function DataObj(name,imgurl,star,heart,view,title){
    this.name=name;
    this.imgurl=imgurl;
    this.star=star;
    this.heart=heart;
    this.view=view;
    this.title=title;
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
    (new DataObj("Virat","../Images/img1.jpg",randomStar(),randomHeart(),randomView(),"Happy Goldy")),
    (new DataObj("Mithali","../Images/img2.jpg",randomStar(),randomHeart(),randomView(),"Love Birds")),
    (new DataObj("Sachin","../Images/img3.jpg",randomStar(),randomHeart(),randomView(),"Cartoon Cluster")),
    (new DataObj("Rahul","../Images/img4.jpg",randomStar(),randomHeart(),randomView(),"Sleeping Princess")),
    (new DataObj("Dhoni","../Images/img5.jpg",randomStar(),randomHeart(),randomView(),"Real Eye")),
    (new DataObj("Smirthi","../Images/img6.jpg",randomStar(),randomHeart(),randomView(),"Mafia")),
    (new DataObj("Rohit","../Images/img7.jpg",randomStar(),randomHeart(),randomView(),"Colorful Roses")),
    (new DataObj("Arjun","../Images/img8.jpg",randomStar(),randomHeart(),randomView(),"Twin Sparrow")),
    (new DataObj("Priya","../Images/img9.jpg",randomStar(),randomHeart(),randomView(),"Rabbit Love")),
    (new DataObj("Raina","../Images/img10.jpg",randomStar(),randomHeart(),randomView(),"Cute Girl")),
    (new DataObj("Rishab","../Images/img11.jpg",randomStar(),randomHeart(),randomView(),"Melon Day")),
    (new DataObj("Messi","../Images/img12.jpg",randomStar(),randomHeart(),randomView(),"White Rose")),
    (new DataObj("Neymar","../Images/img13.jpg",randomStar(),randomHeart(),randomView(),"Face PEncil Art")),
    (new DataObj("Sunil","../Images/img14.jpg",randomStar(),randomHeart(),randomView(),"Bird Family")),
    (new DataObj("Geetha","../Images/img15.jpg",randomStar(),randomHeart(),randomView(),"Bathing Sparrow")),
    (new DataObj("Vishal","../Images/img16.jpg",randomStar(),randomHeart(),randomView(),"Wall Painting")),
    (new DataObj("Ashwin","../Images/img17.jpg",randomStar(),randomHeart(),randomView(),"Beautiful Roses")),
    (new DataObj("Vedha","../Images/img18.jpg",randomStar(),randomHeart(),randomView(),"Glorious Flowers")),
    (new DataObj("Ajith","../Images/img19.jpg",randomStar(),randomHeart(),randomView(),"Spring Bird")),
    (new DataObj("Lara","../Images/img20.jpg",randomStar(),randomHeart(),randomView(),"Couple Night")),
    (new DataObj("Warner","../Images/img21.jpg",randomStar(),randomHeart(),randomView(),"Feeling alone")),
    (new DataObj("Smith","../Images/img22.jpg",randomStar(),randomHeart(),randomView(),"The Eagle")),
    (new DataObj("Root","../Images/img23.jpg",randomStar(),randomHeart(),randomView(),"Black Kitten")),
    (new DataObj("Sara","../Images/img24.jpg",randomStar(),randomHeart(),randomView(),"Oil Painting")),
    (new DataObj("Kavya","../Images/img25.jpg",randomStar(),randomHeart(),randomView(),"Blue Tree")),
    (new DataObj("Surya","../Images/img26.jpg",randomStar(),randomHeart(),randomView(),"Cool Girl")),
    (new DataObj("Amit","../Images/img27.jpg",randomStar(),randomHeart(),randomView(),"Women Life")),
    (new DataObj("Neesham","../Images/img28.jpg",randomStar(),randomHeart(),randomView(),"My Cute Kitten")),
]

function dispaly(){
    artContainer.innerHTML=``;
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
}

dispaly();

function displayArt(art){
   let key = art.id;
   sessionStorage.setItem("key",JSON.stringify(dataArr[key-1]));
   window.location.href="./display.html";
}

uploadBtn.onclick=()=>{
    document.getElementById('art-conatiner').style.filter = "blur(30px)";
    document.getElementById('uploadForm').style.display = "block";
}

document.getElementById('closeForm').onclick=()=>{
    document.getElementById('art-conatiner').style.filter = "blur(0)";
    document.getElementById('uploadForm').style.display = "none";
}

document.getElementById('formBtn').onclick=()=>{
    let newTitle = document.getElementById('newTitle').value;
    let newImg =  document.getElementById('newImg');
    if(newTitle.length>3 && newImg){
        const objectURL = URL.createObjectURL(newImg.files[0]);
        dataArr.push((new DataObj("Vimal",objectURL,0,0,0,newTitle)));
        dispaly();
        document.getElementById('art-conatiner').style.filter = "blur(0)";
        document.getElementById('uploadForm').style.display = "none";
    }
    else{
        document.getElementById('error').style.display = "inherit"
    }
    

}

document.getElementById("logout").onclick = () =>{
    window.location.href = "../index.html"
}