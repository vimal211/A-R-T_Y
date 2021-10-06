let obj = JSON.parse(sessionStorage.getItem("key"));

let displayTop = document.getElementsByClassName('display_top')[0];
let likes = obj.heart + "245";
let likesAdd = false;
let fragment = `
<img src="${obj.imgurl}" alt="" srcset="">
<div class="art_des">
    <h2>Happy Goldy</h2>
    <p>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae qui obcaecati quidem eum dolorum vero, amet veritatis maxime error cumque deserunt cum voluptates assumenda consequatur! Corporis earum est consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur eveniet similique dolor et a? Modi quisquam, impedit veritatis magnam quaer</p>
    <div>
        <i class=" heart far fa-heart"><span id="likes">${likes}</span></i>
        <i class=" star fas fa-star"><span>${obj.star} star</span></i>
        <i class=" eye fas fa-eye"><span>${obj.view},625</span></i>
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
    location.href="./index.html";
})

document.getElementsByClassName('nav_item')[0].addEventListener('click',()=>{
    location.href="./index.html";
})

document.getElementById('addBtn').addEventListener('click',()=>{
    let comment = document.getElementById('input').value;
    if(comment.length>0){
        document.getElementById('comment').innerHTML+=`<p><i class="fas fa-user-circle"></i>Vimal<span>${comment}</span></p>`
    }
})

