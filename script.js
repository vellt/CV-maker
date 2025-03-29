const templateJson=document.getElementById("template-json")
const uploadJson=document.getElementById("upload-json")
const uploadImg=document.getElementById("upload-img")
const jsonInput=document.getElementById('jsonInput')
const kepInput = document.getElementById("kepInput");
const preview=document.getElementById("preview")

templateJson.addEventListener('click',jsonLetoltes)
uploadJson.addEventListener('click', jsonFeltoltEsBeolvas)
uploadImg.addEventListener('click', kepFeltoltEsBeolvas)
window.addEventListener('DOMContentLoaded',loadTemplateJson)

async function loadTemplateJson(){
    const response=await fetch('./template.json');
    const json=await response.json();
    displayData(json);
}

function jsonLetoltes() {
    const a = document.createElement('a');
    a.href = './template.json'; // Az URL a meglévő JSON fájlhoz
    a.download = 'template.json'; // Letöltéskori név
    a.click();
}

function jsonFeltoltEsBeolvas() {
    jsonInput.click(); // megnyitja a fájlválasztót
}

function kepFeltoltEsBeolvas() {
    kepInput.click(); // megnyitja a fájlválasztót
}
  
jsonInput.addEventListener('change', async ()=> {
    const file = jsonInput.files[0];
    if (!file) return;

    const text = await file.text();
    try {
      const json = JSON.parse(text);
      //window.jsonData=json;
      displayData(json);
      console.log("JSON tartalom:", json);
    } catch (e) {
        console.log(e);
      alert("Hibás JSON fájl");
    }
});

kepInput.addEventListener('change', async ()=> {
    const file = kepInput.files[0];
    if (!file) return;
    preview.src = URL.createObjectURL(file);
});

function displayData(json){
    console.log(json.nev);
    const nev=document.getElementById('nev');
    const szemelyesAdatok=document.getElementById('szemelyes-adatok');
    const erdeklodesiKorok=document.getElementById('erdeklodesi-korok');
    const rolam=document.getElementById('rolam')
    const tanulmanyok=document.getElementById('tanulmanyok')
    const munkatapasztalat=document.getElementById('munkatapasztalat')
    const keszsegek=document.getElementById('keszsegek')

    nev.innerHTML=json.nev;
    szemelyesAdatok.innerHTML='';
    if(json.szemelyes_adatok.cim){
        console.log(json.szemelyes_adatok.cim);
        szemelyesAdatok.innerHTML+=cim(json.szemelyes_adatok.cim)
    }
    if(json.szemelyes_adatok.telefonszam){
        szemelyesAdatok.innerHTML+=telefonszam(json.szemelyes_adatok.telefonszam)
    }
    if(json.szemelyes_adatok.email){
        szemelyesAdatok.innerHTML+=email(json.szemelyes_adatok.email)
    }
    if(json.szemelyes_adatok.szuletesi_ido){
        szemelyesAdatok.innerHTML+=szuletesiIdo(json.szemelyes_adatok.szuletesi_ido)
    }
    if(json.szemelyes_adatok.szuletesi_hely){
        szemelyesAdatok.innerHTML+=szuletesiHely(json.szemelyes_adatok.szuletesi_hely)
    }
    if(json.szemelyes_adatok.weboldal){
        szemelyesAdatok.innerHTML+=weboldal(json.szemelyes_adatok.weboldal)
    }

    erdeklodesiKorok.innerHTML='';
    if(json.erdeklodesi_korok){
        json.erdeklodesi_korok.forEach(element => {
            erdeklodesiKorok.innerHTML+=erdeklodesiKor(element);
        });
    }

    rolam.innerHTML=json.rolam

    tanulmanyok.innerHTML="";
    if(json.tanulmanyok){
        json.tanulmanyok.forEach(element => {
            tanulmanyok.innerHTML+=tanulmany(element);
        });
    }
    

    munkatapasztalat.innerHTML="";
    if(json.munkatapasztalat){
        json.munkatapasztalat.forEach(element => {
            munkatapasztalat.innerHTML+=munka(element);
        });
    }

    keszsegek.innerHTML="";
    if(json.keszsegek){
        json.keszsegek.forEach(element => {
            keszsegek.innerHTML+=keszseg(element);
        });
    }
}

