import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import dados from "../../../dadosApi/dados";

export const TopFive = () => {
  // Ordena os dados com base no valor de hits, do maior para o menor
  const sortedData = dados.dados.sort((a, b) => b.hits - a.hits);
  // Pega os primeiros 5 itens do array ordenado
  const topFiveData = sortedData.slice(0, 5);

  return (
    <section>
      <h1 className="font-bold text-vermelho-100 flex justify-center md:text-3xl md:p-3 md:font-medium ">
        TOP 5
      </h1>
      <div className="flex flex-col items-center justify-center">
        <List className="h-auto w-96">
          {topFiveData.map((item) => (
            <ListItem key={item.id} divider>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", color: "var(--vermelho-100)" }}
                >
                  {item.shortUrl}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "var(--textoApoio-100)" }}
                >
                  {item.hits}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </div>
    </section>
  );
};
