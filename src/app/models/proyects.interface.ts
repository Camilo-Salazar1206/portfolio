export interface IFProyect {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  url: string;
  githubUrlBackend?: string;
  githubUrlFrontend?: string;
  tecnologias?: string[];
  estado: string;
}
