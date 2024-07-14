interface DaisyuiThemesSelectProps {}

export function DaisyuiThemesSelect({}: DaisyuiThemesSelectProps) {
  const items = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  return (
    <select data-choose-theme className="select select-primary">
      <option value="">Default</option>
      {items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}
