//-------------------------------------------------------------------------------------------------------------------------------
      //                             1 er Approche en utilisant des objets Javascript
//-------------------------------------------------------------------------------------------------------------------------------


// creation de deux objets Javascript Ilyasse et Fadi
    const Ilyasse = {
        nom : "Elhamdouchi",
        prenom : "ilyasse",
        age : 21,
        cne : "I1298"
    };
    const Fadi = {
        nom : "aich",
        age : 22,
        cin : "MP 123 RS"
    };

    // ajout de la methode etudier pour Ilyasse et enseigner Pour Fadi 
    Ilyasse.Etudier = function(){
        console.log(this.nom+" en train d'étudier");
    };

    Fadi.Enseigner = function(){
        console.log(this.nom+"  en train d'enseigner");
    }
        // definition des fonctions pour l'affichage
        function AfficherEtudiant(etd){
            console.log("- Etudiant : "+etd.nom+" "+etd.prenom+" age : "+etd.age+" cin : "+etd.cne);
        }
        function AfficherProf(prof){
            console.log("- Professeur : "+prof.nom+" age : "+prof.age+" cin : "+prof.cin);
        }
    // affichage et test
    AfficherEtudiant(Ilyasse);
    AfficherProf(Fadi);
    Ilyasse.Etudier();
    Fadi.Enseigner();

    // Definition de la fonction de trie
    // on trie en premier temp via nom puis prenom ensuite age si necessaire
    function Trie(Liste){
        Liste.sort((e1,e2)=>{
            if(e1.nom < e2.nom) return -1;
            if(e1.nom > e2.nom) return 1;
            if(e1.prenom < e2.prenom) return -1;
            if(e1.prenom > e2.prenom) return 1;
            return e1.age - e2.age;
        }
        );
        // retourner la liste apres le trie
        return Liste;
    }

    // On suppose la liste des etudiants suivante
    let etudiants = [
        { nom: "Fatehi", prenom: "Sara", age: 22, cne: "CNE002" },
        { nom: "Ait", prenom: "Ali", age: 20, cne: "CNE001" },
        { nom: "Bennani", prenom: "Amine", age: 22, cne: "CNE003"},
        Ilyasse
    ];

    // Affichage de la liste apres le trie 
    Trie(etudiants).forEach(element => {
        AfficherEtudiant(element);
    });
    
//-------------------------------------------------------------------------------------------------------------------------------
      //                             2 er Approche en utilisant le concept de class et de l'Heritage
//-------------------------------------------------------------------------------------------------------------------------------

/*
    class Personne{
        static TrierParOrdreAlpha(Liste){
            Liste.sort((a, b) =>{
            if(a.nom.localeCompare(b.nom) == 0){
                if(a.prenom.localeCompare(b.prenom) == 0){
                    return a.age - b.age;
                }else{
                return a.prenom.localeCompare(b.prenom);
                }
            }
            else{
                return a.nom.localeCompare(b.nom);
            }
            });
        }
        constructor(nom, age){
            this.nom = nom;
            this.age = age;
        }
        afficher(){
            console.log("Nom: " + this.nom);
            console.log("Age: " + this.age);
        }
    }
    class Etudiant extends Personne{
        constructor(nom, age, prenom,cne){
            super(nom, age);
            this.prenom = prenom;
            this.cne = cne;
        }
        afficher(){
            super.afficher();
            console.log("Prenom: " + this.prenom);
            console.log("CNE: " + this.cne);
        }
        etudier(){
            console.log("Je suis en train d'étudier");
        }
    }   
    class Professeur extends Personne{
        constructor(nom, age,cin){
            super(nom, age);
            this.cin = cin;
        }
        afficher(){
            super.afficher();
            console.log("CIN: " + this.cin);
        }
        enseigner(){
            console.log("Je suis en train d'enseigner");
        }
    }  

    let liste = [
        new Etudiant("Sara", 21, "Fatima", "789012"),
        new Etudiant("Ali", 20, "Ahmed", "123456"), 
        new Etudiant("Sami", 22, "Omar", "654321"),
        ];

    Personne.TrierParOrdreAlpha(liste);

    liste.forEach((etudiant) => {
        console.log("Etudiant:");
        console.log(etudiant.nom+' '+etudiant.prenom +' '+etudiant.age);
    });
*/
