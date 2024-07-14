import *  as Select from "@/components/park/ui/select";
import { Portal } from "@ark-ui/react/portal";
import { ChevronDownIcon } from "lucide-react";
interface DaisyuiThemesSelectProps {

}

export function DaisyuiThemesSelect({}:DaisyuiThemesSelectProps){
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
  <Select.Root items={items} >
    <Select.Control>
      <Select.Trigger className="flex gap-1">
        <Select.ValueText placeholder="Select a Theme" />
        <Select.Indicator>
          <ChevronDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      <Select.ClearTrigger>Clear</Select.ClearTrigger>
    </Select.Control>
    <Portal>
      <Select.Positioner>
        <Select.Content className="w-56">
          <Select.ItemGroup>
            <Select.ItemGroupLabel>Themes</Select.ItemGroupLabel>
            {items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Portal>
    <Select.HiddenSelect />
  </Select.Root>
);
}
