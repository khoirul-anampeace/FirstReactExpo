import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Home</Text>
      <Text style={styles.titledetail}>Halo beginner, selamat belajar react!</Text>
      <Image source={ require("../assets/images/react-logo.png") } style={styles.imagestyle}/>

      <Link href="/register" style={styles.button}>
        Kembali
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
  titledetail: { fontSize: 16, fontWeight: "400", textAlign:"center", marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    width: 100,
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
  imagestyle: { 
    width: 120,
    height: 120,
    marginBottom: 30
   }
});
