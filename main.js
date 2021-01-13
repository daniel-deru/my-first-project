
const audiR8 = {
    name: "Audi R8",
    img: "audir8.jpg",
    "power": "20000 hp",
    "torque": "1000 N.m",
    "top speed": "400 km/h",
    "acceleration":" 3.5 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.5 l/km",
    "price": "R200000",
    "year": "2015"
}
 const NissanGTR = {
    name: "Nissan GTR",
    img: "nissangtr.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const ChevyCorvette = {
    name: "Chevrolet Corvette",
    img: "chevycorvette.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const FordMustang = {
    name: "Ford Mustang",
    img: "fordmustang.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const FerrariLaFerrari = {
    name: "Ferrari LaFerrari",
    img: "laferrari.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const LamboAventador = {
    name: "Lamborgini Aventador",
    img: "lamboAventador.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const McLarenP1 = {
    name: "McLaren P1",
    img: "mclarenp1.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const MercedesAMG = {
    name: "Mercedes AMG",
    img: "mercamg.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const PaganiHyura = {
    name: "Pagani Hyura",
    img: "paganihyura.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}
 const Porsche911 = {
    name: "Porsche 911",
    img: "porsche911.jpg",
    "power": "200 hp",
    "torque": "200 N.m",
    "top speed": "200 km/h",
    "acceleration": "2.2 s",
    "ground clearance": "10 cm",
    "fuel economy": "0.1 l/km",
    "price": "R2000000",
    "year": "2015"
}

let cars = [audiR8, 
            NissanGTR, 
            ChevyCorvette, 
            FordMustang, 
            FerrariLaFerrari, 
            LamboAventador, 
            McLarenP1, 
            MercedesAMG,
            PaganiHyura, 
            Porsche911
    ];



let unOrderedList = document.getElementById("car-names");
let li = unOrderedList.getElementsByTagName('li');
let img = document.getElementById("img")
let carName = document.getElementById("car-name");
carName.innerText = cars[1].name

let power = document.getElementById("power");
let torque = document.getElementById("torque");
let topSpeed = document.getElementById("top-speed");
let acceleration = document.getElementById("acceleration");
let groundClearance = document.getElementById("ground-clearance");
let fuelEconomy = document.getElementById("fuel-economy");
let price = document.getElementById("price");
let year = document.getElementById("year");




for(let i = 0; i < cars.length; i++){
    
    // this is to append the car names in the cars contianer

    let listelement = document.createElement('li');
    unOrderedList.appendChild(listelement)
    li[i].innerHTML = `${cars[i].name}`;
    li[i].classList.add("mycar");

    // this is for the img hover 

    li[i].addEventListener("mouseover", () => {
        if(li[i].innerText == cars[i].name){
            carName.innerText = cars[i].name
            img.style.backgroundImage = `URL(${cars[i].img})`
        } else{
            img.style.backgroundImage = `URL("nissangtr.jpg")`
        }
    })

    // this is to append the cars data to the stats 
    
    let values = Object.values(cars[i])

    li[i].addEventListener("click", () => {
       
        power.innerText = values[2]
        torque.innerText = values[3]
        topSpeed.innerText = values[4]
        acceleration.innerText = values[5]
        groundClearance.innerText = values[6]
        fuelEconomy.innerText = values[7]
        price.innerText = values[8]
        year.innerText = values[9]

    })
} 


let carsButton = document.getElementById("cars");
let aboutButton = document.getElementById("about");
let contactButton = document.getElementById("contact");
let carsSlider = document.getElementById("cars-container").style;
let aboutSlider = document.getElementById("about-container").style;
let contactSlider = document.getElementById("contact-container").style;

carsButton.addEventListener("click", () => {
    if(carsSlider.transform == 'translateX(0px)'){
        carsSlider.transform = "translateX(600px)";
        aboutSlider.transform = "translateX(0px)";
        contactSlider.transform = "translateX(0px)";
    } else carsSlider.transform = "translateX(0px)" 
});
aboutButton.addEventListener("click", () => {
    if(aboutSlider.transform == 'translateX(0px)') {
        aboutSlider.transform = "translateX(600px)";
        carsSlider.transform = "translateX(0px)";
        contactSlider.transform = "translateX(0px)";
    } else aboutSlider.transform = "translateX(0px)" 
});
contactButton.addEventListener("click", () => {
    if(contactSlider.transform == 'translateX(0px)') {
        contactSlider.transform = "translateX(600px)";
        aboutSlider.transform = "translateX(0px)";
        carsSlider.transform = "translateX(0px)";
    } else contactSlider.transform = "translateX(0px)" 
});

