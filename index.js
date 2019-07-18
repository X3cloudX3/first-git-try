const vacation_DOM = {
    // create_card_form: document.getElementById("myform"),
    destination: document.getElementById("destination"),
    price: document.getElementById("price"),
    picture_url: document.getElementById("picture_url"),
    rating: document.getElementById("rating"),
    main_container: document.getElementById("main_container"),
}


let arrayOfData = [];




function draw() {
    clear()
    for (let i = 0; i < arrayOfData.length; i++) {

        drawCard(arrayOfData[i])


    }
}

function drawCard(vacation) {
    const { main_container } = vacation_DOM;
    const vacationCard = createNewCard(vacation);
    if (!vacationCard) {
        return;
    }
    main_container.append(vacationCard)


}

function clear() {
    vacation_DOM.main_container.innerHTML = ""
}

function createNewCard(vacation) {
    const { destination, price, picture_url, rating, } = vacation;
    if (!destination || !price || !picture_url) return;

    const cardMain = document.createElement("div");
    cardMain.className = "card mx-5 mt-5 d-inline-block";
    cardMain.style = "width: 299px;"
    cardMain.style.border = "thick solid black";
    cardMain.style.backgroundColor = "rgba(255, 255, 255, 0.493)"
    cardMain.id = destination

    const cardBody1 = document.createElement("div");
    cardBody1.className = "card-body";

    const cardHeader = document.createElement("h3");
    cardHeader.innerHTML = destination

    cardBody1.append(cardHeader);


    const cardimg = document.createElement("img");
    cardimg.src = picture_url;
    cardimg.className = "card-img-top"
    cardimg.style.height = '180px';
    cardimg.style.width = '286px';

    cardBody1.append(cardimg);

    const cardList = document.createElement("ul");
    cardList.className = "list-group list-group-flush";

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");

    li1.innerHTML = "price: " + price;
    li2.innerHTML = "rating: " + "sorry...."


    li1.className = "list-group-item";
    li2.className = "list-group-item";

    cardList.append(li1, li2);

    const cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";
    cardBody2.id = "cardBody2"


    const deleteButton = document.createElement("Button")
    deleteButton.innerText = "delete";

    deleteButton.className = "btn btn-danger btn-block";
    deleteButton.addEventListener("click", deleteVacationCard)

    const likeButton = document.createElement("Button")
    likeButton.innerText = "delete";

    // likeButton.className = "btn btn-primary btn-block";
    // likeButton.addEventListener("click", likeCounter)

    cardBody2.append(deleteButton)

    cardMain.append(cardBody1, cardList, cardBody2);

    vacation_DOM.main_container.append(cardMain)
}

function saveVacation() {
    const { destination, price, picture_url, rating, } = vacation_DOM

    const index = findI(arrayOfData, destination.value)
    if (index !== undefined) {
        draw()

        return;
    }
    arrayOfData.push(new VacationConst(destination.value, price.value, picture_url.value,
        rating.value))
    saveToLocalStorage("carsData", arrayOfData);
    draw()


}

function deleteVacationCard() {
    deleteCard(this.parentElement.parentElement.id);
}

function deleteCard(id) {
    const i = findI(arrayOfData, id);
    if (!id) return;
    arrayOfData.splice(i, 1);
    saveToLocalStorage("carsData", arrayOfData);
    draw()
}

function VacationConst(_place, _cost, _pic, _starInd, ) {
    this.destination = _place;
    this.price = _cost;
    this.picture_url = _pic;
    this.rating = _starInd;
}

function findI(array, id) {
    let VacationId = id.toLowerCase()
    for (let i = 0; i < array.length; i++) {
        let VacationIndex = array[i].destination
        if (VacationId === VacationIndex) {
            saveToLocalStorage("carsData", arrayOfData);
            return i;
        }

    }
}


function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function init() {
    arrayOfData = JSON.parse(localStorage.getItem("cardData")) || [];
    draw(arrayOfData);
}
init();

// function likeCounter() {

// }



/// i tried to add stars sry...
// function starRating(rating, li2) {
//     const starImg = document.createElement("img");
//     starImg.src = "stars.png";
//     starImg.style.height = '35px';
//     starImg.style.width = '35px';
//     if (rating === "bad") {
//         console.log("check");

//         li2.append(starImg)
//     }



// }


// function starRating(data, id, li) {
//     const { rating } = vacation_DOM
//     const cardIndex = findI(arrayOfData, this.parentElement.parentElement.id);
//     if (!cardIndex) return;
//     this.parentElement.querySelector(destination.value).querySelector(li2)
//     const starImg = document.createElement("img");
//     starImg.src = "stars.png";
//     starImg.style.height = '35px';
//     starImg.style.width = '35px';
//     //     if (rating.value === "bad") {
    //         console.log("check");

    //         li2.append(starImg)
    //     }
    //     if (rating.value === "regular") return starImg + starImg
    //     if (rating.value === "good") return starImg + starImg + starImg
    //     if (rating.value === "excellent") return starImg + starImg + starImg + starImg
    // }

// function starRating(data, id) {
//     const { destination, rating } = vacation_DOM
//     let index= findI(data, id)
//     if (id === destination.value) {


//        }

//     }

// }



