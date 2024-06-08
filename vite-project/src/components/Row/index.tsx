import axios from "../../axios";

export const Row = ({ fetchUrl }: { fetchUrl: string }) => {
  async function fetchData() {
    const requests = await axios.get(fetchUrl);
  }

  fetchData();

  return <div className="Row" />;
};