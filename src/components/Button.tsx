export default function Button({
  label,
  icon,
  bg,
  border,
  text,
  fullWidth,
}: {
  label: string;
  icon?: string;
  bg?: string;
  border?: string;
  text?: string;
  fullWidth?: boolean;
}) {
  return (
    <button
      className={`flex items-center rounded-full justify-center gap-3 px-7 py-3 border font-montserrat text-lg leading-none
    ${
      bg
        ? `${bg} ${text} ${border}`
        : "bg-coral-red text-white border-coral-red"
    }
    ${fullWidth && "w-full"}
    `}
    >
      {label}
      {icon && <img src={icon} alt={label} className="rounded-full w-5 h-5" />}
    </button>
  );
}
