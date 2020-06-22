import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className = {s.dialogs}>
            <div class ={s.dialogsItems}>
            <div className ={s.dialog + '' + s.active}>
                   Dima
               </div>
               <div className ={s.dialog}>
                   Sasha
               </div>
               <div className ={s.dialog}>
                   Pasha
               </div>
               <div className ={s.Messages}> 
               <div className ={s.Messages}>Hi </div>
               <div className ={s.Messages}> How are you?</div>
               <div className ={s.Messages}> run </div>
               
               </div>
            </div>
           
        </div>
    )
}

export default Dialogs;