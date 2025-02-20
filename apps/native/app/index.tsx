import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UAccordion, UAccordionSectionProps, UButton } from "uipm";

const section: UAccordionSectionProps[] = [
  {
    icon: 'heart',
    title: 'Accordion Header One',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    icon: 'star',
    title: 'Accordion Header Two',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    icon: 'bookmark',
    title: 'Accordion Header Three',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
]
export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <UButton
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <UAccordion sections={section} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
