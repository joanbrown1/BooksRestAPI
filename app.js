"use strict";
var express = require("express");
var BookProcess = require('./bookControllers').BookProcess;
var app = express();
// 
var PORT = process.env.PORT || 5000;
app.use(express.json());
// 
app.get("/book", BookProcess.getBook);
// 
app.get("/books", BookProcess.getBooks);
// 
app.post("/book", BookProcess.createBook);
// 
app.patch("/book", BookProcess.editBook);
// 
app.delete("/book", BookProcess.deleteBook);
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsSUFBQSxXQUFXLEdBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLFlBQWhDLENBQWdDO0FBRWxELElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLEdBQUc7QUFDSCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUE7QUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUN2QixHQUFHO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BDLEdBQUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDdEMsR0FBRztBQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUN6QyxHQUFHO0FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3hDLEdBQUc7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7QUFHM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUM7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLENBQUUsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQyxDQUFBIn0=