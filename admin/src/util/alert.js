import Toast from 'light-toast'

export const ShowError=(msg)=>{
    Toast.fail(msg, 3000);
}

export const ShowSuccess=(msg)=>{
    Toast.success(msg, 3000);

}
