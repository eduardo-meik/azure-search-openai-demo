import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
{
    text: "Informe de un incidente de desprendimiento de rocas en la mina, causando lesiones graves a dos mineros.",
    value: "Informe de un incidente de desprendimiento de rocas en la mina, causando lesiones graves a dos mineros."
},
{
    text: "Respuesta de emergencia a una fuga de gas tóxico en el pozo de ventilación, requiriendo evacuación inmediata del personal.",
    value: "Respuesta de emergencia a una fuga de gas tóxico en el pozo de ventilación, requiriendo evacuación inmediata del personal."
},
{
    text: "Informe de incidente por colapso de una estructura de soporte en una galería subterránea, resultando en un trabajador atrapado y gravemente herido.",
    value: "Informe de incidente por colapso de una estructura de soporte en una galería subterránea, resultando en un trabajador atrapado y gravemente herido."
}

];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
