import { useEffect, useState } from "react";
import { getRepoStars } from "utils/github";

export default function useRepo(owner: string, repoName: string) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (import.meta.env.PROD) {
      getRepoStars(owner, repoName).then((stars) => {
        setStars(stars ?? null);
      });
    }
  }, [owner, repoName]);

  return stars;
}
