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
  type AudioAsset = Promise<{
    audio: HTMLAudioElement | null;
    config: AudioConfig;
  }>;
  const assets: Record<AudioAssetName, AudioAsset> = {};

  export interface AudioConfig {
    url: string;
    gain: number;
    loop?: boolean;
    skip?: number;
  }

  export const preload = (
    audios: Record<AudioAssetName, AudioConfig>
  ): void => {
    for (const [name, config] of Object.entries(audios)) {
      assets[name] = new Promise((resolve) => {
        const audio = new AudioElement(config.url);

        audio.onloadedmetadata = () => {
          resolve({ audio, config });
        };
        audio.onerror = () => {
          console.error(`Failed to load audio asset: ${config.url}.`);
          resolve({ audio: null, config });
        };
      });
    }
  };

  export const play = async (name: AudioAssetName): Promise<void> => {
    const { audio, config } = await assets[name];
    if (!audio) {
      return;
    }

    audio.volume = config.gain * volume.value;
    audio.currentTime = config.skip || 0;
    audio.loop = !!config.loop;

    await audio.play();
  };

  export const stop = async (name: AudioAssetName): Promise<void> => {
    const { audio } = await assets[name];
    if (!audio) {
      return;
    }

    audio.pause();
  };

  export const volume = ref(1);

  watchEffect(async () => {
    for await (const { audio, config } of Object.values(assets)) {
      if (!audio) {
        continue;
      }

      audio.volume = config.gain * volume.value;
    }
  });
}
