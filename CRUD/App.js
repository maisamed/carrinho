import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, flexDirection} from 'react-native';
import Aba from './Aba'

const App = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      name: inputText,
      quantity: 1,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setInputText('');
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleIncrement = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDecrement = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <Button title="+" onPress={() => handleIncrement(item.id)} />
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <Button title="-" onPress={() => handleDecrement(item.id)} />
            </View>
            <Button
              title="Excluir"
              onPress={() => handleDelete(item.id)}
              style={styles.deleteButton}
            />
          </View>
        )}
      />
      <Text style={styles.title}>Novo Item:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite o nome do item"
        />
        <Button title="Adicionar" onPress={handleAdd} style={styles.button} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#e75a7c',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 100,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#B21ED4',
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 18,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    flex: 1,
    fontSize: 18,
    color: '#0C0B0B',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    marginLeft: 20,
    padding: 25,
    borderRadius: 10,
    fontSize: 14,
    color: '#269418',
  },
});

  export default App;

