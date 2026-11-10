import { Link } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";
import GoogleSignUp from "../../../components/GoogleSignUp";
import LongButton from "../../../components/LongButton";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center flex-col px-8 py-10 ">
      <Image
        resizeMode="contain"
        className="w-12"
        source={require("@/assets/images/logo.png")}
      />

      <View className="items-center justify-center gap-1">
        <Text>Welcome To Craveseat</Text>
        <Text>Have your cravings satisfied by others</Text>
      </View>

      <View className="flex gap-2">
        <Text>Sign Up</Text>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput
            className=" inputBox "
            placeholder="Full Name (Firstanme middlename lastname)"
          />
        </View>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput className=" inputBox " placeholder="Email" />
        </View>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput className=" inputBox " placeholder="Phone Number" />
        </View>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput className=" inputBox " placeholder="Username" />
        </View>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput className=" inputBox " placeholder="Password" />
        </View>
        <View className="inputStyle  ">
          <Image source={require("@/assets/icons/user.png")} />
          <TextInput className=" inputBox " placeholder="Confirm Password" />
        </View>
        <LongButton text="Continue" func={() => ""} />
      </View>

      <View className="justify-center flex-row items-center gap-6  my-4">
        <View className="w-10 h-px bg-[#a4a4a4]" />{" "}
        <Text className="font-poppins-medium text-[#3b3b3b] ">or</Text>{" "}
        <View className="w-10 h-px bg-[#a4a4a4]" />
      </View>

      <View>
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
    </View>
  );
};

export default SignUp;
