module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "Pleas log in to view this resources");
    res.redirect("/users/login");
  }
};
