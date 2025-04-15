// Classe représentant un Post
class Post {
    constructor(title, description, auteur) {
        this.title = title;
        this.description = description;
        this.auteur = auteur; // un objet qui decrit l'Auteur du poste
        this.date = new Date().toLocaleString();
    }
    afficher(){
        console.log(`Titre: ${this.title}\nDescription: ${this.description}\nPar: ${this.auteur.username} le ${this.date}`);
    }
}

// Classe qui definit un User
class User{
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

// Classe principale du Blog
class Blog{
    constructor(){
        this.posts = [];
    }

    ajouterPost(post) {
        this.posts.push(post);
    }

    listerPosts() {
        console.log("=== Liste des posts de notre Blog ===");
        this.posts.forEach(post => post.afficher());
    }

    // Convertir la liste des posts en JSON
    sauvegarderEnJSON() {
        return JSON.stringify(this.posts);
    }

    // Charger les posts à partir d'un JSON
    chargerDepuisJSON(json, users) {
        const data = JSON.parse(json);
        this.posts = data.map(p => {
            let auteur = users.find(u => u.username === p.auteur.username);
            return new Post(p.title, p.description, auteur);
        });
    }
}




//-------------------------------------------------------------------------------------------------------------------------------
      //                                    C A S   D'  U T I L I S A T I O N
//-------------------------------------------------------------------------------------------------------------------------------

// creation des users
let user1 = new User("Ilyasse", "Elbadre@gmail.com"); 
let user2 = new User("Fadi", "Elhamdouchi@yahoo.com");

// Creation de Notre Blog Principale
let monBlog = new Blog();

// Ajout de posts
monBlog.ajouterPost(new Post("Mon premier post", "Ceci est la description comme etant mon premier blog", user1));
monBlog.ajouterPost(new Post("Deuxième post", "Dans ce Poste on va discuter une tres bonne experience....", user2));

// Affichage des posts
monBlog.listerPosts();

// Sauvegarde en JSON
let jsonData = monBlog.sauvegarderEnJSON();
console.log("\nDonnées JSON :");
console.log(jsonData);

// Simuler un chargement depuis JSON
let nouveauBlog = new Blog();
nouveauBlog.chargerDepuisJSON(jsonData, [user1, user2]);

console.log("\nPosts après chargement JSON :");
nouveauBlog.listerPosts();
