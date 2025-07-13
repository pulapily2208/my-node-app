exports.Index = (req, res) => {
    res.send("CATEROGY INDEX");
};

exports.Create = (req, res) => {
  res.send("CATEROGY CREATE");
};

exports.Edit = (req, res) => {
    const { id } = req.params;
    res.send(`CATEGORY EDIT: ${id}`);
};

exports.Del = (req, res) => {
    const { id } = req.params;
    res.send(`CATEGORY DELETE: ${id}`);
};