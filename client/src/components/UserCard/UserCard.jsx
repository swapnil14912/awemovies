import React from 'react';
import Modal from '../Modal/Modal';
import classes from './UserCard.module.css';

export const UserCard = (props) => {

  return (
    <Modal onClose={props.onClose}>
        <div className={classes.userDetails}>
            <div className={classes.userDetails__options}>
                <p className={classes.option__success}>Logged In Successfully</p>
                <button onClick={props.onClose} className={classes.option__close}>+</button>
            </div>
            <div className={classes.userDetails__list}>
                <p className={classes.list__name}>Name - {props.user.result.name}</p>
                <p className={classes.list__email}>Email - {props.user.result.email}</p>
                <p className={classes.list__email}>Phone - {props.user.result.phone}</p>
            </div>
        </div>
    </Modal>
  )
}
