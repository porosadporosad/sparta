import React, { useState } from 'react'

export default function () {
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');

  const onIdChange= (event) => {
    setLogin(event.target.value);
  }
  const onPassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div>
      아이디 : <input value={login} type="text" onChange={onIdChange} />
      </div>
      <div>
      비밀번호 : <input value={password} type="password" onChange={onPassword} />
      </div>
      <button onClick={function(){
      alert(`아이디는 ${login}, 비밀번호는 ${password}`)
      setLogin('');
      setPassword('');
    }}
      >로그인</button>
    </div>
  )
}
