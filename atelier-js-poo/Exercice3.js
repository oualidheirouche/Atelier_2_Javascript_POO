class Vecteur2D{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    afficher(){
        console.log("Affichage du vecteur :");
        console.log("x = " + this.x);
        console.log("y = " + this.y);
    }
    additionner(vecteur){
      console.log('Addition est : ' + (this.x + vecteur.x) + ' et ' + (this.y + vecteur.y));
    }
}
// instantiation
vecteur_o = new Vecteur2D();
vecteur_i = new Vecteur2D(2,1);

Liste = [vecteur_o,vecteur_i];

// affichage
Liste.forEach(element =>{
    element.afficher();
});

// addition du vecteur O avec le vecteur i 
vecteur_o.additionner(vecteur_i);

class Rectangle{
    constructor(longueur = 0, largeur = 0){
        this.nom = 'Rectangle';
        this.longueur = longueur;
        this.largeur  = largeur;
    }
    afficher(){
        console.log(`Affichage du ${this.nom} : `);
        console.log("longueur = " + this.longueur);
        console.log("largeur = " + this.largeur);
    }
    surface(){
        return this.longueur * this.largeur;
    }
}



class Carre extends Rectangle{
    constructor(a=0){
        super(a,a);
        this.nom = 'Carre';
    }
    afficher(){
       console.log("Affichage Carre : ");
       console.log("a : "+this.longueur+" b : "+this.largeur);
    }
}

Rectangle1 = new Rectangle(2,3);
//Rectangle1.afficher();
console.log(' La surface est : '+Rectangle1.surface());

Carre1 = new Carre(2,2);
Carre1.afficher();

class Point{
    constructor(x = 0 , y = 0){
        this.x = x;
        this.y = y;
    }
    afficher(){
        console.log("Affichage du point :");
        console.log("x = " + this.x);
        console.log("y = " + this.y);
    }
}

p = new Point(1,2);
// p.afficher();

class Segement{
    constructor(absO,ordO,absE,ordE){
        this.origine = new Point(absO,ordO);
        this.Extrimite = new Point(absE,ordE);
    }
    afficher(){
        console.log("Affichage du segment :");
        console.log("Origine : ");
        this.origine.afficher();
        console.log("Extrimite : ");
        this.Extrimite.afficher();
    }
}

s = new Segement(1,2,3,4);
s.afficher();  