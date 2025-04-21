import SimpleCard from "@/components/section/Cards";
import { ModeToggle } from "@/components/ui/mode-toggle";
// import { ThemeProvider } from "@/components/ui/theme-provider";

const page = () => {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <SimpleCard />
    </div>
  );
};

export default page;
