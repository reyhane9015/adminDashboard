function btnHandler(e){
    myElement = e.currentTarget;
    let parent = myElement.parentNode;

    parent.querySelectorAll(".btn-info").forEach((elem) => {
        elem.classList.remove("btn-active");
    });
    myElement.classList.add("btn-active");
}


function contentHandler(e){
    let element = e.currentTarget;

    document.querySelectorAll(".content").forEach((tabcon) =>{
        tabcon.style.display= "none";

        if (element.id === "daily-btn") {
            document.querySelector("#daily").style.display ="block";
        }
        if (element.id === "weekly-btn") {
            document.querySelector("#weekly").style.display = "block";
        }
        if (element.id === "monthly-btn") {
            document.querySelector("#monthly").style.display = "block";
        }
    })
}


function openProfileModal(e) {
    document.querySelector(".profileBackdrop").style.right = "0";
    document.querySelector(".profile-modal").style.right = "0";
}

function closeProfileModal(e) {
    document.querySelector(".profileBackdrop").style.right = "-100vw";
    document.querySelector(".profile-modal").style.right = "-100vw";
}

function toggleMenu(e) {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function openSubNav(e){
    let element = e.currentTarget;
    let content = e.currentTarget.parentNode.querySelector('.subnav-content');
    content.classList.toggle('animated');
    element.querySelector('#arrow').classList.toggle('animated');
}


document.querySelectorAll(".subnav-content").forEach (e => {
    e.style.height = e.offsetHeight + 20 + "px";
    e.classList.add('animated');
    e.style.transition = "all 0.3s";
})