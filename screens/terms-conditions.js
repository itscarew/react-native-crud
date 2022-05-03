import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Layout } from "../components/Layout";
import { globalStyles } from "../styles/global";

const TermsCondition = () => {
  return (
    <Layout>
      <ScrollView style={{ padding: 15 }}>
        <Text style={[globalStyles.paragraphBold, { fontSize: 24 }]}>
          Terms & Condition
        </Text>
        <Text style={globalStyles.paragraph}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={[globalStyles.paragraphBold, { fontSize: 24 }]}>
          Terms & Condition
        </Text>
        <Text style={globalStyles.paragraph}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text style={[globalStyles.paragraphBold, { fontSize: 24 }]}>
          Terms & Condition
        </Text>
        <Text style={globalStyles.paragraph}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default TermsCondition;
