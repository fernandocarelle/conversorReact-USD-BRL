import React, {useState} from 'react';
import {Card, Form, Input, Button} from 'semantic-ui-react';

export default function (props) {

    const [loading, setLoading] = useState(false);
    const [valor, setValor] = useState(0);
    const [cotacao, setCotacao] = useState(0);

    const mudarValor = function (e, {value}) {
        setValor(value);
    }

    const convert = async function () {
        setLoading(true);
        const url = `https://free.currconv.com/api/v7/convert?q=${props.from}_${props.to}&compact=ultra&apiKey=4051eb609e8c4d48b23c`;

        const response = await fetch(url);
        const result = await response.json();

        setLoading(false);
        setCotacao(result[`${props.from}_${props.to}`]);
        
    }

    

    return(
        <Card>
            <Card.Content>
                <Card.Header>{props.from} para {props.to}</Card.Header>
                <Card.Meta>Cotação Atual: {cotacao.toFixed(2)}</Card.Meta>
                <Card.Description>
                    <Form>
                        <Form.Field>
                            <label>{props.from}:</label>
                            <Input type="text" placeholder="Valor" onChange={mudarValor} value={valor}></Input>
                        </Form.Field>
                        <Form.Field>
                            <label>{props.to}:</label>
                            <lable>{(valor*cotacao).toFixed(2)}</lable>
                        </Form.Field>
                    </Form>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button  inverted color='violet' fluid loading={loading} disabled={loading} onClick={convert}>Converter</Button>
            </Card.Content>
        </Card>
    );
};
