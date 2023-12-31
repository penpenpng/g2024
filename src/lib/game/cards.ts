interface ObjectEntry {
  name: string;
  img: Promise<typeof import("*.png")>;
}

const entries: ObjectEntry[] = [
  // た
  {
    name: "まんた",
    img: import("../../assets/manta.png"),
  },
  {
    name: "おやかた",
    img: import("../../assets/sushi_school.png"),
  },
  {
    name: "わた",
    img: import("../../assets/medical_menkyuu.png"),
  },
  {
    name: "つた",
    img: import("../../assets/mori_jungle.png"),
  },
  {
    name: "ゆかした",
    img: import("../../assets/room_yukashita_syuunou_close.png"),
  },
  {
    name: "ひがた",
    img: import("../../assets/shiohigari_boy.png"),
  },
  {
    name: "はらいた",
    img: import("../../assets/virus_fukutsuu_woman.png"),
  },
  {
    name: "うしろすがた",
    img: import("../../assets/musician_conductor.png"),
  },
  {
    name: "たなばた",
    img: import("../../assets/tanabata_panda.png"),
  },
  {
    name: "さすまた",
    img: import("../../assets/buki_sasumata.png"),
  },
  {
    name: "ふた",
    img: import("../../assets/syokki_kamameshi_futa.png"),
  },
  {
    name: "ねこじた",
    img: import("../../assets/nekojita_yakedo_man.png"),
  },
  {
    name: "いた",
    img: import("../../assets/sentaku_ita.png"),
  },
  {
    name: "こもりうた",
    img: import("../../assets/baby_komoriuta.png"),
  },
  {
    name: "はごいた",
    img: import("../../assets/kawari_hagoita.png"),
  },
  {
    name: "はなうた",
    img: import("../../assets/hanauta_man.png"),
  },
  {
    name: "やかた",
    img: import("../../assets/buiding_iwate_ginkou.png"),
  },
  {
    name: "ゆかた",
    img: import("../../assets/hanabi_woman.png"),
  },
  {
    name: "てがた",
    img: import("../../assets/hand_tegata.png"),
  },
  {
    name: "かるた",
    img: import("../../assets/karuta_inubou.png"),
  },
  {
    name: "はた",
    img: import("../../assets/car_animals_flag.png"),
  },
  // つ
  {
    name: "つらら",
    img: import("../../assets/tsurara.png"),
  },
  {
    name: "つつみがみ",
    img: import("../../assets/sweets_ramune.png"),
  },
  {
    name: "つつ",
    img: import("../../assets/potatochips_tsutsu_red.png"),
  },
  {
    name: "つなわたり",
    img: import("../../assets/daidougei_tsunawatari.png"),
  },
  {
    name: "つまみぐい",
    img: import("../../assets/kodomo_tsumamigui.png"),
  },
  {
    name: "つぼ",
    img: import("../../assets/fish_takotsubo.png"),
  },
  {
    name: "つまみ",
    img: import("../../assets/food_ika_ichiyaboshi.png"),
  },
  {
    name: "つむじ",
    img: import("../../assets/tsumuji.png"),
  },
  {
    name: "つくだに",
    img: import("../../assets/food_tsukudani.png"),
  },
  {
    name: "つんでれ",
    img: import("../../assets/tsundere_girl.png"),
  },
  {
    name: "つまさき",
    img: import("../../assets/body_foot_side.png"),
  },
  {
    name: "つのぶえ",
    img: import("../../assets/music_tsunobue_himo.png"),
  },
  {
    name: "つちのこ",
    img: import("../../assets/animal_tsuchinoko.png"),
  },
  {
    name: "つけもの",
    img: import("../../assets/food_tsukemono_kyuuri.png"),
  },
  {
    name: "つうがく",
    img: import("../../assets/bike_scooter_school.png"),
  },
  {
    name: "ついたて",
    img: import("../../assets/rakugo_nukesuzume.png"),
  },
  {
    name: "つりわ",
    img: import("../../assets/taisou_tsuriwa.png"),
  },
  {
    name: "つぼみ",
    img: import("../../assets/flower_ume_kaika.png"),
  },
  {
    name: "つばめ",
    img: import("../../assets/tsubame_hina.png"),
  },
  {
    name: "つる",
    img: import("../../assets/tsurunoongaeshi.png"),
  },
  {
    name: "つき",
    img: import("../../assets/moon_michikake06.png"),
  },
  // たつ

  {
    name: "はいたつ",
    img: import("../../assets/yuubin_takuhaiin_door.png"),
  },
  {
    name: "こたつ",
    img: import("../../assets/cat_kotatsu_neko.png"),
  },
  {
    name: "きゃたつ",
    img: import("../../assets/kyatatsu_hakobu.png"),
  },
  {
    name: "たつのおとしご",
    img: import("../../assets/fish_tatsunootoshigo.png"),
  },
  // ダミー
  {
    name: "へびつかい",
    img: import("../../assets/seiza13_hebitsukai.png"),
  },
  {
    name: "すいえい",
    img: import("../../assets/swimming_hiraoyogi.png"),
  },
  {
    name: "かんき",
    img: import("../../assets/kanki_window_man.png"),
  },
  {
    name: "むぎちょこ",
    img: import("../../assets/sweets_mugi_chocolate.png"),
  },
  {
    name: "たわー",
    img: import("../../assets/landmark_yokohama_marine_tower.png"),
  },
  {
    name: "にわ",
    img: import("../../assets/zassou_niwa.png"),
  },
  {
    name: "のみかい",
    img: import("../../assets/party_tachinomi_couple.png"),
  },
  {
    name: "せいかい",
    img: import("../../assets/animal_quiz_neko_maru.png"),
  },
  {
    name: "まんぼう",
    img: import("../../assets/fish_manbou_mola_yoko.png"),
  },
  {
    name: "ありたやき",
    img: import("../../assets/imariyaki.png"),
  },
  {
    name: "わたげ",
    img: import("../../assets/flower_tanpopo_watage_solo.png"),
  },
  {
    name: "いぬ",
    img: import("../../assets/dog_hachi_sasareta.png"),
  },
  {
    name: "でぃぷろとどん",
    img: import("../../assets/animal_diprotodon.png"),
  },
  {
    name: "ほうおう",
    img: import("../../assets/landmark_byodoin_hououzou.png"),
  },
  {
    name: "えほうまき",
    img: import("../../assets/setsubun_ehoumaki_boy.png"),
  },
  {
    name: "すっぽん",
    img: import("../../assets/nabe_suppon.png"),
  },
  {
    name: "ぱすてう",
    img: import("../../assets/food_pastel_pasuteu.png"),
  },
  {
    name: "ゆっけじゃん",
    img: import("../../assets/food_yukkejan.png"),
  },
  {
    name: "とろび",
    img: import("../../assets/cooking_torobi.png"),
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

export const draw = (): DragonPartsCard => ({
  ...parts[Math.floor(Math.random() * parts.length)],
});
