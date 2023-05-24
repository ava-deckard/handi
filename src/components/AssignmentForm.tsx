import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import { Assignment } from '../types/assignment';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Props = {
  onSubmit: (assignment: Assignment) => void;
};

const AssignmentForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Assignment>();

  const onSubmitHandler = async (data: Assignment) => {
    try {
      const assignmentsCollection = collection(db, 'assignments');
      await addDoc(assignmentsCollection, data);
      onSubmit(data);
      reset();
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField {...register('title')} label='Title' required fullWidth margin='normal' />
        <TextField {...register('description')} label='Description' required fullWidth margin='normal' />
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AssignmentForm;
