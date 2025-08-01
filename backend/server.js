import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/games", async (req, res) => {
  try {
    const response = await fetch("https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados da Steam" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
