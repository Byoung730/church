const express = require("express");
const router = express.Router();

const db = require("../queries");

router.get("/", function(req, res, next) {
  res.render("index", { title: "Church App" });
});
router.get("/api/people", db.getAllPeople);
router.get("/api/people/:person_id", db.getSinglePerson);
router.get("/api/debits", db.getAllDebits);
router.get("/api/debits/:transaction_id", db.getSingleDebit);
router.get("/api/credits", db.getAllCredits);
router.get("/api/credits/:transaction_out_id", db.getSingleCredit);
router.get("/api/blogs", db.getAllBlogs);
router.get("/api/blogs/:blog_id", db.getSingleBlog);
router.post("/api/people", db.createPerson);
router.post("/api/debits", db.createDebit);
router.post("/api/credits", db.createCredit);
router.post("/api/blogs", db.createBlog);
router.put("/api/people/:person_id", db.updatePerson);
router.put("/api/debits/:transaction_id", db.updateDebit);
router.put("/api/credits/:transaction_out_id", db.updateCredit);
router.put("/api/blogs/:blog_id", db.updateBlog);
router.delete("/api/debits/:transaction_id", db.removeDebit);
router.delete("/api/credits/:transaction_out_id", db.removeCredit);
router.delete("/api/people/:person_id", db.removePerson);
router.delete("/api/blogs/:blog_id", db.removeBlog);

module.exports = router;
