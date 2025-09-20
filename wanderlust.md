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

# phase1.A. Routes

- Basic-Set-Up:- setup express and mongoose(for build connection mongoDB and express and create wanderlust data-base) in app.js .
- create model folder and make Schema and Model in listing.js and export <Listinig> model, and require <Listing> (model) in app.js .
- initialize-Database: create init folder and store sample data in data.js , export sample data and require in index.js: insertMany(sampleData).
- [index-route] :- create views folder and listings folder and index.ejs to show allListings (in anchor tag href="/listings<%=listing.id%>")for show route .
- [show-route] :- create show.ejs and for rupees symbol and comma seprated rupees (&#8377;<%=listing.price.toLocaleString("en-IN")%>) .
- [create-&-new-route] :- new.ejs is form after submit it throw on creat route creat route save listing and redirect on index.ejs .
- [edit-&-update-route] :- edit.ejs is form of listing after submit it throw on update route using PUT method and this route update listing with newListing .
- [delete-route] :- use delete method to delete individual listing .

# phase1.B. Styling

- [boilerplate.ejs] :- create layout folder in views, use ejs-mate, helper package of ejs template, it is help to create tamplates of codes, then we can use anywher like: header,fotter,boilerplate this all things use every-where in app. & public>css>style.css and make public folder static using app.use(); and use in template that serve all pages and routes.
- [navbar.ejs] :- make includes folder in views, use bootstrap navbar, cutomize navbar with add styling , use font-awesome for add icons.
- [footer.ejs] :- includes>footer.ejs,
- [Style-Index] :- use bootstrap , font-awesom, google-fonts and customize styling
- [Style-New-Listing] :-
- [Style-Edit-Listing] :-
- [Style-Show-Listing] :-

# Middlewares :

- [Middleware] :- Middleware ek aisa function ya software layer hota hai jo request aur response ke beech me kaam karta hai.

```js
// Middleware function
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next(); // Move to the next middleware or route handler
});
```

- middlwares can do.
- Logging
- Authentication check
- Error handling
- Data parsing (JSON, form-data)
- Response modification

- [logger]:- Logger wo hota hai jo console ya file me likhta hai ki kya ho raha hai.
  Jaise: "User login hua", "Server start hua", "Error aayi", etc.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Logger
  next();
});
```

- [handling-errors] :- production stage me error aane pr , middlware se hum errors ko handle karenge

# Errors

- [Error-handling-middlwares] :- next():- it is used to pass control to the next middleware function in the stack. [ Go to the next middleware/route handler]
  - next(err) :- it directly goes to the error handling middlware.[Skip normal flow and go to error handler]
- [Custom-error-classes] :- define cutom express error class, send res(msg) with status-codes, in express in-built error handler.
- [Default-status-&-message] :- extract msg and status to err obj., and res.status(status).send(msg)
- [wrapAsync]

```java
 function asyncWrap(fn) {
  // Ye turant ek naya function return karta hai
  return function (req, res, next) {
    // Ye function us waqt chalega jab koi request aayegi
    fn(req, res, next).catch(next);  // tab fn execute hoga
  };
}

app.get('/data', asyncWrap(async (req, res, next) => {
  const data = await getData();
  res.send(data);
}));

```

- [Mongoose-error] :-

# Phase-1 (Part-c)

- [Form-Validations] :- When we enter data in the form, the browser and the web server will check to see that the data is in the Correct-Format and Within the constraints set by the application.
  - client-Side :- data send frontend to backend in correct formate.
  - Server-Side :- db Schema constraints are followed✅ and handle errors.
  - <Use custom Form-validations using bootstrap and valid & inValid Texts>
- [Custom-Error-Handling] :- add wrapAsync middelware

# phase-2 (Db relationship/Mongo-relationship)

- [SQL_relationShip]

  - (One-to-One) :- 1:1 → Ek student – ek detail
  - (One-to-Many) :- 1:N → Ek teacher – bahut students
  - (Many-to-Many) :- M:N → Bahut students – bahut courses

- [MONGO_relationship](One-to-Many)

  - Approach-1 :- Embedding (Nested Documents) Parent document me hi child documents ka array daal dete hain.
  - Approach 2 — Referencing (Child → Parent) Child document me parent ka ObjectId store karte hain.
  - Approach 3 — Referencing (Parent → Children) Parent me sirf child ke ObjectIds ka array rakhte hain.

- ⚡ populate() in Mongoose :- Jab hum reference use karte hain, tab child objectId se detailed ko data fetch karne ke liye populate() use karte hain.

## ⚡ MongoDB Schema Design — 6 Rules of Thumb (Hindi)

1. **Use ke hisaab se design karo**

   - Sirf data store karne ke liye nahi, **kaise use hoga (queries, operations)** uske hisaab se schema banao.

2. **Related data ko embed karo**

   - Jo data **hamesha saath me access hota hai**, use **ek hi document me rakho**.

3. **Frequently update hone wale ya shared data ko reference karo**

   - Aisa data **alag collection me rakho** aur **ObjectId se link karo**.

4. **Documents chhote rakho**

   - **16MB limit** hoti hai, bade documents se performance slow hoti hai.
   - **Chhote documents fast read/write hote hain.**

5. **Frequently searched fields par index lagao**

   - Indexes se **search aur sorting fast hoti hai**.

6. **Collections ko balance me rakho**

   - Na **bahut chhoti-chhoti collections banao** aur na **ek hi badi collection** — logically group karo.

- [Handling-Deletion] :- delet both parent and child document, using Middlwares.
  - pre ;- run before the query is executed.
  - post :- run after the query is executed.
