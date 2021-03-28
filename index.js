import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "Node-Task Ok" });
});

app.get("/tasks", (req, res) => {
  res.json({
    tasks: [{ title: "Fazer compras" }, { title: "Arrumar o PC" }],
  });
});

app.listen(PORT, () => console.log(`Node-Task porta ${PORT}`));
