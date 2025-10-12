const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const Listing = require("../model/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

// All-Listings
router.get("/", wrapAsync(listingController.index));

// NewListing Form
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Listing
router.get("/:id", wrapAsync(listingController.showListing));

// created New listing
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing)
);

// edit listing form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// listing Edit
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.updateListing)
);

// destroy listing
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
);

module.exports = router;
