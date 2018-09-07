var express = require("express");
var router = express.Router();

const db = require("../queries");

router.get("/", function(req, res, next) {
  res.render("index", { title: "Church App" });
});
router.get("/api/members", db.getAllMembers);
router.get("/api/members/:id", db.getSingleMember);
router.post("/api/members", db.createMember);
router.put("/api/members/:id", db.updateMember);
router.delete("/api/members/:id", db.removeMember);

module.exports = router;
