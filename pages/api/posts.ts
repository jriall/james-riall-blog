import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../scripts/utils";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const posts = getPosts();

  res.status(200).json(posts);
}
