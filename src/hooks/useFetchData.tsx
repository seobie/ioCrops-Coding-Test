import { useState, useEffect } from "react";
import { Data } from "../interfaces";

export default function useFetchData(url: string) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.dataset));
  }, [url]);
  return data;
}
