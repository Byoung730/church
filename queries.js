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

module.exports = {
  getAllMembers: getAllMembers,
  getSingleMember: getSingleMember,
  createMember: createMember,
  updateMember: updateMember,
  removeMember: removeMember,
  getAllDebits: getAllDebits,
  getAllCredits: getAllCredits
};
