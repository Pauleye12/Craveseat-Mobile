import { Link } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CraversCard from "../../../components/Home/CraversCard";
import ExploreCard from "../../../components/Home/ExploreCard";

// const sections = [
//   { icon: require("@/assets/icons/restaurant.png"), text: "Restaurant" },
//   { icon: require("@/assets/icons/fastfood.png"), text: "Supermarket" },
//   { icon: require("@/assets/icons/drinks.png"), text: "Pharmacy" },
//   { icon: require("@/assets/icons/bakery.png"), text: "Local Market" },
// ];

const ExploreItems = [
  {
    image: require("@/assets/images/explore1.png"),
    name: "Cupid,s Tray",
    price: 22900,
    url: "/",
  },
  {
    image: require("@/assets/images/explore1.png"),
    name: "Cupid,s Tray",
    price: 22900,
    url: "/",
  },
  {
    image: require("@/assets/images/explore1.png"),
    name: "Cupid,s Tray",
    price: 22900,
    url: "/",
  },
  {
    image: require("@/assets/images/explore1.png"),
    name: "Cupid,s Tray",
    price: 22900,
    url: "/",
  },
];

const CraversList = [
  {
    pfImg: require("@/assets/images/user1.png"),
    img: require("@/assets/images/craving1.png"),
    userName: "Pauleye",
    title: "Smokey jollof with beef and plantain",
    price: 13000,
    date: "07 june",
    url: "/",
    friends: true,
  },
  {
    pfImg: require("@/assets/images/user2.png"),
    img: require("@/assets/images/craving2.png"),
    userName: "OlaYK",
    title: "Samsung S23 Ultra-512gb",
    price: 670000,
    date: "07 june",
    url: "/",
    friends: false,
  },
  {
    pfImg: require("@/assets/images/user3.png"),
    img: require("@/assets/images/craving3.png"),
    userName: "Tobiloba",
    title: "Boxing Gloves",
    price: 45000,
    date: "07 june",
    url: "/",
    friends: false,
  },
];

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-bg-light relative min-h-screen ">
      <View
        style={{ paddingTop: insets.top + 10 }}
        className="px-6 z-10 bg-primary "
      >
        <View className="lex justify-between flex-row items-center ">
          <View className=" flex flex-col items-start justify-start ">
            <Text className=" font-poppins-semibold  text-white text-2xl  ">
              Welcome, <Text className="text-[#3CB9A3]">Pauleye</Text>
            </Text>
            <View className="flex flex-row gap-1 pl-2 items-center">
              <Image source={require("@/assets/icons/location.png")} />
              <Text className="font-poppins text-white text-sm ">
                12 Lorem Ipsum Street, Consecte...
              </Text>
            </View>
          </View>
          <View>
            <Image source={require("@/assets/icons/notification.png")} />
          </View>
        </View>

        <View className=" bg-white rounded-xl w-full h-12 mt-4 flex-row gap-3 items-center px-3.5">
          <Image
            className="w-5.5 h-5.5"
            resizeMode="contain"
            source={require("@/assets/icons/search.png")}
          />
          <TextInput
            placeholder="Search "
            style={{ includeFontPadding: false }}
            className="py-0 flex-1 font-poppins "
          ></TextInput>
          <TouchableOpacity>
            <Image source={require("@/assets/icons/filter.png")} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Sections for stores */}
      {/* <View className="bg-primary w-full px-6 pt-4  ">
        <View></View>
      </View> */}

      <View className="bg-primary rounded-full w-300 h-300 absolute -top-238 z-0 right-1/2 translate-x-1/2  " />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 250 }}
        className="mt-15"
      >
        <View className="flex-row justify-between px-6 items-center">
          <Text className="font-poppins-medium">Explore</Text>
          <Link className="text-primary" href="/">
            See All
          </Link>
        </View>
        <View className="flex-1 mt-3 ">
          <FlatList
            data={ExploreItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{
              display: "flex",
              gap: 16,
              paddingHorizontal: 24,
            }}
            renderItem={({ item, index }) => (
              <ExploreCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                url={item.url}
              />
            )}
          />
        </View>

        {/* Cravers List */}
        <View className="mt-7.5 px-6  ">
          <Text className="font-poppins-medium text-black ">Cravers</Text>
          <View className="flex-1 mt-7 gap-10">
            {CraversList.map((item, index) => (
              <CraversCard
                key={index}
                img={item.img}
                userName={item.userName}
                price={item.price}
                title={item.title}
                url={item.url}
                date={item.date}
                pfImg={item.pfImg}
                friends={item.friends}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
