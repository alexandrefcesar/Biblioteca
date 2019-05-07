import React, {Component} from 'react'
import {StyleSheet,
     Text , 
     View , 
     FlatList,
     Button,
    TouchableOpacity,
    Platform,
    AsyncStorage,
DatePickerAndroid } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Header from '../componentes/Header'
import Funcoes from '../componentes/Funcoes'
import Icon from 'react-native-vector-icons/FontAwesome'
import EstiloComum from '../EstiloComum';
import ActionButton from 'react-native-action-button'
import AdicionarLivros from '../telas/AdicionarLivros' 
import { YellowBox, TextInput } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Async Storage'])
import {connect} from 'react-redux'
import {modificaAluguel,adicionaLivro} from '../actions/AplicacaoAcoes'

const Alugar = props =>(
            <View style={styles.container}>
                  <Header/>
                  	<Text style={{color : 'black'}}>Nome de Usuário: Teste {"\n"}</Text>
					<Text style={styles.TextStyle}>Livros Alugados</Text>
					<View
						style={{
							borderBottomColor: 'black',
							borderBottomWidth: 1,
						}}
					/>
                <View style={styles.bibliotecaContainer}>
                    <FlatList data={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => 
                    <Funcoes {...item} toggleTask={this.toggleTask}
                    onDelete={this.deleteTask}/>}/>
                </View> 
                <ActionButton buttonColor={EstiloComum.colors.today}
                onPress={()=> {props.adicionar_livro_usuario}} />    
            </View>
        )

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex:3,
        color:'#313131'
    },
    tituloDaBarra:{
        flex:1,
        color:'#313131',
        justifyContent:'flex-end',
        fontSize:50,
        color:'white',
    },
    titulo:{
        fontWeight: 'bold',
        color:'white',
        fontSize:50,
        marginLeft:20,
        marginBottom:10,
    },
    subtitle:{
        fontWeight: 'bold',
        fontSize:20,
        marginLeft:20,
        marginBottom:30
    },
    bibliotecaContainer:{
        flex:7,
        color:'#fafafa'

    },
	TextStyle:{
        color:'black',
		fontSize: 20,
		textAlign:'center'
    },
    iconBar:{
        marginTop:Platform.OS == 'ios' ? 30:10,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
    }
})

const mapStateToProps = state =>(
    {
        adicionar_livro_usuario: state.AppReducer.adicionar_livro_usuario
    }
)

export default connect(mapStateToProps,{modificaAluguel,adicionaLivro})(Alugar)