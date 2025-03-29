const templateJson = document.getElementById("template-json");
const uploadJson = document.getElementById("upload-json");
const uploadImg = document.getElementById("upload-img");
const jsonInput = document.getElementById('jsonInput');
const kepInput = document.getElementById("kepInput");
const preview = document.getElementById("preview");

templateJson.onclick = () => {
    const a = document.createElement('a');
    a.href = './template.json'; // Az URL a meglévő JSON fájlhoz
    a.download = 'template.json'; // Letöltéskori név
    a.click();
}

uploadJson.onclick = () => jsonInput.click();

uploadImg.onclick = () => kepInput.click();

jsonInput.onchange = async () => {
    const file = jsonInput.files[0];
    if (!file) return;
    const text = await file.text();
    try {
        const json = JSON.parse(text);
        window.beolvasottJson = json;
        console.log("JSON tartalom:", json);
    } catch (e) {
        alert("Hibás JSON fájl");
    }
}

kepInput.onchange = async () => {
    const file = kepInput.files[0];
    if (!file) return;
    preview.src = URL.createObjectURL(file);
}

