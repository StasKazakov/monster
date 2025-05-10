import { Switch } from "@/components/ui/switch"
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="flex w-full p-2 hover:bg-accent">
      <div className="flex h-fit w-full justify-between items-center">
        <div className="flex items-center">
          {isDark ? (
            <MdSunny className="text-2xl mr-2" />
          ) : (
            <IoMdMoon className="text-2xl mr-2 text-gray-700" />
          )}
          <span className="font-bold text-lg">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
        <Switch
          checked={isDark}
          onCheckedChange={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Settings;