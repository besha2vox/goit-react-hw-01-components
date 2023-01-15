import { ButtonList, Label, Radio } from './Buttons.styled';
import { onRadioChange } from './action-radio';

export function Buttons() {
    return <ButtonList>{buttons()}</ButtonList>;
}

function buttons() {
    const template = [];
    for (let i = 1; i < 5; i++) {
        const id = `id-${i}`;
        template.push(
            <Label key={i} className={i === 1 ? 'active' : ''}>
                Task {i}
                <Radio
                    type="radio"
                    name="button"
                    id={id}
                    onChange={onRadioChange}
                />
            </Label>
        );
    }
    return template;
}
