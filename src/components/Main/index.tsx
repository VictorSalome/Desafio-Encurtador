import { Hero } from "./Hero";
import { Hits } from "./Hits";
import { TopFive } from "./TopFive";

export interface Dados {
  id: string;
  hits: string; // Alterado para string
  url: string;
  shortUrl: string;
}

export const Main = () => {
  return (
    <main>
      <Hero />
      <TopFive />
      <Hits />
    </main>
  );
};
