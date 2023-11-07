import { Slot, component$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';

export default component$(({ src }: { src: string }) => {
  useImageProvider({
    resolutions: [400],
  });

  return (
    <div class="flex flex-1 flex-col gap-2">
      <Image
        src={src}
        layout="fullWidth"
        width={400}
        height={250}
        class="rounded-sm shadow-md"
      />

      <p class="text-center">
        <Slot />
      </p>
    </div>
  );
});
