exports.Index = (req, res) => {
    return res.send("PRODUCTS INDEX");
};

exports.Create = (req, res) => {
    return res.send("PRODUCTS CREATE");
};

exports.Edit = (req, res) => {
    const { id } = req.params;
    return res.send(`PRODUCTS EDIT: ${id}`);
};

exports.Del = (req, res) => {
    const { id } = req.params;
    res.send(`PRODUCTS DELETE: ${id}`);
}

