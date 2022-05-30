import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import icLogo from "../../assets/images/logo.png";
import { COLORS } from "../../theme";

export default function WelCome() {
  const { navigate } = useNavigation();

  function onHandleNavigate() {
    navigate("signin");
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={icLogo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, Organize seus gastos de qualquer lugar
        </Text>
        <Text style={styles.subTitle}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={onHandleNavigate}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: COLORS.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: COLORS.FORM,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.SUB_TITLE,
  },
  button: {
    width: "60%",
    position: "absolute",
    alignSelf: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: 50,
    paddingVertical: 8,
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.FORM,
  },
});
