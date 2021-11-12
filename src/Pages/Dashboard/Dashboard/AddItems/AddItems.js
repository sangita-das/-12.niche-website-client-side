import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

});
const formStyle = {
  marginTop: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}
const formInput = {
  width: "40%",
  marginBottom: "10px"
}


const AddItems = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://peaceful-beach-69061.herokuapp.com/items', data)
      .then(res => {
        // console.log(res);
        if (res.data.insertedId) {
          alert('product item added successfully');
          reset();
        }
      })
  }
  return (
    <div className={classes.root}>
      <h2>Please Add a item</h2>
      <form style={{ ...formStyle }} onSubmit={handleSubmit(onSubmit)}>
        <input style={formInput}  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
        <textarea style={formInput} {...register("speciality")} placeholder="description" />
        <input style={formInput} type="number" {...register("price")} placeholder="price" />
        <input style={formInput} {...register("category")} placeholder="category name" />
        <input style={formInput} {...register("img")} placeholder="img url" />
        <input style={formInput} type="submit" />
      </form>
    </div>
  );
};

export default AddItems;