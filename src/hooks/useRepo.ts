import { useEffect, useState } from "react";
import { getRepoStars } from "lib/github";
import { Repo } from "shared/types";

export default function useRepo(owner: string, repoName: string) {
  const [stars, setStars] = useState<number | null>(null);
  const repoKey = `${repoName}-${owner}-repo`;

  useEffect(() => {
    const stringifiedRepo = localStorage.getItem(repoKey);
    const repo: Repo | null = stringifiedRepo
      ? JSON.parse(stringifiedRepo)
      : null;
    const updatedAt = repo ? new Date(repo.updatedAt) : null;
    const now = new Date();

    if (!repo || (updatedAt && now.getTime() - updatedAt.getTime() > 3600000)) {
      getRepoStars(owner, repoName).then((stars) => {
        setStars(stars ?? null);
        localStorage.setItem(
          repoKey,
          JSON.stringify({
            name: repo,
            owner,
            stars,
            updatedAt: new Date().toISOString(),
          })
        );
      });
    } else {
      setStars(repo.stars);
    }
  }, [owner, repoName, repoKey]);

  return stars;
}
