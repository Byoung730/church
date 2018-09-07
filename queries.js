var promise = require("bluebird");

var options = {
  promiseLib: promise
};

var pgp = require("pg-promise")(options);
var connectionString = "postgres://localhost:5432/church";
var db = pgp(connectionString);

const getAllMembers = (req, res, next) => {
  db.any("select * from members")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL members"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const getSingleMember = (req, res, next) => {
  const memberID = parseInt(req.params.member_id);
  db.one("select * from members where member_id = $1", memberID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE member"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const createMember = (req, res, next) => {
  req.body.member_id = parseInt(req.body.member_id);
  db.none(
    "insert into members(email, first_name, last_name, address, phone, staff, photos, gender, date_joined, date_baptized)" +
      "values(${email}, ${first_name}, ${last_name}, ${address}, ${phone}, ${staff}, ${photos}, ${gender}, ${date_joined}, ${date_baptized})",
    req.body
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one member"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const updateMember = (req, res, next) => {
  db.none(
    "update members set email=$1, first_name=$2, last_name=$3, address=$4, phone=$5, staff=$6, photos=$7, gender=$8, date_joined=$9, date_baptized=$10 where id=$11",
    [
      req.body.email,
      req.body.first_name,
      req.body.last_name,
      req.body.address,
      req.body.phone,
      req.body.staff,
      req.body.photos,
      req.body.gender,
      req.body.date_joined,
      req.body.date_baptized,
      parseInt(req.params.member_id)
    ]
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated member"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const removeMember = (req, res, next) => {
  const memberID = parseInt(req.params.member_id);
  db.result("delete from members where member_id = $1", memberID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} member`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
};

const getAllDebits = (req, res, next) => {
  db.any("select * from debits")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL debits"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const getSingleDebit = (req, res, next) => {
  const transactionID = parseInt(req.params.transaction_id);
  db.one("select * from debits where transaction_id = $1", transactionID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE debit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const createDebit = (req, res, next) => {
  req.body.transaction_id = parseInt(req.body.transaction_id);
  db.none(
    "insert into debits(member_id, donations, tithes, collection, miscellaneous, transaction_date)" +
      "values(${member_id}, ${donations}, ${tithes}, ${collection}, ${miscellaneous}, ${transaction_date})",
    req.body
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one debit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const updateDebit = (req, res, next) => {
  db.none(
    "update debits set member_id=$1, donations=$2, tithes=$3, collection=$4, miscellaneous=$5, transaction_date=$6 where transaction_id=$7",
    [
      req.body.member_id,
      req.body.donations,
      req.body.tithes,
      req.body.collection,
      req.body.miscellaneous,
      req.body.transaction_date,
      parseInt(req.params.member_id)
    ]
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated debit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const removeDebit = (req, res, next) => {
  const debitID = parseInt(req.params.transaction_id);
  db.result("delete from debits where transaction_id = $1", debitID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} debit`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
};

const getAllCredits = (req, res, next) => {
  db.any("select * from credits")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL credits"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const getSingleCredit = (req, res, next) => {
  const transactionOutID = parseInt(req.params.transaction_out_id);
  db.one("select * from credits where member_id = $1", transactionOutID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE credit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const createCredit = (req, res, next) => {
  req.body.transaction_out_id = parseInt(req.body.transaction_out_id);
  db.none(
    "insert into credits(member_id, salaries, utilities, upkeep, miscellaneous, transaction_out_date)" +
      "values(${member_id}, ${salaries}, ${utilities}, ${upkeep}, ${miscellaneous}, ${transaction_out_date})",
    req.body
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one credit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const updateCredit = (req, res, next) => {
  db.none(
    "update credits set member_id=$1, salaries=$2, utilities=$3, upkeep=$4, miscellaneous=$5 where transaction_out_id=$6",
    [
      req.body.member_id,
      req.body.salaries,
      req.body.utilities,
      req.body.upkeep,
      req.body.miscellaneous,
      parseInt(req.params.transaction_out_id)
    ]
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated credit"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const removeCredit = (req, res, next) => {
  const creditID = parseInt(req.params.transaction_out_id);
  db.result("delete from credits where transaction_out_id = $1", creditID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} credit`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
};

const getAllBlogs = (req, res, next) => {
  db.any("select * from blogs")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL blogs"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const getSingleBlog = (req, res, next) => {
  const blogID = parseInt(req.params.blog_id);
  db.one("select * from blogs where blog_id = $1", blogID)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE blog"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const createBlog = (req, res, next) => {
  req.body.blog_id = parseInt(req.body.blog_id);
  db.none(
    "insert into blogs(member_id, title, post, posted_date)" +
      "values(${member_id}, ${title}, ${post}, ${posted_date})",
    req.body
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Inserted one blog"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const updateBlog = (req, res, next) => {
  db.none(
    "update blogs set member_id=$1, title=$2, post=$3, posted_date=$4 where blog_id=$5",
    [
      req.body.member_id,
      req.body.title,
      req.body.post,
      req.body.posted_date,
      parseInt(req.params.blog_id)
    ]
  )
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Updated blog"
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

const removeBlog = (req, res, next) => {
  const blogID = parseInt(req.params.blog_id);
  db.result("delete from blogs where blog_id = $1", blogID)
    .then(function(result) {
      /* jshint ignore:start */
      res.status(200).json({
        status: "success",
        message: `Removed ${result.rowCount} blog`
      });
      /* jshint ignore:end */
    })
    .catch(function(err) {
      return next(err);
    });
};

module.exports = {
  getAllMembers: getAllMembers,
  getSingleMember: getSingleMember,
  createMember: createMember,
  updateMember: updateMember,
  removeMember: removeMember,
  getAllDebits: getAllDebits,
  getSingleDebit: getSingleDebit,
  createDebit: createDebit,
  updateDebit: updateDebit,
  removeDebit: removeDebit,
  getAllCredits: getAllCredits,
  getSingleCredit: getSingleCredit,
  createCredit: createCredit,
  updateCredit: updateCredit,
  removeCredit: removeCredit
};
