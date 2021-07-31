import Toast from 'light-toast'
export const ShowError=(msg)=>{
    Toast.fail(msg, 3);
}

export const ShowSuccess=(msg)=>{
    Toast.success(msg, 3);

}
