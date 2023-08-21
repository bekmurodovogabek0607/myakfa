interface IProfil {
    profil: string
    kosa: number
    orta: number
    shishaushla: number
}
const ww = 3

export default function NarxHisoblash(
    style: string | undefined,
    eni: number | undefined,
    boyi: number | undefined,
    tepa: number,
    pallaEni: number,
    profil: IProfil,
    shisha: number,
    mexanizm: number,
    tor: number,
    zamok: number,
    shishaQavat: number,
    qoshimcha: {
        foiz: number,
        price: number
    },
    arkaBaland: number,
    arkaAsos: number):
    number {
    console.log(eni);
    console.log(boyi);
    console.log(tepa);
    console.log(pallaEni);
    console.log(profil);
    console.log(shisha);
    console.log(mexanizm);
    console.log(tor);
    console.log(zamok);



    if (eni == undefined || boyi == undefined) return 10671277.2323333
    else {
        switch (style) {
            case 'Derazastyle1':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa), shisha)) +

                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle2':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle3':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((eni - ww), profil.orta) +
                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(tepa, 2, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle4':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    (shishaQavat * Shisha(tepa, 3, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle5':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +

                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(tepa, 2, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle6':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +

                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle7':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    Orta((tepa), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    (shishaQavat * Shisha(tepa, 3, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle8':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    Orta((tepa), profil.orta) +

                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +

                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(tepa, 3, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle9':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((eni - ww), profil.orta) +
                    ArkaUzunligi(eni, arkaBaland, arkaAsos, profil.kosa) +
                    Palla(pallaEni, 2, eni, (boyi), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    ArkaShtapik(eni, arkaBaland, arkaAsos, profil.shishaushla) +

                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(arkaAsos, 2, eni, eni, shisha)) +
                    (shishaQavat * Shisha(arkaBaland, 2, eni, eni, shisha)) +

                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle10':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle11':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    ArkaUzunligi(eni, arkaBaland, arkaAsos, profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi), profil.kosa) +
                    Shitapik(eni, boyi, profil.shishaushla) +
                    ArkaShtapik(eni, arkaBaland, arkaAsos, profil.shishaushla) +

                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    (shishaQavat * Shisha(arkaAsos, 2, eni, eni, shisha)) +
                    (shishaQavat * Shisha(arkaBaland, 2, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle12':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    Orta((boyi - ww - tepa), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    ArkaUzunligi(eni, arkaBaland, arkaAsos, profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi), profil.kosa) +
                    Palla(pallaEni, 3, eni, (boyi), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    ArkaShtapik(eni, arkaBaland, arkaAsos, profil.shishaushla) +

                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +

                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    (shishaQavat * Shisha(arkaAsos, 2, eni, eni, shisha)) +
                    (shishaQavat * Shisha(arkaBaland, 2, eni, eni, shisha)) + Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle13':
                return ((

                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww - tepa), profil.orta) +
                    ArkaUzunligi(eni, arkaBaland, arkaAsos, profil.kosa) +

                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 2, eni, (boyi - tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 2, eni, (boyi - tepa - ww - ww), shisha)) +
                    ArkaShtapik(eni, arkaBaland, arkaAsos, profil.shishaushla) +


                    (shishaQavat * Shisha(arkaAsos, 2, eni, eni, shisha)) +
                    (shishaQavat * Shisha(arkaBaland, 2, eni, eni, shisha)) + Zamok(1, zamok) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price
            case 'Derazastyle14':
                return ((
                    Kosa(eni, boyi, profil.kosa) +
                    Orta((boyi - ww ), profil.orta) +
                    Orta((boyi - ww ), profil.orta) +

                    Orta((eni - ww), profil.orta) +
                    Palla(pallaEni, 3, eni, (boyi - tepa), profil.kosa) +
                    Palla(pallaEni, 3, eni, ( tepa), profil.kosa) +

                    Shitapik(eni, boyi, profil.shishaushla) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa - ww - ww), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +
                    (shishaQavat * Shisha(pallaEni, 3, eni, (boyi - tepa), shisha)) +

                    (shishaQavat * Shisha(tepa, 2, eni, eni, shisha)) +
                    Zamok(1, zamok) +
                    Mexanimz(1, mexanizm) +
                    Tor(1, pallaEni, boyi, eni, tepa, tor)
                ) * (1 + (qoshimcha.foiz / 100))) + qoshimcha.price



            default:
                return (
                   0
                )

        }
    }

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
function ArkaUzunligi(eni: number, balandlig: number, akraasos: number, price: number): number {
    const alfa = 4 * (Math.atan((2 * balandlig) / eni) * 180 / Math.PI)
    return (M((alfa / 360) * 2 * Math.PI * (eni / (2 * Math.sin(alfa * Math.PI / 180)))) + M(2 * akraasos)) * price

}
function ArkaShtapik(eni: number, balandlig: number, akraasos: number, price: number): number {
    const alfa = 4 * (Math.atan((2 * balandlig) / eni) * 180 / Math.PI)
    return (M((alfa / 360) * 2 * Math.PI * (eni / (2 * Math.sin(alfa * Math.PI / 180)))) + M(2 * akraasos)) * price

}





// console.log(NarxHisoblash('Derazastyle3', 105, 140, 45, 0, Prodi, 80000, 0, 0, 50000));





