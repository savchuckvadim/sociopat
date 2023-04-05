import React from 'react';
import style from './Send-Post.module.css';
import { reduxForm, Field, reset, InjectedFormProps } from 'redux-form';
import InputSendPost from './Input-Send-Post';
import LoadingPage from '../../../../Elements/Loading/Loading-Page';
import { UserType } from '../../../../../types/types';
import { AppDispatchType } from '../../../../../redux/store';

type SendPostPropsType = {
    user: UserType | null;
    visitedUser: UserType | null;
    isPostSending: boolean;
    sendPost: (userId: number, profileId: number, body: string, img: string | null) => void;
}

type FieldsValuesType = {
    body: string | null;
}

export const SendPost: React.FC<SendPostPropsType> = (props) => {
    const submit = (values: FieldsValuesType, dispatch: AppDispatchType) => {
        if (props.user && props.visitedUser && values.body) {
            props.sendPost(props.user.id, props.visitedUser.id, values.body, null)
            dispatch(reset('sendPost'))
        }
    }


    return (
       props.user && props.visitedUser 
       ? <SendPostFormReduxForm onSubmit={submit} {...props} />
       : <></>
    )
}


let SendPostForm: React.FC<InjectedFormProps<FieldsValuesType, SendPostPropsType> & SendPostPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.frame}>
            {!props.isPostSending ? (
                <Field component={InputSendPost} name="body" user={props.user} />
            ) : (
                <div className={style.framePreloader}>
                    <LoadingPage isComponent={true} />
                </div>
            )}
        </form>
    );
};

const SendPostFormReduxForm = reduxForm<FieldsValuesType, SendPostPropsType>({ form: 'sendPost' })(SendPostForm)
export default SendPost