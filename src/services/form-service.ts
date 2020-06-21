// import Axios, { AxiosResponse } from 'axios';

class FormService {

    async getFormData() {
    return new Promise<any>((accept, reject) => {
        accept({
            "group": "Dados obrigatórios",
            "detail": "Informe os dados obrigatórios de preenchimento",
            "order": 1,
            "fields": [
                {
                    "id": "cpf",
                    "name": "CPF",
                    "type": "short_text",
                    "default_value": "",
                    "value": "1000000000",
                    "detail": "O seu CPF deve ser informado neste padrão: xxx.xxx.xxx-xx",
                    "place_holder": "Digite o seu CPF",
                    "required": true,
                    "required_message": "Preencha o CPF",
                    "regex": "/^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$/",
                    "validation": [
                        "cpf"
                    ],
                    "enum": "",
                    "options": [],
                    "order": 1
                },
                {
                    "id": "genero",
                    "name": "Gênero",
                    "type": "single_select",
                    "default_value": "",
                    "value": "1000000000",
                    "detail": "O seu Gênero deve ser informado.",
                    "place_holder": "Informe o gênero",
                    "required": true,
                    "required_message": "Preencha o CPF",
                    "regex": "",
                    "validation": [],
                    "enum": "genero",
                    "query": "",
                    "options": [],
                    "order": 2
                },
                {
                    "id": "empresa",
                    "name": "Empresa",
                    "type": "dynamic_select",
                    "default_value": "",
                    "value": "1000000000",
                    "detail": "A empresa deve ser informada.",
                    "place_holder": "Informe a empresa",
                    "required": true,
                    "required_message": "Preencha o Empresa",
                    "regex": "",
                    "validation": [],
                    "enum": "",
                    "query": "select Id as Key, Nome as Value from Empresa",
                    "options": [
                        {
                            "key": "123",
                            "label": "Empresa 123"
                        },
                        {
                            "key": "56",
                            "label": "Empresa 456"
                        },
                        {
                            "key": "789",
                            "label": "Empresa 789"
                        }
                    ],
                    "order": 3
                }
            ]
        });
    });
        // await Axios.get('.json')
        //     .then((response: AxiosResponse<any>) => {
        //         return response.data;
        //     })
        //     .catch((err) => {
        //         throw 'Ocorreu um erro';
        //     })
    }

}
export default new FormService();
