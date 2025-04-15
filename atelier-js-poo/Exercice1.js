class Voiture{
    // une methode static pour trier la liste des voitures via l'attribut "annee"
    static Trier(Liste){ 
        Liste.sort(function(a, b){
            if(a.annee < b.annee) return -1;
            if(a.annee > b.annee) return 1;
            return 0;
        });
        return Liste;
    }
    constructor(model, marque, annee, type, carburant){
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
    afficher(){
        console.log('Voiture : ' + this.model + ' ' + this.marque + ' ' + this.annee + ' ' + this.type + ' ' + this.carburant);
    }
}
class Hyundai extends Voiture{ // Hyundai herite de la class Voiture
    constructor(model, marque, annee, type, carburant,serie,hybride){
        super(model, marque, annee, type, carburant); // utilisation du constructeur parent
        this.serie = serie;
        this.hybride = hybride;
    }
    alarmer(){
        console.log('alarme !!');
    }
    afficher(){
        super.afficher(); // utilisation de la fonction Afficher de la super class
        console.log('Hyundai : ' + this.serie + ' ' + this.hybride);
    }
}
class Ford extends Voiture{
    constructor(model, marque, annee, type, carburant,options){
        super(model, marque, annee, type, carburant);
        this.options = options; // un tableau des options de la voiture 
    }
    afficher(){
        super.afficher();
        // affichage du tableau des options via forEach
        options.forEach(option => {
            console.log('Option : ' + option);
        });
    }
}

// un tableau des options
var options = ['GPS','Climatisation','Bluetooth'];

let ListeVoiture = [new Voiture('A3','Audi',2020,'Berline','Essence'),
                    new Voiture('X5','BMW',2021,'Berline','Diesel'),
                    new Hyundai('Tucson','Hyundai',2023,'Berline','Diesel',"F12P",false),
                    new Ford('Ranger','Ford',2025,'4x4','Diesel',options),
                    new Voiture('Duster','Dacia',2022,'familiale','Essence')];

Voiture.Trier(ListeVoiture);

// affichage de la liste apres le trie via annee en ordre croissant
ListeVoiture.forEach(voiture => {
    voiture.afficher();
});
