import './App.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
function App() {


 
const validate=(values)=>{
  const errors={};
  if(!values.rollNo)
  {
    errors.rollNo='cannot be empty *';
  }
  else if(values.rollNo.length <3)
  {
    errors.rollNo='must be more than 3 characters';
  }
  if(!values.name)
  {
    errors.name='cannot be empty *';
  }
  else if(values.name.length <3)
  {
    errors.name='must be more than 3 characters';
  }

  return errors;
}

const onSubmit= (values)=>{
  console.log("values",values)
  }

const formik=useFormik({
  initialValues:{
    rollNo:'',
    name:''
  },
  validationSchema:Yup.object().shape({
    rollNo: Yup.string()
      .min(3, 'must be more than 3 characters')
      .max(8, 'Too Long!')
      .required('cannot be empty *'),
    name: Yup.string()
      .min(3, 'must be more than 3 characters')
      .max(8, 'Too Long!')
      .required('cannot be empty *'),
  }),
  onSubmit
})



  return (
    <div className="make-flex">
    <div>
    </div>
<div>
     <form onSubmit={formik.handleSubmit} >
    <label htmlFor="rollno">Roll No</label>
    <input type="text" onChange={formik.handleChange} value={formik.values.rollNo} id="rollNo" name="rollNo" placeholder="Enter Roll No..." />
      {formik.errors.rollNo && <div className="danger">{formik.errors.rollNo}</div>}
    <label htmlFor="name">Name</label>
    <input type="text" onChange={formik.handleChange} value={formik.values.name}  id="name" name="name" placeholder="Enter Name..." />
    {formik.errors.rollNo && <div className="danger">{formik.errors.rollNo}</div>}
    <input type="submit" value="Submit" />
  </form>
  </div>
  <div></div>
    </div>
  );
}

export default App;
