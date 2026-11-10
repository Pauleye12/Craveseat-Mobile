import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const AuthPoint = () => {
  return (
    <View className="flex-1 relative bg-bg-light  justify-center items-center gap-10 ">
      <Image
        className="w-60 h-60"
        source={require("@/assets/images/logo.png")}
      />

      <View className="flex-col gap-3 mt-6 ">
        <TouchableOpacity
          onPress={() => router.push("/(auth)/SIgnIn")}
          className="bg-primary py-2.5 px-14 justify-center items-center rounded-lg"
        >
          <Text className="text-white font-poppins-semibold text-xl ">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-bg-light border border-primary py-2 px-14 justify-center items-center rounded-lg">
          <Text className="text-primary font-poppins-semibold text-xl ">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className="justify-center items-center gap-3">
        <Text>Follow us on</Text>
        <View className="flex-row gap-5 items-center justify-center ">
          <Image className="" source={require("@/assets/icons/x.png")} />
          <Image className="" source={require("@/assets/icons/insta.png")} />
        </View>
      </View>
      <View className="absolute bottom-0 left-0 ">
        <Image className="" source={require("@/assets/images/AuthImg.png")} />
      </View>
    </View>
  );
};

export default AuthPoint;
