var express = require("express");
var router = express.Router();

const db = require("../queries");

router.get("/", function(req, res, next) {
  res.render("index", { title: "Church App" });
});
router.get("/api/members", db.getAllMembers);
router.get("/api/members/:member_id", db.getSingleMember);
router.get("/api/debits", db.getAllDebits);
router.get("/api/debits/:transaction_id", db.getSingleDebit);
router.get("/api/credits", db.getAllCredits);
router.get("/api/credits/:transaction_out_id", db.getSingleCredit);
router.post("/api/members", db.createMember);
router.post("/api/debits", db.createDebit);
router.post("/api/credits", db.createCredit);
router.put("/api/members/:member_id", db.updateMember);
router.put("/api/debits/:transaction_id", db.updateDebit);
router.put("/api/credits/:transaction_out_id", db.updateCredit);
router.delete("/api/debits/:transaction_id", db.removeDebit);
router.delete("/api/credits/:transaction_out_id", db.removeCredit);
router.delete("/api/members/:member_id", db.removeMember);

module.exports = router;
