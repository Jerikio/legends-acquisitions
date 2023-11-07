import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="shadow-md bg-accent-500 p-6 text-white max-w-[550px]">
      <Slot />
    </div>
  );
});
