import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Routes from "./Navigations/Routes"

const AppLayout = () => {
  return <SafeAreaProvider>
  <SafeAreaView
    style={{
        flex: 1,
      }}
    >
      <Routes/>
  </SafeAreaView>
</SafeAreaProvider>
}

export default AppLayout
