import { Link, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoogleSignUp from "../../../components/GoogleSignUp";
import InputField from "../../../components/InputField";
import LongButton from "../../../components/LongButton";
const SignUpFields = [
  {
    image: require("@/assets/icons/user.png"),
    placeholder: "Full Name (Firstanme middlename lastname)",
  },
  {
    image: require("@/assets/icons/mail.png"),
    placeholder: "Email",
  },
  {
    image: require("@/assets/icons/user.png"),
    placeholder: "Phone number",
  },
  {
    image: require("@/assets/icons/user.png"),
    placeholder: "Username",
  },
  {
    image: require("@/assets/icons/lock.png"),
    placeholder: "Password",
  },
  {
    image: require("@/assets/icons/lock.png"),
    placeholder: "Confirm Password",
  },
];
const SignUp = () => {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 pt-10  ">
      <View className="px-8">
        <View className="items-center py-5 ">
          <Image
            resizeMode="contain"
            className="w-20 h-20"
            source={require("@/assets/images/logo.png")}
          />
        </View>
        <View className="items-center justify-center gap-1">
          <Text className="font-poppins-medium text-3xl text-center text-black">
            Welcome To Craveseat
          </Text>
          <Text className=" font-light text-black mb-6 ">
            Have your cravings satisfied by others
          </Text>
        </View>
        <Text className="font-poppins-semibold text-3xl my-6">Sign Up</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          paddingHorizontal: 30,
        }}
        contentContainerClassName="items-center justify-center gap-1  pb-10"
        className=""
      >
        <View className="w-full gap-4">
          {SignUpFields.map((item, index) => (
            <InputField
              key={index}
              image={item.image}
              placeholder={item.placeholder}
            />
          ))}
        </View>
        <LongButton
          text="Continue"
          func={() => router.push("/OTPVerification")}
        />
        <View className="justify-center flex-row items-center gap-6 my-4">
          <View className="w-10 h-px bg-[#a4a4a4]" />
          <Text className="font-poppins-medium text-[#3b3b3b]">or</Text>
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
              Are you a business?
              <Link className="underline" href={"/"}>
                Get started here
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
