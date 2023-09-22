import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface IProps {
  text: string;
  color: "default" | "primary" | "secondary" | "black";
  href?: string;
}

export default component$((props: IProps) => {
  const classlist = [
    {
      "bg-white text-black": props.color === "default",
      "bg-primary-500 text-white": props.color === "primary",
      "bg-warning-500 text-black": props.color === "secondary",
      "bg-black text-white": props.color === "black",
    },
    "p-2 pt-3 pb-3 max-w-xs flex items-center justify-center",
  ];

  if (props.href) {
    return (
      <Link href={props.href} class={classlist}>
        {props.text}
      </Link>
    );
  }

  return <button class={classlist}>{props.text}</button>;
});
