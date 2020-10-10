import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Modal } from "react-native";
import { Colors } from "../components/color";
import { Block, TextView, Button, Input } from "../components";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAdress, setEnteredAdress] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const clientNumberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const clientAdressHandler = (enteredText) => {
    setEnteredAdress(enteredText);
  };

  const addGoalHandler = () => {
    //console.log("entered value:", enteredGoal);
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
    setEnteredNumber("");
    setEnteredAdress("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <Block style={styles.inputContainer}>
        <Block style={{ alignSelf: "stretch" }}>
          <TextInput
            placeholder="Digite o nome do cliente"
            placeholderTextColor="gray"
            style={styles.textinput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
        </Block>
        <Block style={{ alignSelf: "stretch" }}>
          <TextInput
            placeholder="Digite o número de telefone"
            placeholderTextColor="gray"
            style={styles.textinput}
            onChangeText={clientNumberHandler}
            value={enteredNumber}
          />
        </Block>
        <Block style={{ alignSelf: "stretch" }}>
          <TextInput
            placeholder="Digite o endereço"
            placeholderTextColor="gray"
            style={styles.textinput}
            onChangeText={clientAdressHandler}
            value={enteredAdress}
          />
        </Block>
        <Block
          justifyContent="space-between"
          style={{ marginTop: 20, alignSelf: "stretch" }}
          direction="row"
        >
          <Button onPress={enteredGoal && addGoalHandler}>
            <Block
              style={{
                padding: 20,
                backgroundColor: Colors.base_regular,
                borderRadius: 20,
                paddingHorizontal: 30,
              }}
            >
              <TextView color="#fff" h6>
                Confirmar
              </TextView>
            </Block>
          </Button>

          <Button onPress={() => props.onCancel()}>
            <Block
              style={{
                padding: 20,
                backgroundColor: Colors.base_regular,
                borderRadius: 20,
                paddingHorizontal: 30,
              }}
            >
              <TextView color="#fff" h6>
                Cancelar
              </TextView>
            </Block>
          </Button>
        </Block>
        {/* <Block style={styles.buttonContainer}>
          <Block style={styles.button}>
            <Button onPress={addGoalHandler}>
              <TextView>Confirmar</TextView>
            </Button>
          </Block>
          <Block style={styles.button}>
            <Button onPress={() => props.onCancel()}>
              <TextView>Cancelar</TextView>
            </Button>
          </Block>
        </Block> */}
      </Block>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 30,
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.base_light,
    justifyContent: "center",
    alignItems: "center",
    //borderColor: "tomato",
    //borderWidth: 1, //Borda para facilitar a compreensão do conceito flexbox
  },
  textinput: {
    borderColor: Colors.base_regular,
    borderRadius: 20,
    fontSize: 18,
    borderWidth: 2,
    padding: 20,
    marginBottom: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default GoalInput;
