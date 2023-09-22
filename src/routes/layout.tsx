import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";
import Footer from "../components/footer";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
