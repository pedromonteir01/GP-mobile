import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Register from "../screens/Register";
import { user } from "../data/Profile";
import Companys from "../screens/Companys";
import Details from "../screens/Details";
import login from "../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Home",
          drawerIcon: ({ focused }) => (
            <Entypo
              name="tree"
              size={24}
              color="black" />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          headerTitle: "Sobre Nós",
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
              size={25}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "GP",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Companys"
        component={Companys}
        options={{
          headerTitle: "Parcerias",
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="enviroment"
              size={24}
              color="black" />
          ),
          drawerLabel: "Parcerias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        initialParams={{ company: null, edit: false }}
        options={{
          headerTitle: "Registre-se",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Registre-se",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

<Drawer.Screen
        name="login"
        component={login}
        initialParams={{ company: null, edit: false }}
        options={{
          headerTitle: "Faça seu login",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Login",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Details"
        component={Details}
        initialParams={{ company: null, edit: false }}
        options={{
          drawerItemStyle: { display: 'none' },
          headerTitle: "Details",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "DETALHES",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
