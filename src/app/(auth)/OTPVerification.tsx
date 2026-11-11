import { useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  type TextInputInstance,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LongButton from "../../../components/LongButton";

const OTPVerification = () => {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInputInstance>(null);
  const [code, setCode] = useState("");

  const OTP_LENGTH = 4;

  const handlePressBoxes = () => {
    inputRef.current?.focus();
  };
  return (
    <View className="flex-1 px-8 justify-center   ">
      <View className="flex gap-2 w-full ">
        <Text className="font-poppins-semibold text-2xl text-black">
          Verification
        </Text>
        <Text className="text-sm font-poppins text-black ">
          Enter the 4-digit code sent to your Email below{" "}
        </Text>
      </View>

      <View className="my-4 pt-5">
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={(text) => {
            const cleanText = text.replace(/[^0-9]/g, "").slice(0, OTP_LENGTH);
            setCode(cleanText);
          }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          maxLength={OTP_LENGTH}
          style={styles.hiddenInput}
          autoFocus={true}
        />

        <Pressable
          onPress={handlePressBoxes}
          className="flex-row justify-center gap-7 w-full"
        >
          {Array.from({ length: OTP_LENGTH }).map((_, index) => {
            const isCurrent = index === code.length;
            const isFilled = code[index] !== "";
            return (
              <View
                key={index}
                className={`w-16 h-16 bg-gray-200 border  rounded-lg flex pt-2.5 justify-center items-center ${
                  isCurrent ? " border-primary" : "border-gray-400"
                }`}
              >
                <Text className="text-4xl font-poppins-medium text-black  ">
                  {code[index] || ""}
                </Text>
              </View>
            );
          })}
        </Pressable>
      </View>
      <View className="flex-row mt-2 gap-1">
        <Text>Didn't receive the code?</Text>{" "}
        <TouchableOpacity>
          <Text className="text-primary">Resend code</Text>
        </TouchableOpacity>{" "}
      </View>
      <LongButton text="Verify" func={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});

export default OTPVerification;
