import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>

      <DrawerRoutes />
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
