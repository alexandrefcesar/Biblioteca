import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableHighlight
} from 'react-native'
import icon from '../../assets/imgs/imagem6.png'
import icon2 from '../../assets/imgs/sair.png'
import icon3 from '../../assets/imgs/Alugar.jpg'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component{
    render(){
        return(
            <View style = {styles.container}>  
                <View style= {styles.rowContainer}>
                    <TouchableHighlight  onPress={() => Actions.biblioteca()}> 
                        <Image source={icon} style={styles.image}/>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={() => Actions.alugar()}>
                        <Icon name= 'user' size={25} style= {styles.icon} />
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={() => Actions.formLogin()}>
                        <Image source={icon2} style={styles.image}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20:0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor:'#BBB',
        width:'100%',
        backgroundColor:'#313131'
       
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    image:{
        height:30,
        width:30,
        resizeMode: 'contain'
    },
    title:{
        color:'#ffffff',
        fontWeight: 'bold',
        padding: 2,
        height: 30
    },
    icon:{
        color:'#ffffff'
    },

})

export default Header
