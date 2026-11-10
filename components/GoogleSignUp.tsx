import { Image, Text, TouchableOpacity } from "react-native";

const GoogleSignUp = () => {
  return (
    <TouchableOpacity className="items-center justify-center gap-2 border border-[#a4a4a4] py-3 px-5 rounded-lg w-full flex-row ">
      <Image source={require("@/assets/icons/google.png")} />{" "}
      <Text className="font-poppins-medium">Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleSignUp;
