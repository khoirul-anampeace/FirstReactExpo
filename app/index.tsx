import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Index() {
    return <Redirect href="/register" />;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#56bde6ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  link: { marginTop: 20, textAlign: "center", color: "#28a745" },
});
