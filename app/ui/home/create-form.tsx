'use client';

import { createTodo } from '@/app/lib/actions';
import { Todo } from '@/app/lib/definitions';
import { useFormState } from 'react-dom';


export default function Form() {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createTodo, initialState);

  return (
    <>
      <form action={createTodo}>
        <label htmlFor='titolo'>Titolo</label>
        <input id="titolo" name="titolo" type="text" />
        <label htmlFor='descrizione'>Descrizione</label>
        <input id="descrizione" name="descrizione" type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
