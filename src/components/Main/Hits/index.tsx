import { TextField } from "@mui/material";
import dados from "../../../dadosApi/dados";

export const Hits = () => {
  const apiData = dados.dados;

  // Calcula o total de hits
  const totalHits = apiData.reduce((acc, curr) => acc + curr.hits, 0);

  // Formata o total de hits para exibição
  const formattedTotalHits = totalHits.toLocaleString();

  return (
    <section className="bg-lineBackground h-36 md:h-auto">
      <h1 className="font-bold text-vermelho-100 mb-1  flex justify-center md:text-3xl  md:font-medium md:flex ">
        HITS
      </h1>
      <div className="flex flex-col items-center p-2 md:p-20">
        <div className="flex items-center justify-center">
          <TextField
            variant="outlined"
            value={formattedTotalHits} // Define o valor do TextField como o total de hits formatado
            size="small"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            sx={{
              width: "6rem",
              "& .MuiInputBase-input": {
                fontSize: "1.5rem",
                color: "red",
              },
              "@media (min-width: 768px)": {
                width: "0.3",
                "& .MuiInputBase-input": {
                  fontSize: "2rem",
                  color: "red",
                },
              },
            }}
          />
        </div>
        <p className="font-bold text-textoApoio-100">Clicks em links.</p>
      </div>
    </section>
  );
};
