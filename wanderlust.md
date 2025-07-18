Yeh do lines Express.js mein use hoti hain:

1. **`app.set('view engine', 'ejs')`**:

   - Iska matlab hai ki Express ko bol rahe ho ki hum `ejs` (Embedded JavaScript) view engine ka use karenge.
   - Toh jab bhi hum `.ejs` files ko render karenge, woh EJS engine ke through HTML response mein convert ho jayengi.

2. **`app.set('views', path.join(__dirname, 'views'))`**:
   - Yeh line yeh batati hai ki `views` folder kis jagah pe hai.
   - `path.join(__dirname, 'views')` se hum path ko resolve kar rahe hain taaki Express ko pata chale ki views folder ka exact path kaha hai.

Toh basically, yeh dono cheezein milke Express ko batati hain ki tumhare templates ka engine kya hoga aur woh templates kis folder mein hain.

3. Express-router
4. Cookies
5. State
6. Session
7. Flash Messages
8. Authentication
9. Password , hashing, salting
10. Passport
11. Login and signup
12. Login and logout
13. authorisation
14. MVC
15. Cloudinary
16. Maps
17. UI
18. Mongo atlas
19. Deployment with render

---

# phase1.A.

- Basic-Set-Up:- setup express and mongoose(for build connection mongoDB and express and create wanderlust data-base) in app.js .
- create model folder and make Schema and Model in listing.js and export <Listinig> model, and require <Listing> (model) in app.js .
- initialize-Database: create init folder and store sample data in data.js , export sample data and require in index.js: insertMany(sampleData).
- [index-route] :- create views folder and listings folder and index.ejs to show allListings (in anchor tag href="/listings<%=listing.id%>")for show route .
- [show-route] :- create show.ejs and for rupees symbol and comma seprated rupees (&#8377;<%=listing.price.toLocaleString("en-IN")%>) .
- [create-&-new-route] :- new.ejs is form after submit it throw on creat route creat route save listing and redirect on index.ejs .
- [edit-&-update-route] :- edit.ejs is form of listing after submit it throw on update route using PUT method and this route update listing with newListing .
- [delete-route] :- use delete method to delete individual listing .

# phase1.B.

-
