import homeRepo from "./repository/homeRepo";

const repositories = {
  home: homeRepo
};

export default function getRepository(name) {
  return repositories[name] || null;
}
