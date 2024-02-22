import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const itens = [
  { url: "http://chr.dc/xyzxyz", contagem: 7919 },
  { url: "http://chr.dc/abcabc", contagem: 6899 },
  { url: "http://chr.dc/derder", contagem: 2111 },
  { url: "http://chr.dc/fghfgh", contagem: 617 },
  { url: "http://chr.dc/yuiyui", contagem: 43 },
];

export const MainCenter = () => {
  return (
    <main>
      <h1 className="font-bold text-vermelho-100 flex justify-center ">
        TOP 5
      </h1>
      <List>
        {itens.map((item, index) => (
          <ListItem key={index} divider>
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
                {item.url}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "var(--textoApoio-100)" }}
              >
                {item.contagem.toLocaleString()}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </main>
  );
};
