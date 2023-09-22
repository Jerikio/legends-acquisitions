import { component$ } from "@builder.io/qwik";
import { globalAction$, Form } from "@builder.io/qwik-city";

export const useSubmitForm = globalAction$(async () => {
  return {
    success: true,
  };
});

export default component$(() => {
  const action = useSubmitForm();
  return (
    <Form action={action} preventdefault:submit>
      <label>
        Name
        <input type="text" name="name" />
      </label>

      <label>
        Email
        <input type="text" name="email" />
      </label>

      <label>
        Phone Number
        <input type="text" name="phoneNumber" />
      </label>

      <label>
        Company Name
        <input type="text" name="companyName" />
      </label>

      <label>
        Message
        <textarea name="message" />
      </label>

      <button type="submit">submit</button>
    </Form>
  );
});
