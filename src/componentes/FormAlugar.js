import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight ,TouchableOpacity,
    ActivityIndicator, Platform, DatePickerAndroid,DatePickerIOS} from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import 'moment/locale/pt-br'
import EstiloComum from '../EstiloComum'

class formAlugar extends Component{
	
	state = {
        data : new Date(),
		dataf : new Date(),
		livro : []
    } 
	
	handleDateAndroidChanged = ()=>{
        DatePickerAndroid.open({
            date:this.state.datef
        }).then(e=>{
            if(e.action != DatePickerAndroid.dismissedAction){
                const momentDate = moment(this.state.datef) 
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)
                this.setState({datef:momentDate.toDate()})
            }
        })
    }
	
	confirmaAlugar(){
		const livros =[]
		livros.push({
            id: this.props.id,
            desc: this.props.desc,
            estimateAt:this.state.data,
            doneAt: this.state.dataf
        })
		//colocar livro como alugado para o usuário
	}
	
	render(){
		
		let datePicker = null
        if(Platform.OS==='ios'){
            <DatePickerIOS mode='date' date={this.state.datef}
            onDateChange={date=> this.setState({datef})}/>
        }else{
            datePicker=(
                <TouchableOpacity onPress={this.handleDateAndroidChanged}>
                    <Text style={styles.date}>
                        {moment(this.state.datef).format('ddd, D [de] MMMM [de] YYYY')}
                    </Text>
                </TouchableOpacity>
            )
        }
		
		return(
		<View style={{ flex: 1, padding: 5 ,backgroundColor: '#fafafa'}}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={ styles.TextStyle1 }>Alugando o Livro {this.props.desc} </Text>
			</View>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={ styles.TextStyle2 }>De: </Text>
				<Text style={styles.date}>
                {moment(this.state.data).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                </Text>
			</View>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={ styles.TextStyle2 }>At&eacute;: </Text>
				<View >
                {datePicker}
                </View>
			</View>
			
			<View style={{ flex: 2}}>
				<TouchableOpacity
				style={styles.SubmitButtonStyle}
				activeOpacity = { .5 }
				onPress={() => this.confirmaAlugar()}
				>
					<Text style={styles.TextStyle}>Confirmar</Text>          
				</TouchableOpacity>
			</View>
			
        
		</View>
		)
	}
	
	
}

var styles = StyleSheet.create({
	TextStyle:{
        color:'#fff',
        textAlign:'center',
    },
	TextStyle1:{
        color:'#111111',
        fontWeight: "bold",
        fontSize: 18,
        textAlign:'center',
    },
	TextStyle2:{
        color:'#111111',
        fontSize: 18,
        textAlign:'center',
    },
	SubmitButtonStyle: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#2798e0',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
		date:{
        fontFamily:EstiloComum.fontFamily,
        fontSize:20,
        marginLeft:10,
        textAlign:'center',
    }
		
	})

	export default formAlugar