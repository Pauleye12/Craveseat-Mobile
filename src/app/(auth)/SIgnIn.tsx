import { Link, router } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";
import GoogleSignUp from "../../../components/GoogleSignUp";
import LongButton from "../../../components/LongButton";

const SIgnIn = () => {
  return (
    <View className="flex-1 justify-center items-center bg-bg-light px-8 py-10 w-full gap-10 ">
      <Image
        className="w-45 h-45"
        source={require("@/assets/images/logo.png")}
      />
      <View className="w-full">
        <Text className="text-3xl font-poppins-semibold text-black">
          Sign In
        </Text>
        <View className="w-full flex-col gap-5 items-center mt-5 ">
          <View className="border border-primary rounded-lg pl-5 pr-3 flex items-center py-3 gap-3 w-full flex-row">
            <Image
              className="w-5.5 h-5.5 "
              resizeMode="contain"
              source={require("@/assets/icons/user.png")}
            />{" "}
            <TextInput
              className="w-full border-none focus:border-none"
              placeholder="Username or Email"
            />
          </View>
          <View className="border border-primary rounded-lg pl-5 pr-3 flex flex-row items-center gap-3 w-full py-3">
            <Image
              className="w-5.5 h-5.5 "
              resizeMode="contain"
              source={require("@/assets/icons/lock.png")}
            />{" "}
            <TextInput
              className="w-full border-none focus:border-none"
              placeholder="Password"
            />
          </View>
          <View className="w-full flex flex-row -mt-2 justify-end ">
            <Link className="text-[#3b3b3b]" href={"/"}>
              Forgot password?
            </Link>
          </View>
        </View>
        <LongButton text="Sign In" func={() => router.push("/(tabs)/Home")} />
        {/* <TouchableOpacity
          className="w-full bg-primary py-3 px-5 mt-6 rounded-lg text-center "
          onPress={() => router.push("/(tabs)/Home")}
        >
          <Text className="text-white font-poppins-medium text-xl text-center">
            Sign In
          </Text>
        </TouchableOpacity> */}

        <View className="justify-center flex-row items-center gap-6  my-4">
          <View className="w-10 h-px bg-[#a4a4a4]" />{" "}
          <Text className="font-poppins-medium text-[#3b3b3b] ">or</Text>{" "}
          <View className="w-10 h-px bg-[#a4a4a4]" />
        </View>

        <GoogleSignUp />

        <View className="flex-row items-center justify-center mt-4.5 ">
          <Text className="text-center  ">Don't have an account? </Text>
          <Link href={"/SignUp"}>
            <Text className="text-primary">Sign Up</Text>
          </Link>
        </View>

        <View className="flex mt-8 justify-center items-center gap-5 ">
          <Text className="text-center font-poppins font-light text-sm text-black ">
            By continuing, you agree to Craveseat’s Terms of Service and
            acknowledge you’ve read our Privacy Policy.
          </Text>

          <Text className="font-light text-sm italic">
            Are you a business?{" "}
            <Link className="underline" href={"/"}>
              Get started here
            </Link>{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SIgnIn;
