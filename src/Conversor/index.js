import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import api_covid from "../services/api_covid"
import api_gov from "../services/api_gov"

//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=b6f21d6b8616c496188f

//https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi

//https://covid19-brazil-api.now.sh/api/report/v1/brazil

export default class Conversor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gov: {
                novos_conf: 0,
                total_conf: 0,
                novos_ob: 0,
                total_ob: 0,
            },
            covid: {

                total_conf: 0,
                total_ob: 0,
            }

        }

        this.buscarDados = this.buscarDados.bind(this)
    }

    async buscarDados() {

        const response_covid = await api_covid.get("brazil")
        const response_gov = await api_gov.get("PortalGeralApi")



        this.setState({
            gov: {
                novos_conf: Number(response_gov.data.confirmados.novos),
                total_conf: Number(response_gov.data.confirmados.total),
                novos_ob: Number(response_gov.data.obitos.novos),
                total_ob: Number(response_gov.data.obitos.total),
            },
            covid: {
                novos_conf: 0,
                total_conf: Number(response_covid.data.data.confirmed),
                novos_ob: 0,
                total_ob: Number(response_covid.data.data.deaths),
            }
        })

        alert("Dados atualizados!")




    }

    async componentDidMount() {
        const response_covid = await api_covid.get("brazil")
        const response_gov = await api_gov.get("PortalGeralApi")

        this.setState({
            gov: {
                novos_conf: Number(response_gov.data.confirmados.novos),
                total_conf: Number(response_gov.data.confirmados.total),
                novos_ob: Number(response_gov.data.obitos.novos),
                total_ob: Number(response_gov.data.obitos.total),
            },
            covid: {

                total_conf: Number(response_covid.data.data.confirmed),

                total_ob: Number(response_covid.data.data.deaths),
            }
        })
    }




    render() {
        let gov_img = "https://covid.saude.gov.br/assets/imgs/logo-ms.png"
        let covid_img = "data:image/png;base64,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"

        return (
            <View style={styles.container}>
                <View style={styles.governo}>

                    <Text style={styles.title}>Segundo o Governo Federal</Text>
                    <Image
                        source={{ uri: gov_img }}
                        style={styles.iconGov}
                    />
                    <View style={styles.confirmados}>
                        <Text style={styles.titleConfirmado}>Casos Confirmados</Text>
                        <Text style={styles.textData}>Novos: {this.state.gov.novos_conf === 0 ? "CENSURADO" : this.state.gov.novos_conf}</Text>
                        <Text style={styles.textData}>Total: {this.state.gov.total_conf === 0 ? "CENSURADO" : this.state.gov.total_conf}</Text>
                    </View>

                    <View style={styles.obitos}>
                        <Text style={styles.titleObito}>Óbitos</Text>
                        <Text style={styles.textData}>Novos: {this.state.gov.novos_ob === 0 ? "CENSURADO" : this.state.gov.novos_ob}</Text>
                        <Text style={styles.textData}>Total: {this.state.gov.total_ob === 0 ? "CENSURADO" : this.state.gov.total_ob}</Text>

                    </View>

                </View>
                <View style={styles.covid_view}>

                    <Text style={styles.title}>Segundo o Site Covid19-Brazil</Text>
                    <Image
                        source={{ uri: covid_img }}
                        style={styles.iconCovid}
                    />
                    <View style={styles.confirmados}>
                        <Text style={styles.titleConfirmado}>Casos Confirmados</Text>

                        <Text style={styles.textData}>Total: {this.state.covid.total_conf}</Text>
                    </View>

                    <View style={styles.obitos}>
                        <Text style={styles.titleObito}>Óbitos</Text>

                        <Text style={styles.textData}>Total: {this.state.covid.total_ob}</Text>

                    </View>

                </View>


                <TouchableOpacity style={styles.btnArea}
                    onPress={this.buscarDados}
                >
                    <Text style={styles.btnTxt}>
                        Pesquisar Dados
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center"
    },
    governo: {
        backgroundColor: "#fff",
        padding: 5,
        marginTop: 5,
        borderRadius: 5,
        width: 350,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },
    iconGov: {
        width: 250,
        height: 40,
        alignSelf: "center"
    },
    covid_view: {
        marginTop: 5,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        width: 350,
    },
    iconCovid: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    confirmados: {
        backgroundColor: "#adf334",
        padding: 5,
        margin: 5,
        borderRadius: 4
    },
    titleConfirmado: {
        fontSize: 20,
        fontWeight: "bold"
    },
    textData: {
        color: "#000",
        fontSize: 15
    },
    obitos: {
        padding: 5,
        margin: 5,
        backgroundColor: "#4FA284",
        borderRadius: 4
    },
    titleObito: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    btnArea: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    btnTxt: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",

    }




})