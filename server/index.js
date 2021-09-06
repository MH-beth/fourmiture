const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const crypto = require("crypto");
const { Console } = require("console");
const { copyFile } = require("fs");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000


const db = mysql.createConnection(
    {
        user : "root",
        hostname : "localhost",
        password : "",
        database : "safebourse"
    }
)

const passcode = "U2FsdGVkX19TXVr9iQp56sDRVp2/UV6c75vx5H+cXkVBE14+0NQv";

const crypt = (password) => {
    const cipher = crypto.createCipher('aes192', passcode);
    var encrypted = cipher.update(password , 'utf8','hex');
    encrypted+=cipher.final('hex');
    console.log(encrypted);
    return encrypted;
}

const decrypt = (password) => {
    const decipher = crypto.createDecipher('aes192', passcode);
    var decrypted = decipher.update(password , 'hex', 'utf8');
    decrypted+= decipher.final('utf8');
    console.log(decrypted);
    return decrypted;
}



app.get("/", (req , res) => {
    res.send({statue : `Running on port ${PORT}`})
});

//######################################### Authentification ###################################################

// register

app.post("/register", (req , res) => {
    const username = req.body.username;
    const password = crypt(req.body.password);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const link = req.body.link;
    const picture = req.body.picture;
    const q = "INSERT INTO users(firstname , lastname , username ,password , email ,phone , link , picture) VALUES (?,?,?,?,?,?,?,?)";
    db.query(q ,[firstname , lastname , username , password , email , phone , link , picture], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){ 
            res.send({message : "Vous Vous êtes inscris avec succès"})
        }else{
            res.send({statue : "Une Erreur s'est produite"});
        }
    })
})


// login
app.post("/login", (req , res) => {
    const username = req.body.username;
    const password = crypt(req.body.password);
    console.log(password);
    const q = "SELECT * FROM users WHERE username = ?  AND password = ?";
    db.query(q , [username , password], (err , results)=> {
        if(err){
            throw new Error(err);
        }
        if(results[0]){
            res.send({message : results[0]})
        }else{
            res.send({statue : "Email ou nom d'utilisateur ou mot de passe invalide !"});
        }
    })
})

// User Exitency

app.post("/check", (req , res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const q = "SELECT * FROM users WHERE username = ? OR email = ? OR phone = ?";
    db.query(q , [username , email, phone], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results[0]){
            res.send({statue :"Il existe deja un utilisateur avec le meme nom d'utilisateur ou avec le meme Mail ou le meme Numero De Telephone"});
        }else{
            res.send({message : "All Good"});
        }
    })
})
// check Register Ban
app.post("/checkBan", (req , res)=> {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const q = "SELECT * FROM ban WHERE username = ? OR email = ? OR phone = ?";
    db.query(q , [username , email , phone], (err, results) => {
        if(err){
            throw new Error(err);
        }
        if(results[0]){
            res.send({statue : `Cette Utilisateur A été Banni par ${results[0].adminUsername} Pour la raison suivante : ${results[0].reason}`});
        }else{
            res.send({message : "Not ban"});
        }
    })
})

// check Login Ban
app.post("/checkBans", (req , res) => {
    const username = req.body.username;
    const q = "SELECT * FROM ban WHERE username = ? OR email = ?";
    db.query(q , [username , username], (err , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({statue : `Erreur : Cette Utilisateur a été Bannie par ${results[0].adminUsername} Pour "${results[0].reason}"`});
        }else{
            res.send({message : "All Good"});
        }
    })
})
//######################################### End Authentification ###################################################

//######################################### Posts #######################################################
//Done : Add Post
app.post("/addPost",(req , res) => {
    const username = req.body.username;
    const userLink = req.body.userLink;
    const title = req.body.title;
    const texte = req.body.texte;
    const picture = req.body.picture;
    const price = req.body.price;
    const school = req.body.school;
    const classe = req.body.classe;
    const link = req.body.link;
    const q = "INSERT INTO posts(username , userLink , title , texte , pictures , price , class, school , link) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(q , [username , userLink , title , texte , picture , price , classe, school, link], (err ,results) =>{
        if(err){
            console.log(err);
        }
        if(results){
            res.send({message : "Votre Post A été ajouté avec Succés ! "});
        }else{
            res.send({statue : "Une Erreur S'est Produite"});
        }
    })
})


// DONE : see all posts
app.post("/seeAllPosts", (req , res) => {
    const q = "SELECT * FROM posts WHERE statue =?";
    db.query(q , ["Disponible"], (err , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Post N'est disponible Revenez Plus-tard"});
        }
    })
});

// DONE : post page
app.post("/post/:link", (req , res) => {
    const link = req.params.link;
    const q = "SELECT * FROM posts WHERE link = ?";
    db.query(q , [link], (err, results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results[0]});
        }else{
            res.send({statue : "Not Found"});
        }
    })
})
// DONE : search for username
app.post("/username/:link", (req , res) => {
    const link = req.params.link;
    const q = "SELECT * FROM users WHERE link = ?";
    db.query(q , [link], (err , results) => {
        if(err){
            console.log(err);
        }if(results[0]){
            res.send({message : results[0]});
        }else{
            res.send({statue : "Not Found"})
        }
    })
})


