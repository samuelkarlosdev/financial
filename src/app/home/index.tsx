import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { styles } from './styles';

import { Header } from '@/components/header';  
import { Balance } from '@/components/balance';
import { Movements } from '@/components/movements';
import { Actions } from '@/components/actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,30',
    date: '17/08/2024',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2500,50',
    date: '15/09/2024',
    type: 1 // receitas / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '15.500,00',
    date: '15/09/2024',
    type: 1 // receitas / entradas
  }
]


export default function Home() {
  return (
    <View style={styles.container}>

        <StatusBar style="light" />

        <Header name='Maria da Silva'/>
        
        <Balance balance={"15.395,50"} expenses={"-350,52"}/>

        <Actions />

        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => 
            <Movements data={item}></Movements>
          }

        />
        
    </View>
  );
}
