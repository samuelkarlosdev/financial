import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_800ExtraBold
} from "@expo-google-fonts/inter"

import Home from "@/app/home"

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_800ExtraBold
  })

  if(!fontsLoader){
    return null
  }

  return (
    <Home />
  );
}


