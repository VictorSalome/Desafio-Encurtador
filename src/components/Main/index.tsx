import { Hero } from "./Hero";
import { Hits } from "./Hits";
import { TopFive } from "./TopFive";

import apiData from "../../dadosApi/dados";
import { useEffect, useState } from "react";

export interface Dados {
  id: string;
  hits: string; // Alterado para string
  url: string;
  shortUrl: string;
}

export const Main = () => {
  const [apiInfo, setApiInfo] = useState<Dados[]>([]);

  useEffect(() => {
    apiData
      .get("/")
      .then((response) => {
        const sortedData = response.data.sort(
          (a: Dados, b: Dados) => parseInt(b.hits) - parseInt(a.hits) // Convertendo para número antes de ordenar
        );

        setApiInfo(sortedData);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <main>
      <Hero />
      <TopFive apiInfo={apiInfo} />
      <Hits apiInfo={apiInfo} />
    </main>
  );
};
