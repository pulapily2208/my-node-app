exports.Index = (req, res) => {
    res.send("USERS INDEX");
};

exports.Create = (req, res) => {
  res.send("USERS CREATE");
};

exports.Edit = (req, res) => {
    const { id } = req.params;
    res.send(`USERS EDIT: ${id}`);
};

exports.Del = (req, res) => {
    const { id } = req.params;
    res.send(`USERS DELETE: ${id}`);
};