import { Link, router } from "expo-router";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoogleSignUp from "../../../components/GoogleSignUp";
import LongButton from "../../../components/LongButton";

const SignUp = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1  ">
      <View className="px-8">
        <View className="items-center py-5 ">
          <Image
            resizeMode="contain"
            className="w-17 h-17"
            source={require("@/assets/images/logo.png")}
          />
        </View>
        <View className="items-center justify-center gap-0">
          <Text className="font-poppins-medium text-2xl text-center text-black">
            Welcome To Craveseat
          </Text>
          <Text className="text-xs font-light text-black mb-6 ">
            Have your cravings satisfied by others
          </Text>
        </View>
        <Text className="font-poppins-semibold text-3xl my-6">Sign Up</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingHorizontal: 40,
        }}
        contentContainerClassName="items-center justify-center gap-1  pb-10"
        className=""
      >
        <View className="flex gap-4">
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/user.png")}
            />
            <TextInput
              className=" inputBox "
              placeholder="Full Name (Firstanme middlename lastname)"
            />
          </View>
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/mail.png")}
            />
            <TextInput className=" inputBox " placeholder="Email" />
          </View>
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/user.png")}
            />
            <TextInput className=" inputBox " placeholder="Phone Number" />
          </View>
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/user.png")}
            />
            <TextInput className=" inputBox " placeholder="Username" />
          </View>
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/lock.png")}
            />
            <TextInput className=" inputBox " placeholder="Password" />
          </View>
          <View className="inputStyle  ">
            <Image
              className="w-5.5 h-5.5"
              resizeMode="contain"
              source={require("@/assets/icons/lock.png")}
            />
            <TextInput className=" inputBox " placeholder="Confirm Password" />
          </View>
        </View>
        <LongButton
          text="Continue"
          func={() => router.push("/OTPVerification")}
        />
        <View className="justify-center flex-row items-center gap-6  my-4">
          <View className="w-10 h-px bg-[#a4a4a4]" />{" "}
          <Text className="font-poppins-medium text-[#3b3b3b] ">or</Text>{" "}
          <View className="w-10 h-px bg-[#a4a4a4]" />
        </View>

        <View className="w-full">
          <GoogleSignUp />
          <View className="flex-row items-center justify-center mt-4.5 ">
            <Text className="text-center  ">Already a member? </Text>
            <Link href={"/SIgnIn"}>
              <Text className="text-primary">Sign In</Text>
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
      </ScrollView>
    </View>
  );
};

export default SignUp;
