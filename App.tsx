import { LocalProvider } from "@context/index";
import RootNavigation from "@navigations/RootStackNavigation";

export default function App() {
  return (
    <LocalProvider>
      <RootNavigation />
    </LocalProvider>
  );
}
