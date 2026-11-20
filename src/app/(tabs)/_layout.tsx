import { Tabs } from "expo-router";
import { CircleUserRound, Gift, House, Search } from "lucide-react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#EC5934",
        tabBarInactiveTintColor: "#A4A4A4",
        tabBarStyle: {
          backgroundColor: "#EAEAEA",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <House color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => <Search color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Cravings"
        options={{
          tabBarLabel: "Cravings",
          tabBarIcon: ({ color }) => <Gift color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <CircleUserRound color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
