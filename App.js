import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import { navigationRef } from "./src/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
}
