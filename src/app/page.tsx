import Image from "next/image";

import { getDocuments } from "outstatic/server";

export default async function Home() {
  const posts = await getData();
  console.log(posts);
  return (
    <main>
      <h2>Outstatic</h2>
    </main>
  );
}
async function getData() {
  const posts = getDocuments("hero", ["title"]);

  return posts;
}
