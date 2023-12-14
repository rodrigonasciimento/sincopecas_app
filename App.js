import React, {useState, useEffect} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  RadioGroup,
  TextInput
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import WebView from "react-native-webview";
import { RadioButton } from "react-native-paper";
import { TouchableOpacity } from 'react-native-web';

/* Tela Inicial do Nosso Projeto */
function Home({ navigation }) {
  return (
    /* Inicio da View(div) da tela inicial */
    <View
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        width: "100%",
        height: "100%",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/sincopecas.png")}
        style={{
          width: 124,
          height: 45,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          alignSelf: "center",
        }}
      />

      <View
        style={{
          width: 375,
          height: 55,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          backgroundColor: "rgba(244, 244, 244, 1)",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("./assets/perfil.png")}
          style={{
            width: 50,
            height: 40,
            flexShrink: 0,
            margin: 10,
            display: "flex",
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            width: 250,
            height: 75,
            flexShrink: 0,
            marginTop: 48,
            display: "flex",
            alignSelf: "center",
            fontSize: 18,
            color: "rgba(65, 65, 65, 1)",
          }}
        >
          Olá, Nathalia Sales!
        </Text>

        <Image
          source={require("./assets/menu.png")}
          style={{
            width: 22,
            height: 40,
            flexShrink: 0,
            margin: 10,
            display: "flex",
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          margin: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("MinhaProva")}
          style={{
            backgroundColor: "#F4F4F4",
            width: 182,
            height: 143,
            borderRadius: 43,
            padding: 10,
            paddingHorizontal: 40,
            marginBottom: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/acessar.png")}
            style={{
              width: 30,
              height: 30,
              flexShrink: 0,
              margin: 10,
              display: "flex",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
          <Text
            style={{ fontSize: 12, top: 80, width: 122, alignSelf: "center" }}
          >
            Acessar Prova
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Historico")}
          style={{
            backgroundColor: "#F4F4F4",
            width: 182,
            height: 143,
            borderRadius: 43,
            padding: 10,
            paddingHorizontal: 40,
            marginBottom: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/historico.png")}
            style={{
              width: 30,
              height: 30,
              flexShrink: 0,
              margin: 10,
              display: "flex",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text
            style={{
              fontSize: 12,
              top: 80,
              width: 200,
              alignSelf: "center",
            }}
          >
            Histórico de Provas
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Simulador")}
          style={{
            backgroundColor: "#F4F4F4",
            width: 182,
            height: 143,
            borderRadius: 43,
            padding: 10,
            paddingHorizontal: 40,
            marginBottom: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/simulador.png")}
            style={{
              width: 30,
              height: 30,
              flexShrink: 0,
              margin: 10,
              display: "flex",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
          <Text
            style={{ fontSize: 12, top: 80, width: 200, alignSelf: "center" }}
          >
            Simulador de Provas
          </Text>

          <View></View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("CadastrarFun")}
          style={{
            backgroundColor: "#F4F4F4",
            width: 182,
            height: 143,
            borderRadius: 43,
            padding: 10,
            paddingHorizontal: 40,
            marginBottom: 10,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/add.png")}
            style={{
              width: 30,
              height: 30,
              flexShrink: 0,
              margin: 10,
              display: "flex",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text
            style={{
              fontSize: 12,
              top: 80,
              width: 200,
              alignSelf: "center",
            }}
          >
            Cadastro de Funcionário
          </Text>
        </Pressable>

      </View>

      <View style={{ margin: 30, borderRadius: 15, flex: 1 }}>
        <WebView
          source={{
            html: `
                        <html>
                          <body style="margin:0;padding:0;border-radius:15px;">
                            <iframe
                              width="100%"
                              height="100%"
                              src="https://www.youtube.com/embed/IqRmGxx8Wj8?si=gE4jmmw4mB-HU82H"
                              frameborder="0"
                              allowfullscreen
                            ></iframe>
                          </body>
                        </html>
                      `,
          }}
          scalesPageToFit
          automaticallyAdjustContentInsets={false}
        />
      </View>
    </View>
  );
}
/* Tela do 'Acessar Minhas Provas' */
function MinhaProva({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        width: "100%",
        height: "100%",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/sincopecas.png")}
        style={{
          width: 124,
          height: 45,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          alignSelf: "center",
        }}
      />

      <View
        style={{
          width: 375,
          height: 55,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          backgroundColor: "rgba(244, 244, 244, 1)",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("./assets/perfil.png")}
          style={{
            width: 50,
            height: 40,
            flexShrink: 0,
            margin: 10,
            display: "flex",
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            width: 250,
            height: 75,
            flexShrink: 0,
            marginTop: 48,
            display: "flex",
            alignSelf: "center",
            fontSize: 18,
            color: "rgba(65, 65, 65, 1)",
          }}
        >
          Olá, Nathalia Sales!
        </Text>

        <Image
          source={require("./assets/menu.png")}
          style={{
            width: 22,
            height: 40,
            flexShrink: 0,
            margin: 10,
            display: "flex",
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>

      <Text
        style={{
          color: "rgb(224, 0, 0)",
          marginLeft: 35,
          marginBottom: 15,
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Informações Importantes
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#F4F4F4",
            width: 385,
            height: 770,
            borderRadius: 43,
            paddingHorizontal: 40,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              top: 34,
              flexDirection: "row",
              flexWrap: "wrap",
              width: 300,
            }}
          >
            <Text style={{ fontSize: 16, top: 34, color: "rgb(224, 0, 0)" }}>
              <Text style={{ fontWeight: "bold" }}>
                Proibição de Minimização da Tela:
              </Text>{" "}
              Os candidatos não estão autorizados a minimizar, redimensionar ou
              ocultar a tela da prova durante todo o período do exame.
            </Text>
            <Text
              style={{ fontSize: 16, marginTop: 20, color: "rgb(224, 0, 0)" }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Proibição de Pesquisas e Acessos Externos:
              </Text>{" "}
              Os candidatos não podem acessar qualquer site, aplicativo ou
              recurso externo durante o exame, incluindo motores de busca, redes
              sociais ou materiais de referência não autorizados.
            </Text>
            <Text
              style={{ fontSize: 16, marginTop: 20, color: "rgb(224, 0, 0)" }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Bloqueio de Múltiplos Dispositivos:
              </Text>{" "}
              Os candidatos devem realizar a prova em um único dispositivo, com
              a proibição de utilizar dispositivos secundários, como
              smartphones, tablets ou computadores adicionais.
            </Text>
            <Text
              style={{ fontSize: 16, marginTop: 20, color: "rgb(224, 0, 0)" }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Monitoramento por Webcam:
              </Text>{" "}
              A prova pode ser monitorada por meio de webcam para garantir a
              presença e a conduta adequada dos candidatos durante o exame.
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Questoes")}
          style={{
            backgroundColor: "rgb(0, 55, 120)",
            width: 186,
            borderRadius: 5,
            padding: 9,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "rgb(255, 255, 255)", fontSize: 16 }}>
            Iniciar Teste
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
/* Tela da Questões ao Iniciar a Prova */
function Questoes({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        width: "100%",
        height: "100%",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/sincopecas.png")}
        style={{
          width: 124,
          height: 45,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          color: "rgb(65, 65, 65)",
          marginLeft: 35,
          marginBottom: 15,
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        Questão 1
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#F4F4F4",
            width: 385,
            height: 455,
            borderRadius: 43,
            paddingHorizontal: 40,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              top: 34,
              flexDirection: "row",
              flexWrap: "wrap",
              width: 300,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                top: 34,
                color: "rgb(0, 0, 0)",
                fontWeight: "bold",
              }}
            >
              Qual é a principal função das pastilhas de freio em um carro ou
              moto?
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate("")}
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            width: 170,
            borderRadius: 5,
            padding: 9,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginTop: 30,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: 16,
              color: "rgb(0, 55, 120)",
            }}
          >
            Pular Pergunta
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Result")}
          style={{
            backgroundColor: "rgb(0, 55, 120)",
            width: 170,
            borderRadius: 5,
            padding: 9,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "rgb(255, 255, 255)", fontSize: 16 }}>
            Próxima Pergunta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
function CadastrarFun() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(nome);
  }

  return (
    <View
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        width: "100%",
        height: "100%",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/sincopecas.png")}
        style={{
          width: 124,
          height: 45,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          alignSelf: "center",
        }}
      />

      <TextInput placeholder='Nome' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setNome(text)}/>

      <TextInput placeholder='SobreNome' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setSobrenome(text)}/>

      <TextInput keyboardType='numeric' placeholder='CPF' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setCpf(text)}/>

      <TextInput placeholder='Email' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setEmail(text)}/>

      <TextInput placeholder='Endereço' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setRua(text)}/>

      <TextInput placeholder='Bairro' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setBairro(text)}/>

      <TextInput placeholder='Cidade' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setCidade(text)}/>

      <TextInput placeholder='Estado' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setEstado(text)}/>

      <TextInput secureTextEntry={true} placeholder='Senha' style={{
        width: '100%',
        height:40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10}} onChangeText={text=>setSenha(text)}/>

        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color: 'white', textAlign:'center'}}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
  );
}

function Result({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        width: "100%",
        height: "100%",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/sincopecas.png")}
        style={{
          width: 124,
          height: 45,
          flexShrink: 0,
          margin: 10,
          display: "flex",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          color: "rgba(65, 65, 65, 1)",
          marginBottom: 15,
          marginTop: 20,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Prova Finalizada com Sucesso!
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#F4F4F4",
            width: 385,
            height: 510,
            borderRadius: 43,
            paddingHorizontal: 40,
            flexDirection: "row",
          }}
        >
          <View style={{ top: 34, flexDirection: "column", flexWrap: "wrap" }}>
            <View>
              <Text
                style={{
                  color: "rgba(65, 65, 65, 1)",
                  marginBottom: 15,
                  marginTop: 20,
                  fontSize: 20,
                  textAlign: "left",
                  maxWidth: 269,
                  margin: 0,
                }}
              >
                Você respondeu todas as perguntas das provas, com isso sua nota
                foi:
              </Text>
            </View>
            <View>
              <Image
                source={require("./assets/circulo.png")}
                style={{
                  width: 200,
                  height: 200,
                  flexShrink: 0,
                  margin: 40,
                  display: "flex",
                  alignSelf: "center",
                  resizeMode: "contain",
                }}
              />
            </View>
            {/* <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "rgba(0, 55, 120, 1)",
              }}
            >
              7
            </Text> */}

            <Text
              style={{
                fontSize: 24,
                top: 34,
                color: "rgb(0, 0, 0)",
                maxWidth: 331,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Sua nota foi 7
              </Text>
              , parabéns, você acertou 7 questões de 10.
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "rgb(0, 55, 120)",
            width: 186,
            borderRadius: 5,
            padding: 9,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 30,
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "rgb(255, 255, 255)", fontSize: 16 }}>
            Voltar á Página Inicial
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
/* Tela do Histórico de Provas */
function Historico() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/construcao.jpg")}
        style={{
          width: 500,
          height: 310,
          flexShrink: 0,
          display: "flex",
          alignSelf: "center",
        }}
      />
      <Text>App em Desenvolvimento</Text>
    </View>
  );
}
/* Tela do 'Simulador de Provas' */
function Simulador() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
    >
      <Image
        source={require("./assets/construcao.jpg")}
        style={{
          width: 500,
          height: 310,
          flexShrink: 0,
          display: "flex",
          alignSelf: "center",
        }}
      />
      <Text>App em Desenvolvimento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 40,
  },
  circle: {
    borderRadius: 90,
    backgroundColor: "white",
    borderWidth: 10,
    borderColor: "#009CD6",
    width: 185,
    height: 185,
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
    color: "rgba(0, 55, 120, 1)",
    marginTop: 20,
  },
  btnCadastro:{
    width: '100%',
    height:40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center'
  }
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return <>{props.canGoBack && <HeaderBackButton {...props} />}</>;
          },
        })}
      >
        <Stack.Screen name="Tela Inicial" component={Home} />
        <Stack.Screen name="MinhaProva" component={MinhaProva} />
        <Stack.Screen name="Questoes" component={Questoes} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Simulador" component={Simulador} />
        <Stack.Screen name="CadastrarFun" component={CadastrarFun} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
