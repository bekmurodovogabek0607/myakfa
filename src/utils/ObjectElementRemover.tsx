export default function ObjectElementRemover(objectt: Object, element: string[]): Object {
    let nev: string[] = Object.keys(objectt)
    console.log(nev);
    
    let newObj = {}
    for (let i = 0; i < element.length; i++) {
        nev = nev.filter(item => item != element[i])

    }
    nev.forEach(element => {
       newObj={...newObj,element}
    });
    return newObj



}

