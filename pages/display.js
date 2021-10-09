let obj = JSON.parse(sessionStorage.getItem("key"));

let displayTop = document.getElementsByClassName('display_top')[0];

let likes = 0;
let likesAdd = false;
if(obj.heart !==0){
    likes = obj.heart + (Math.floor(Math.random()*(999-100)+100)).toString();
}

let view = 1;
if(obj.view !==0){
    view = obj.view + (Math.floor(Math.random()*(999-100)+100)).toString();
}

let fragment = `
<img src="${obj.imgurl}" alt="" srcset="">
<div class="art_des">
    <h2>${obj.title}</h2>
    <p>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae qui obcaecati quidem eum dolorum vero, amet veritatis maxime error cumque deserunt cum voluptates assumenda consequatur! Corporis earum est consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur eveniet similique dolor et a? Modi quisquam, impedit veritatis magnam quaer</p>
    <div>
        <i class=" heart far fa-heart"><span id="likes">${likes}</span></i>
        <i style="color:#ecd616" class=" fas fa-star"><span>${obj.star} star</span></i>
        <i class=" eye fas fa-eye"><span>${view}</span></i>
    </div>
    <button class="buyBtn"> Buy</button> <br>
    <button class="sponBtn">Sponser</button>
` ;

displayTop.innerHTML = fragment;
let likeTag = document.getElementsByClassName('heart')[0];

likeTag.addEventListener('click',()=>{

    if(likesAdd){
        likesAdd=false;
        likes=parseInt(likes)-1;
        likeTag.classList.remove('fas');
        likeTag.classList.add('far')
        document.getElementById('likes').innerHTML = `${likes}`;
    }
    else{
        likesAdd=true;
        likes=parseInt(likes)+1;
        likeTag.classList.remove('far');
        likeTag.classList.add('fas')
        document.getElementById('likes').innerHTML = `${likes}`;
    }
    
})

document.getElementsByClassName('logo')[0].addEventListener('click',()=>{
    location.href="./main.html";
})

document.getElementsByClassName('nav_item')[0].addEventListener('click',()=>{
    location.href="./main.html";
})

if(likes!==0){
     document.getElementById('comment').innerHTML=`<p><i class="fas fa-user-circle"></i>Vishal<span>Great work mate👍</span></p>
     <p><i class="fas fa-user-circle"></i>Simran<span>Awoesom work ️‍🔥</span></p>`
}

document.getElementById('addBtn').addEventListener('click',()=>{
    let comment = document.getElementById('input').value;
    if(comment.length>0){
        document.getElementById('comment').innerHTML+=`<p><i class="fas fa-user-circle"></i>Vimal<span>${comment}</span></p>`
    }
    document.getElementById('input').value = null;
})
//rating section
let rateStar = 0;

function executeRating(stars) {
    if(likes <2){
        window.alert("You Can't rate your own art!!")
    } else{
        rateStar = stars;
        const ratingStar = [...(document.getElementsByClassName('star'))];
        const starClassActive = "star fas fa-star";
        const starClassInactive = "star far fa-star";
        for(let i =0;i<stars;i++){
           (ratingStar[i].className = starClassActive)
        }
        for(let j=ratingStar.length-1;j>=stars;j--){
           (ratingStar[j].className = starClassInactive);
        }
        if(rateStar>0){
            document.getElementsByClassName('submitBtn')[0].style.cursor = "pointer";
            document.getElementsByClassName('submitBtn')[0].style.backgroundColor="#FF6A6A"
        }
    }
    
  }

document.getElementsByClassName('submitBtn')[0].onclick = () =>{
     finalRating(rateStar); 
}

function finalRating(rate){
    console.log(rate);
    let star = '';
    for(let i = 1;i<=rate;i++){
        star+='⭐ ';
    }
    const ratingStar = [...(document.getElementsByClassName('star'))];
    for(let j = 0;j<ratingStar.length;j++){
        ratingStar[j].className = "star far fa-star";
    }
    document.getElementById('your_rating').innerText=`Your Rating : ${star}`;
    document.getElementsByClassName('submitBtn')[0].style.cursor = "not-allowed";
    document.getElementsByClassName('submitBtn')[0].style.backgroundColor="#ff6a6a96"   
}


//logout section
document.getElementById("logout").onclick = () =>{
    window.location.href = "../login.html";
}