import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  function handleEnterButtonPress() {
    setShowWelcome(false);
  }

  function handleBackButtonPress() {
    setShowWelcome(true);
  }

  function handleAddItem() {
    if (itemName.trim()) {
      const newItem = {
        id: Math.random().toString(),
        name: itemName.trim(),
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setItemName('');
    }
  }

  function handleRemoveItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const renderWelcomeScreen = (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Bem-vindo(a) ao Carrinho de Compras</Text>
      <TouchableOpacity onPress={handleEnterButtonPress} style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderShoppingList = (
    <View>
      <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do item"
            value={itemName}
            onChangeText={setItemName}
          />
          <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveItem(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {[showWelcome ? renderWelcomeScreen : renderShoppingList]}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  enterButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  enterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }});

   export default Aba;
