import { LocalProvider } from "./app/context";
import RootNavigation from "./app/navigations/RootStackNavigation";

export default function App() {
  return (
    <LocalProvider>
      <RootNavigation />
    </LocalProvider>
  );
}
