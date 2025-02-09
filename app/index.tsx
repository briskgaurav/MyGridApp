import { useNavigation, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();
  const router = useRouter();
  const handleNavigation = () => {
    router.replace("/(tabs)/MainScreen");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Hi</Text>
      </TouchableOpacity>
    </View>
  );
}
