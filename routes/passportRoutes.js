const express = require("express");
const passport = require("passport");
const router = express.Router();

// Define routes.

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/client",
    failureRedirect: "/client",
  }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function (req, res) {
    res.render("profile", { user: req.user });
  }
);

router.get("/getUser", (req, res) => {
  process.nextTick(function () {
    return res.json(req.user || null);
  });
});

router.get("/signup", function (req, res) {
  // render the page and pass in any flash data if it exists
  res.render("signup.ejs");
});

// process the signup form
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/client", // redirect to the secure profile section
    failureRedirect: "/client", // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  })
);

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile", {
    user: req.user, // get the user out of session and pass to template
  });
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect("/");
}

module.exports = router;
