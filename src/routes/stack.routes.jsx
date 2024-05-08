import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Companys from "../screens/Companys";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Companys" component={Companys} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
