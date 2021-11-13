import { Container } from '@mui/material';
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




const ReviewBox = () => {



  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://peaceful-beach-69061.herokuapp.com/reviews', data)
      .then(res => {
        // console.log(res);
        if (res.data.insertedId) {
          alert('Thanks for your valuable comment.');
          reset();
        }
      })
  }
  return (
    <Container>
      <div className={classes.root} >
        <h2>Please Write Your Valuable Comment</h2>



        <form style={{ ...formStyle }} onSubmit={handleSubmit(onSubmit)}>






          <input style={formInput}  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
          <textarea style={formInput} {...register("description")} placeholder="Comment" />
          <input style={formInput} type="email" {...register("email")} placeholder="email" />
          <input style={formInput} {...register("profession")} placeholder="profession" />
          <input style={formInput} {...register("img")} placeholder="img url" />
          <input style={formInput} type="number" {...register("star")} placeholder="rating" />
          <input style={formInput} type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default ReviewBox;