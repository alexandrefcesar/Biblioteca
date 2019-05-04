import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#313131' }}>Cadastro Concluído</Text>
            </View>
            <View style={{ flex: 1 }}>
               
                <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={() => Actions.formLogin()}
          >
               <Text style={styles.TextStyle}>Fazer Login</Text>          
         </TouchableOpacity>
            </View>
        </View>
)
