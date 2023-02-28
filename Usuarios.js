class UserInf{
    constructor(name, username, email, street, suite, city, zipcode, lat, lng, phone, website, Cname, eslogan, Cbs){
        this.id = null;
        this.nombre ="name:" + name;
        this.nombreUs ="username:" + username;
        this.correo = "email:" + email;
        this.calle = "street:"+  street;
        this.suite = "suite:"+ suite ;
        this.ciudad ="city:" +  city;
        this.codigoP = "zipcode:" + zipcode ;
        this.latitud = "lat:" + lat;
        this.longit = "lng:" + lng;
        this.tel = "phone:" + phone;
        this.Sweb = "website:" + website;
        this.comp = "name:"+ Cname;
        this.eslogan = "catchPrase:" +  eslogan;
        this.bsC = "bs:" + Cbs;
    }
    MostrarUser(){
        return `<p>${this.id} ${this.nombre} ${this.nombreUs} ${this.correo} ${this.calle} ${this.suite} ${this.ciudad} ${this.codigoP} ${this.latitud} ${this.longit} ${this.tel} ${this.Sweb} ${this.comp} ${this.eslogan} ${this.bsC}</p>`;
    }
}
class Usuarios{
    constructor(){
        this.datos = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
            }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
            }
            },
            {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
            }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
            }
            },
            {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
            }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
            }
            },
            {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
            }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
            }
            },
            {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
            }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
            }
            },
            {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
            }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
            }
            }];
    }

    AgregarUsr(NuevoUsr){
        this.datos.push(NuevoUsr);
    }

    buscarUser(Usrnme){
        for (let i=0; i < this.datos.length; i++){
            if(this.datos[i].nombreUs == Usrnme){
                return this.datos[i];
            }
        }
        return null;
    }

    listarUsers(){
        let aux=""
        for (let i = 0; i < this.datos.length; i++) {
            aux += this.datos[i].MostrarUser();
        }
        return aux;
    }
}


}