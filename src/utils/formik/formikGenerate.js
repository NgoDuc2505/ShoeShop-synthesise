import { useFormik} from 'formik';
import * as Yup from 'yup';

const formiK = ()=>{
    const regex = {
        nameByVietnamese : /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
        password:/^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^& "]).*$/,
      }
      const formik = useFormik({
        initialValues:{
          email:'',
          name:'',
          password:'',
          psConfirm:'',
          phone:'',
          gender:'false'
        },
        validationSchema: Yup.object({
          email: Yup.string().required('this field is required !').email('Email must be valid'),
          name: Yup.string().matches(regex.nameByVietnamese,'Name must be valid').required('Name is required !'),
          phone:Yup.number().required('Phone is required'),
          password: Yup.string().min(6,'Min is 6 characters').max(12,'Max is 12 characters').required('Password can not be empty').matches(regex.password,'password must contain at least 1 digit, 1 special character, 1 alphabeltic character !'),
          psConfirm: Yup.string().required('Please confirm your password').oneOf([Yup.ref('password')],'Passwords must match!')
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      return formik;
}

export default formiK;


export const submitValid = (formik,arrKey)=>{
    if(arrKey.length === 1 && arrKey[0]=== '*'){
        arrKey = ['name','email','password','psConfirm','phone'];
    }
    
    const handleSubmit = ()=>{
        const {errors, values }= formik
        console.log(errors, values)
        let isAllValid = true;
        const arrKeys = Object.keys(values);
        const errorKeysArr = Object.keys(errors);
        const errorValuesArr = Object.values(errors)
        for(let i = 0 ; i < arrKeys.length ; i++){
          if(!values[arrKeys[i]] && (arrKey.indexOf(arrKeys[i])>=0)){
            alert('Please fill in the form and do not let any empty!');
            isAllValid = false;
            break;
          }else if(errorValuesArr[i] && (arrKey.indexOf(errorKeysArr[i])>=0)){
            alert('please not let any invalid or empty!');
            isAllValid = false
            break;
          }
        }
        if(isAllValid){
          alert('Success!')
        }
    }
    handleSubmit()
}

