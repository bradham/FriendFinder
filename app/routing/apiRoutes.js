// Displays tables api
app.get("/api/tables", function(req, res) {
    return res.json(tablesArr);
  });
