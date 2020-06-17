import React from "react";
import { View, Text, Button } from "react-native";

import * as RootNavigation from "../../RootNavigation";

export default function Home() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Home</Text>
      <Button
        title="Root Navigation"
        onPress={() => {
          RootNavigation.navigate("Profile");
        }}
      />
    </View>
  );
}
