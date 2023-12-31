interface ObjectEntry {
  name: string;
  img: Promise<typeof import("*.png")>;
}

const entries: ObjectEntry[] = [
  {
    name: "つらら",
    img: import("../../assets/tsurara.png"),
  },
];

export interface DoragonParts {
  name: string;
  img: string;
}

export const parts: DoragonParts[] = [];

export const loadImageAssets = async () => {
  const tasks = entries.map(({ name, img }) =>
    img.then((module) => {
      parts.push({
        name,
        img: module.default,
      });
    })
  );

  await Promise.all(tasks);
};