// DONE : SEARCH WITH SPECIFIC CLASSE
app.post("/search/classe", (req , res) => {
    const classe = req.body.classe;
    const q = "SELECT * FROM posts WHERE statue = ? AND class = ?";
    db.query(q , ["Disponible", classe], (err , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Post N'est Disponible !"})
        }
    })
})

//DONE : SEARCH POSTS RELATED TO SPECIFIC SCHOOLS
app.post("/search/school", (req , res) => {
    const school = req.body.school;
    const q = "SELECT * FROM posts WHERE statue = ? AND school = ?";
    db.query(q , ["Disponible", school], (err , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Post N'est disponible"});
        }
    })
})

// DONE : SEARCH WITH RELATED CLASSE AND SCHOOL
app.post("/search/school/classe", (req , res) => {
    const school = req.body.school;
    const statue = "Disponible";
    const classe = req.body.classe;
    const q = "SELECT * FROM posts WHERE statue = ? AND class = ? AND school = ?";
    db.query(q , [statue , classe , school], (err , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Post N'est Disponible avec mes critère donné"});
        }
    })
})

// DONE : SEE ALL POSTS
app.post("/userPosts", (req , res) => {
    const username = req.body.username;
    const q = "SELECT * FROM posts WHERE username = ? ORDER BY id";
    db.query( q, [username], (err  , results) => {
        if(err){
            console.log(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Post N'est Disponible"});
        }
    })
});

//DONE : Delete a post
app.post("/deletePost", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const q = "DELETE FROM posts WHERE username = ? AND link = ?";
    db.query(q , [username , link], (err ,results) => {
        if(err){
            console.log(err);
        }
        if(results){
            res.send({message : `Votre Annonce ${link} a été supprimer avec succés`});
        }else{
            res.send({statue : "Aucun Annonce N'a Pus etre supprimer"});
        }
    })
})

// UNDONE : SET AN ITEM SOLD
app.post("/sold", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const statue = "Vendu";
    const q = "UPDATE posts SET statue = ? WHERE username = ? AND link = ?";
    db.query(q , [statue , username , link], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "Article Vendu"});
        }else{
            res.send({statue : "ERR"});
        }
    })
})
// DONE: SEE A SPECIFC POST AND UPDATE IT
app.post("/updateInfo", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const q = "SELECT * FROM posts WHERE username = ? AND link = ?";
    db.query(q , [username , link], (err , results) => {
        if(err){
           console.log(err);
        }
        if(results[0]){
            res.send({message : results[0]})
        }else{
            res.send({statue : "err"});
        }
    })
})

//Updates

//UNDONE : UPDATE TITLE
app.post("/updateTitle", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const title = req.body.title;
    const q = "UPDATE posts SET title = ? WHERE username = ? AND link = ?";
    db.query(q , [title, username , link], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "Le Titre a été Mis à jour !"});
        }else{
            res.send({statue : "PROBLEME"});
        }
    })
})

//UNDONE : Update Schools
app.post("/updateSchool", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const school = req.body.school;
    const q = "UPDATE posts SET school = ? WHERE username = ? AND link = ?";
    db.query(q , [school , username , link], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "Ecole a été mis à jour avec succés"});
        }else{
            res.send({statue : "Une Erreur S'est produite"});
        }
    })
})


//UNDONE : UPDATE CLASSE
app.post("/updateClasse", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const classe = req.body.classe;
    const q = "UPDATE posts SET class = ? WHERE username = ? AND link = ?";
    db.query( q , [classe , username , classe], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "La Classe Scolaire de votre Post A été mis à jour avec succés"});
        }else{
            res.send({statue : "probleme"});
        }
    })
})

//UNDONE : Update Price
app.post("/updatePrice", (req , res)=> {
    const username = req.body.username;
    const link = req.body.link;
    const price = req.body.price;
    const q = "UPDATE posts SET price = ? WHERE username = ? AND link = ?";
    db.query(q , [price , username , link], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results || results){
            res.send({message : "Le prix a été mis à jour avec succés"});
        }else{
            res.send({statue : "un probleme"})
        }
    })
} )

//comments
//addComment
app.post("/addComment", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const comment = req.body.comment;
    const q = "INSERT INTO comments(username , link ,comment) VALUES (?,?,?)";
    db.query(q , [username , link , comment], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "Commentaire ajouté avec succés"});
        }else{
            res.send({sttaue : "Une Erreur"});
        }
    })
})

//All comments related to a User
app.post("/seeComment", (req , res) => {
    const link = req.body.link;
    const q = "SELECT * FROM comments WHERE link = ?";
    db.query(q , [link], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results[0]){
            res.send({message : results});
        }else{
            res.send({statue : "Aucun Commentaire n'est disponible pour cette publication"})
        }
    })
})
//######################################### End Posts ###################################################

//######################################### Profile Report  ###################################################
//UNDONE: report user
app.post("/reportUser", (req , res) => {
    const username = req.body.username;
    const link = req.body.link;
    const reason = req.body.reason;
    const q = "INSERT INTO reports(username , reported_id , reason) VALUES (?,?,?)";
    db.query(q , [username , link , reason], (err , results) => {
        if(err){
            throw new Error(err);
        }
        if(results){
            res.send({message : "Votre Signalement sera bientot traiter"});
        }else{
            res.send({statue : "Une Erreur s'est produite"});
        }
    })
})
//######################################### End profile Report  ###################################################


app.listen(PORT , () => console.log(`Running on Port ${PORT} `));