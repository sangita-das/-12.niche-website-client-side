import { Container, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import StarIcon from '@mui/icons-material/Star';



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

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


const ReviewBox = () => {

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/reviews', data)
      .then(res => {
        // console.log(res);
        if (res.data.insertedId) {
          alert('product item added successfully');
          reset();
        }
      })
  }
  return (
    <Container>
      <div className={classes.root} >
        <h2>Please Write Your Valuable Comment</h2>



        <form style={{ ...formStyle }} onSubmit={handleSubmit(onSubmit)}>


          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>



          <input style={formInput}  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
          <textarea style={formInput} {...register("description")} placeholder="Comment" />
          <input style={formInput} type="email" {...register("email")} placeholder="email" />
          <input style={formInput} {...register("profession")} placeholder="profession" />
          <input style={formInput} {...register("img")} placeholder="img url" />
          <input style={formInput} type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default ReviewBox;