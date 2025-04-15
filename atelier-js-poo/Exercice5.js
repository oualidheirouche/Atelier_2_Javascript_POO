//-------------------------------------------------------------------------------------------------------------------------------
      //                                           G E S T I O N  D E S  L I V R E S 
//-------------------------------------------------------------------------------------------------------------------------------
function afficher(books){
    console.log('---------------- debut ----------------');
        books.forEach(element => {
        console.log(element);
    });
    console.log('---------------- fin  ----------------');
}
    books = ['la ficelle','Antigone','Les Misérables'];
    afficher(books);
    // ajouter un livre a la fin 
    books.push('Le Petit Prince'); 
    afficher(books);
    // ajouter un livre au debut 
    books.unshift('Le Rouge et le Noir'); 
    afficher(books);
    // supprimer un livre de la fin
    books.pop();
    afficher(books);
    // supprimer un livre du debut
    books.shift();
    afficher(books);


//-------------------------------------------------------------------------------------------------------------------------------
      //                             G E S T I O N   D E S   S E T S 
//-------------------------------------------------------------------------------------------------------------------------------
    
    let Categories = new Set(['Fiction','Science','Histoire']);
    afficher(Categories);
    // Ajouter une categorie a notre set 
    Categories.add('Philosophie');
    // Ajout d'une categorie deja existante 
    Categories.add('Science');
    afficher(Categories);
    // suppression 
    Categories.delete("Histoire");
    afficher(Categories);

//-------------------------------------------------------------------------------------------------------------------------------
      //                             G E S T I O N   D E S   M A P S 
//-------------------------------------------------------------------------------------------------------------------------------


    let Borrows = new Map();
    Borrows.set("Antigone","Anas El Badre");
    Borrows.set("La Boite A merveille","Aich Fadi");
    Borrows.set("Les ficelles","Ilyasse Elhamdouchi");
    console.log("Affichage du Map : ");
    AffichageMap();
    Borrows.delete("Antigone");
    console.log("Affichage du Map apres la suppression : ");
    AffichageMap();

    if(Borrows.has("Les ficelles")){
            console.log(" Est Empreinte ");
    }else console.log("Non Empreinte !");

    
    
    
    
    
    function AffichageMap(){
        for(let [Titre,Empreinteur] of Borrows){
            console.log(Titre+" Empreinte par "+Empreinteur);
        }    
    }