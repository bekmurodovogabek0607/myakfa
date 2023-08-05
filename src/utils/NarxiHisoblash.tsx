interface IProfil {
    profil: string
    kosa: number
    orta: number
    shishaushla: number
}
const ww = 5

export default function NarxHisoblash(style: string | undefined, eni: number | undefined, boyi: number | undefined, tepa: number, pallaEni: number, profil: IProfil, shisha: number, mexanizm: number, tor: number, zamok: number): number {
    if (eni == undefined || boyi == undefined) return 10
    else {
        switch (style) {
            case 'Derazastyle3':
                return (
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((eni - ww), profil.orta) +
                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha) +
                    Shisha(pallaEni, 2, eni, (boyi - tepa), shisha) +
                    Shisha(tepa, 2, eni, eni, shisha) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                )



            default:
                break;
        }
    }
    return eni + boyi
}
function Kosa(eni: number, boyi: number, price: number): number {
    return 2 * M(eni + boyi) * price
}
function Orta(uzunlik: number, price: number): number {
    return M(uzunlik) * price

}
function Palla(pallaEni: number, soni: number, eni: number, Pallaboyi: number, price: number): number {
    if (pallaEni == 0) return 2 * ((M(eni - ww) / soni) + M(Pallaboyi - ww)) * (price)
    else return 2 * (M(pallaEni) + M(Pallaboyi - ww)) * (price)
}
function Shisha(palla: number, soni: number, eni: number, boyi: number, price: number): number {
    if (palla == 0) {
        return M(eni / soni) * M(boyi) * price
    }
    else {
        return M(palla) * M(boyi) * price
    }

}

function Mexanimz(pallaSoni: number, value: number): number {
    return value * pallaSoni
}
function Tor(pallaSoni: number, palla: number, boyi: number, eni: number, tepa: number, price: number): number {
    if (palla == 0) {
        return (M((eni - (2 * ww)) / pallaSoni)) * (M(boyi - (2 * ww) - tepa)) * (price)
    }
    else {
        return (M(palla)) * (M(boyi - M(tepa) - (2 * ww))) * (price)
    }
}
function Zamok(pallaSoni: number, Price: number): number {
    return pallaSoni * Price
}
function Shitapik(eni: number, boyi: number, price: number): number {
    if (eni == 0 || boyi == 0) return 0
    else {
        return ((2 * M(boyi - (3 * ww))) + (4 * M(eni - (3 * ww)))) * price
    }

}
// function EshikPastkiQism(EshikMi: boolean, EshikPalla: boolean, eni: number, boyi: number, price: number): number {
//     if (!EshikMi) return 0
//     if (EshikPalla) {
//         return ((M(eni - 2 * ww)) * M(boyi) * (price))
//     }
//     else {
//         return ((M(eni - ww)) * M(boyi) * (price))
//     }
// }
function M(value: number): number {
    return value / 100
}
const Prodi: IProfil = {
    profil: 'Alubest',
    kosa: 28000,
    orta: 40000,
    shishaushla: 12000
}


console.log(NarxHisoblash('Derazastyle3', 105, 140, 45, 0, Prodi, 80000, 0, 0, 50000));





