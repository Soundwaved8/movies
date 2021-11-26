import firebase from '../config/Firebase';


export const GET_DATA = 'GET_DATA';
export const ADD_DATA = 'ADD_DATA';

const ref = firebase.firestore().collection("users");

export const get_data = users =>{
    return{
        type:GET_DATA,
        payload:users
    }
}

export const add_data = () =>{
    return{
        type:ADD_DATA
    }
}

export const addUser = (newUser) =>{
    ref
        .doc(newUser.id)
        .set(newUser)
        .catch((err)=>{
            console.log(err);
        })
        
} 

export const getUsers = () => dispatch =>{
        ref.onSnapshot((querySnapshot) =>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            })
            dispatch(get_data(items));
        })
}