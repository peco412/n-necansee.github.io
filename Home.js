//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

document.addEventListener("DOMContentLoaded", function() {
    showContent(1);
});

function showContent(index) {
    // Lấy ra phần tử pdk-show tương ứng với pdk-box được nhấp vào
    var content = document.getElementById("content" + index);
    // Hiển thị phần tử pdk-show tương ứng
    content.style.display = 'grid'; // Thay đổi hiển thị thành grid
    // Ẩn các phần tử pdk-show khác
    var allContent = document.querySelectorAll('.pdk-show');
    allContent.forEach(function(item) {
        if (item.id !== "content" + index) {
            item.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Thêm lớp active cho pdk-box tương ứng
    document.querySelector('.pdk-box[data-index="1"]').classList.add('active');
});

function showContent(index, element) {
    // Lấy ra tất cả các pdk-box
    var allPdkBoxes = document.querySelectorAll('.pdk-box');
    
    // Xóa lớp active khỏi tất cả các pdk-box
    allPdkBoxes.forEach(function(box) {
        box.classList.remove('active');
    });
    
    // Thêm lớp active cho pdk-box được nhấp vào
    element.classList.add('active');
    
    // Lấy ra phần tử pdk-show tương ứng với pdk-box được nhấp vào
    var content = document.getElementById("content" + index);
    // Hiển thị phần tử pdk-show tương ứng
    content.style.display = 'grid'; // Thay đổi hiển thị thành grid
    // Ẩn các phần tử pdk-show khác
    var allContent = document.querySelectorAll('.pdk-show');
    allContent.forEach(function(item) {
        if (item.id !== "content" + index) {
            item.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, display the content corresponding to the first box
    showContentt(1);

    // Add click event listeners to all mdg-box elements
    var mdgBoxes = document.querySelectorAll('.mdg-box');
    mdgBoxes.forEach(function(box) {
        box.addEventListener('click', function(event) {
            var index = parseInt(this.dataset.index); // Get the index from the data-index attribute
            showContentt(index, this); // Show content based on the clicked box
        });
    });
});

function showContentt(index, element) {
    // Hide all mdg-show elements
    var allContentt = document.querySelectorAll('.mdg-show');
    allContentt.forEach(function(item) {
        item.style.display = 'none';
    });

    // Remove the 'active' class from all mdg-box elements
    var allMdgBoxes = document.querySelectorAll('.mdg-box');
    allMdgBoxes.forEach(function(box) {
        box.classList.remove('active');
    });

    // Add the 'active' class to the clicked mdg-box element
    if (element) {
        element.classList.add('active');
    }

    // Show the content corresponding to the clicked box
    var contentt = document.getElementById("contentt" + index);
    contentt.style.display = 'grid';
}

document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, display the content corresponding to the first box
    showContenttt(1);

    // Add click event listeners to all kbb-box elements
    var kbbBoxes = document.querySelectorAll('.kbb-box');
    kbbBoxes.forEach(function(box) {
        box.addEventListener('click', function(event) {
            var index = parseInt(this.dataset.index); // Get the index from the data-index attribute
            showContenttt(index, this); // Show content based on the clicked box
        });
    });
});

function showContenttt(index, element) {
    // Hide all kbb-show elements
    var allContenttt = document.querySelectorAll('.kbb-show');
    allContenttt.forEach(function(item) {
        item.style.display = 'none';
    });

    // Remove the 'active' class from all kbb-box elements
    var allKbbBoxes = document.querySelectorAll('.kbb-box');
    allKbbBoxes.forEach(function(box) {
        box.classList.remove('active');
    });

    // Add the 'active' class to the clicked kbb-box element
    if (element) {
        element.classList.add('active');
    }

    // Show the content corresponding to the clicked box
    var contenttt = document.getElementById("contenttt" + index);
    contenttt.style.display = 'grid';
}