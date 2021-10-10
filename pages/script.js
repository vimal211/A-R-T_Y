let star = ["3.0", "3.5", "4.0", "4.5"];
let artistArr = [
  "Virat",
  "Mithali",
  "Sachin",
  "Rahul",
  "Dhoni",
  "Smirthi",
  "Rohit",
  "Arjun",
  "Priya",
  "Raina",
  "Rishab",
  "Messi",
  "Neymar",
  "Sunil",
  "Geetha",
  "Vishal",
  "Ashwin",
  "Vedha",
  "Ajith",
  "Lara",
  "Warner",
  "Smith",
  "Root",
  "Sara",
  "Kavya",
  "Surya",
  "Amit",
  "Neesham",
];
let artTitle = [
  "Happy Goldy",
  "Love Birds",
  "Cartoon Cluster",
  "Sleeping Princess",
  "Real Eye",
  "Mafia",
  "Colorful Roses",
  "Twin Sparrow",
  "Rabbit Love",
  "Cute Girl",
  "Melon Day",
  "White Rose",
  "Face Pencil Art",
  "Bird Family",
  "Bathing Sparrow",
  "Wall Painting",
  "Beautiful Roses",
  "Glorious Flowers",
  "Spring Bird",
  "Couple Night",
  "Feeling alone",
  "The Eagle",
  "Black Kitten",
  "Oil Painting",
  "Blue Tree",
  "Cool Girl",
  "Women Life",
  "My Cute Kitten",
];

let artContainer = document.getElementById("art-conatiner");
let uploadBtn = document.getElementById("uploadBtn");

document.getElementsByClassName("logo")[0].addEventListener("click", () => {
  location.href = "./main.html";
});

document.getElementsByClassName("nav_item")[0].addEventListener("click", () => {
  location.href = "./main.html";
});

function DataObj(name, imgurl, star, heart, view, title) {
  this.name = name;
  this.imgurl = imgurl;
  this.star = star;
  this.heart = heart;
  this.view = view;
  this.title = title;
}

function randomStar() {
  return star[Math.floor(Math.random() * 3)];
}
function randomHeart() {
  return Math.floor(Math.random() * (80 - 20) + 20);
}
function randomView() {
  return Math.floor(Math.random() * (200 - 100) + 100);
}

let dataArr = [];

for (let i = 0; i < artistArr.length; i++) {
  dataArr.push(
    new DataObj(
      artistArr[i],
      `../Images/img${i + 1}.jpg`,
      randomStar(),
      randomHeart(),
      randomView(),
      artTitle[i]
    )
  );
}

function dispaly() {
  artContainer.innerHTML = ``;
  for (let i = 0; i < dataArr.length; i++) {
    let fragment = `
    <div id="${i + 1}" onclick="displayArt(this)" class="arts">
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
    `;
    artContainer.innerHTML += fragment;
  }
}

dispaly();

function displayArt(art) {
  let key = art.id;
  sessionStorage.setItem("key", JSON.stringify(dataArr[key - 1]));
  window.location.href = "./display.html";
}

uploadBtn.onclick = () => {
  document.getElementById("art-conatiner").style.filter = "blur(30px)";
  document.getElementById("uploadForm").style.display = "block";
};

document.getElementById("closeForm").onclick = () => {
  document.getElementById("art-conatiner").style.filter = "blur(0)";
  document.getElementById("uploadForm").style.display = "none";
};

document.getElementById("formBtn").onclick = () => {
  let newTitle = document.getElementById("newTitle").value;
  let newImg = document.getElementById("newImg");
  if (newTitle.length > 3 && newImg) {
    const objectURL = URL.createObjectURL(newImg.files[0]);
    dataArr.push(new DataObj("Vimal", objectURL, 0, 0, 0, newTitle));
    dispaly();
    document.getElementById("art-conatiner").style.filter = "blur(0)";
    document.getElementById("uploadForm").style.display = "none";
  } else {
    document.getElementById("error").style.display = "inherit";
  }
};

document.getElementById("logout").onclick = () => {
  window.location.href = "../index.html";
};
