import * as Yup from 'yup';

export interface StateModel {
    loaded: boolean;
    validationSchema: Yup.ObjectSchema |& null;
    formJson?: {
        group: string;
        detail: string;
        order: number;
        fields: [{
            id?: string;
            cpf?: string;
            name?: string;
            type?: string;
            default_value?: string;
            value?: string;
            detail?: string;
            place_holder?: string;
            required?: boolean;
            required_message?: string,
            regex?: string,
            validation?: string[];
            enum?: string,
            options?: string[],
            order?: number
        }]
    } | null
}