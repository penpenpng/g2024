interface ObjectEntry {
  name: string;
  img: Promise<typeof import("*.png")>;
}

const entries: ObjectEntry[] = [
  {
    name: "つらら",
    img: import("../../assets/tsurara.png"),
  },
  {
    name: "まんた",
    img: import("../../assets/manta.png"),
  },
];

export interface DragonPartsCard {
  name: string;
  img: string;
}

export const parts: DragonPartsCard[] = [];

export const loadImageAssets = async () => {
  const tasks = entries.map(async ({ name, img }) => {
    const module = await img;
    parts.push({
      name,
      img: module.default,
    });
  });

  await Promise.all(tasks);
};

let id = 0;

export const draw = (): DragonPartsCard => ({
  ...parts[Math.floor(Math.random() * parts.length)],
});
