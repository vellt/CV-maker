function cim(cim){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-house-door-fill fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Cím</div>
            <div class="ms-2 text-wrap fs-5">${cim}</div>
        </div>
    </div>
    `
}

function telefonszam(telefonszam){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-telephone-fill fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Telefonszám</div>
            <div class="ms-2 text-wrap fs-5">${telefonszam}</div>
        </div>
    </div>
    `
}

function email(email){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-envelope-fill fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Email</div>
            <div class="ms-2 text-wrap fs-5">${email}</div>
        </div>
    </div>
    `
}

function szuletesiIdo(szuletesiIdo){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-calendar-fill fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Születési idő</div>
            <div class="ms-2 text-wrap fs-5">${szuletesiIdo}</div>
        </div>
    </div>
    `;
}

function szuletesiHely(szuletesiHely){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-geo-alt-fill fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Születési hely</div>
            <div class="ms-2 text-wrap fs-5">${szuletesiHely}</div>
        </div>
    </div>
    `
}

function weboldal({link_neve, link_url}){
    return `
    <div class="row m-2">
        <div class="col-1">
            <div class="m-2">
                <i class="bi bi-globe2 fs-4 text-warning-emphasis"></i>
            </div>
        </div>
        <div class="col-11 ">
            <div class="ms-2 mt-2 fs-4 text-warning-emphasis fw-semibold">Weboldal</div>
            <div class="ms-2 fs-5"><a href="${link_url}" class="text-warning-emphasis">${link_neve}</a></div>
        </div>
    </div>
    `
}

function erdeklodesiKor(element){
    return `<div class="ms-4 fs-5"><i class="bi bi-square-fill fs-5 text-warning-emphasis me-2"></i>${element}</div>`
}

function tanulmany({iskola_tipusa, iskola_neve, kezdete, vege,varos, leiras}){
    return `
    <div class="m-4">
        <div class="d-flex justify-content-between">
            <div class="fw-bold">${iskola_tipusa}</div>
            <div>${kezdete} - ${vege}</div>
        </div>
        <div class="text-warning-emphasis">${iskola_neve}, ${varos}</div>
        <div> ${leiras} </div>
    </div>
    `
}

function munka({munkakor, ceg_neve, varos, kezdete, vege, leiras}){
    return `
    <div class="m-4">
        <div class="d-flex justify-content-between">
            <div class="fw-bold">${munkakor}</div>
            <div>${kezdete} - ${vege}</div>
        </div>
        <div class="text-warning-emphasis">${ceg_neve}, ${varos}</div>
        <div>${leiras}</div>
    </div>
    `
}

function keszseg({keszseg_neve, erteke}){
    let elements='';
    for (let i = 0; i < 5; i++) {
        if(i<erteke){
            elements+='<i class="bi bi-circle-fill fs-5 text-warning-emphasis me-2"></i>'
        }else{
            elements+='<i class="bi bi-circle fs-5 text-warning-emphasis me-2"></i>'
        }
    }
    return `
    <div class="col">${keszseg_neve}</div>
    <div class="col">
        <div class="d-flex">
            ${elements}
        </div>
    </div>
    `
}