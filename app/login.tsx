import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../src/css/style";
import { Link } from "expo-router";


export default function login(){
    return (
        // div principal
        <View style = {styles.imagemBody}>
        {/* Imagem logo senai */}

        <Image style={styles.imagens} source={require('../../assets/sesi-senai.webp')}/>

        {/* Inicio do formulario */}
        <View style={styles.form}>

        {/* texto login*/}
        <Text style={styles.text}>LOGIN</Text>

        {/*Input do login */}
        <TextInput placeholder="Insira seu CPF" style={styles.input} />

        {/* div para alinhar os botoes */}
        <View style={styles.subBtn}>
            <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
            <TouchableOpacity><Link href={'esqueciSenha'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
        </View>
        </View>

        {/* div para alinha o botao entrada */}
        <View style={styles.formbtn}>
            <Link href={'home'} style={styles.btn}>ENTRAR</Link>
        </View>
    </View>


        
    )  
    
}
