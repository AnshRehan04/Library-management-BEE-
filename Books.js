const express=require("express");
const app=express();
const bookschema=require("./controllers/bookControllers")
const authorschema=require("./controllers/AuthorsControllers")
const publicationschema=require("./controllers/PublicationsControllers")
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://anshrehan7:anshrehan123%40@cluster0.nbqrvn4.mongodb.net/Books").then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("Error ",err);
})
app.use(express.json());

// add books
app.post("/books",bookschema.addbook);
// get books
app.get("/get-books",bookschema.getbooks)
// Update books
app.post("update-books",bookschema.updateBook);
// Delete book
app.post("/delete-book",bookschema.deleteBooks);

// Add Author
app.post("/author",authorschema.addAuthor);
//get Author
app.get("/all-author",authorschema.getAuthors)
// Update Author
app.post("/update-author",authorschema.updateAuthor);
// Delete Author
app.post("/delete-author",authorschema.deleteAuthor);

// Add Publications
app.post("/publications",publicationschema.addPublication);
// Get Publications
app.get("/all-publications",publicationschema.getPublications)
// update publication
app.post("/update-publication",publicationschema.updatePublication);
// Delete Publications
app.post("/delete-publication",publicationschema.deletePublication)
app.listen(3000,()=>{
    console.log("Server Started")
})