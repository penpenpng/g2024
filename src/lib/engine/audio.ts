import { ref, watchEffect } from "vue";

declare global {
  interface AudioAssets {}
}

const AudioElement = globalThis.Audio;
type IsNever<T> = [T] extends [never] ? true : false;

type AudioAssetName = IsNever<keyof AudioAssets> extends true
  ? string
  : keyof AudioAssets;

export namespace Audio {
  interface AudioAsset {
    audio: HTMLAudioElement | null;
    config: AudioAssetConfig;
  }
  const assets: { [K in AudioAssetName]?: AudioAsset } = {};

  export interface AudioAssetConfig {
    src: Promise<typeof import("*.mp3")>;
    gain: number;
    loop?: boolean;
    skip?: number;
  }

  const loadAudioAsset = (config: AudioAssetConfig): Promise<AudioAsset> => {
    return new Promise(async (resolve) => {
      const audio = new AudioElement((await config.src).default);

      audio.onloadedmetadata = () => {
        resolve({ audio, config });
      };
      audio.onerror = () => {
        console.error(`Failed to load audio asset: ${config.src}.`);
        resolve({ audio: null, config });
      };
    });
  };

  export const load = async (
    audios: Record<AudioAssetName, AudioAssetConfig>
  ): Promise<void> => {
    const tasks = Object.entries(audios).map(async ([name, config]) => {
      assets[name as AudioAssetName] = await loadAudioAsset(config);
    });

    await Promise.all(tasks);
  };

  export const play = (name: AudioAssetName): void => {
    const asset = assets[name];
    if (!asset || !asset.audio) {
      return;
    }
    const { audio, config } = asset;

    audio.volume = config.gain * volume.value;
    audio.currentTime = config.skip || 0;
    audio.loop = !!config.loop;

    audio.play();
  };

  export const stop = (name: AudioAssetName): void => {
    const asset = assets[name];
    if (!asset || !asset.audio) {
      return;
    }
    const { audio } = asset;

    audio.pause();
  };

  export const volume = ref(1);

  watchEffect(() => {
    // Need to touch it anyway
    const v = volume.value;

    for (const { audio, config } of Object.values(assets)) {
      if (!audio) {
        continue;
      }

      audio.volume = config.gain * v;
    }
  });
}
