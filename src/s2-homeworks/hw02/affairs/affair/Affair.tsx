import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (_id: number) => void; // A function that takes the affair's _id (number) and returns void
};

function Affair(props: AffairPropsType) {
    // This function calls the deleteAffairCallback prop with the affair's _id
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    };

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {props.affair.name} {/* Display the name of the affair */}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback}

            >
                {/*текст кнопки могут изменить студенты*/}
                    X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
