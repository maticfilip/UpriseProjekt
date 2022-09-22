//---------array of birthdates-------//
var datumRodjenja;
const min = 1950;
const max = 2010;
function noviDatumRodjenja(){
    var month = Math.ceil(Math.random() * 12);
    var day = Math.ceil(Math.random() * 28);
    var year = Math.floor(Math.random() * (max - min) + min);

// const { mainModule } = require("process");

    if(month < 10) {
        month = "0" + month;
    }
    if(day < 10) {
        day = "0" + day;
    }
    datumRodjenja = month + "/" + day + "/" + year;

}
//-----------array of ages---------//
brojac=100;
datumiRodjenja=[]
for(let i=0;i<brojac;i++){
    noviDatumRodjenja();
    datumiRodjenja.push(datumRodjenja);
};
// console.log(datumiRodjenja);
dobi=[];
function izracunajDob(){
    for(let i=0;i<datumiRodjenja.length;i++){
        var datum=datumiRodjenja[i];
        
        var danas=new Date();
        // console.log(danas);
        var dob=danas.getFullYear()-datum.substr(datum.length-4);
        var mjesec=danas.getMonth()-datum.substring(0,2);
        if(mjesec<0 || (mjesec===0 && danas.getDate()<datum.substring(3,5))){
            dob--;
        };
        dobi.push(dob);
    }
}
izracunajDob();
//------------lat and lon of Iblerov Trg 10--------------// 

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=111 Iblerov Trg 10, Zagreb, Croatia&key=AIzaSyB9_4plZF-x1Sy_twY4jGKI17UzafJa81w`)
.then((response) => {
    return response.json();
}).then(jsonData => {
    const LocationTrg=(jsonData.results[0].geometry.location);

})
.catch(error => {
    console.log(error);
})
//-------------generiranje lokacija unutar RH---//
function generateGeo(){
    pairs=[]
    Locations=[];

    function generateRandomLocation(){
        var num=((Math.random()*(19.447-13.489))+13.489).toFixed(3);
        var num1=((Math.random()*(46.554-42.392)+42.392).toFixed(3));
        pairs.push(num1,num);
        Locations.push("("+pairs+")");
        pairs=[];
    }
    for(i=0;i<=100;i++){
        generateRandomLocation()
    };
    // console.log(Locations);


};
generateGeo();