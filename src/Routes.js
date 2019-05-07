import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './componentes/FormLogin'
import FormCadastro from './componentes/FormCadastro'
import BoasVindas from './componentes/BoasVindas'
import Biblioteca from './telas/Biblioteca'
import FormAlugar from './componentes/FormAlugar'
import Alugar from './telas/Alugar'



export default props => (
    <Router >
     <Scene key="root">
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
        <Scene key='formCadastro' component={FormCadastro}  hideNavBar={false} />
        <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar={true} />
        <Scene key='biblioteca' component={Biblioteca}  hideNavBar={true} />
		<Scene key='formAlugar' component={FormAlugar}  hideNavBar={true} />
        <Scene key='alugar' component={Alugar}  hideNavBar={true} initial/>
    </Scene>
    </Router>
)