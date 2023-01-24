'use client'
import { useController } from '@/main/controller';
import React, { useState, ChangeEvent } from 'react'

export default function Home() {

  const { userController } = useController();

  const [username, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const setState = e.target.name === 'username' ? setEmail : setPassword;
    setState(e.target.value);
  }

  function onClickLogin() {
    userController.login(username, password);
  }
  return (
    <div>
      <input name='username' placeholder='username' type='text' value={username} onChange={onChangeInput} />
      <input name='password' placeholder='password' type='password' value={password} onChange={onChangeInput} />
      <input type='button' value='Cadastrar' onClick={onClickLogin} />
    </div>
  )
}