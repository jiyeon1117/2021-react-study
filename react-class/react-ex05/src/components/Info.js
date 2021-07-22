import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();

  const onChangeName = () => setName(name);
  const onChangeNickname = () => setNickname(nickname);

  return(
    <div>
      <div>
        <input value={name} onClick={onChangeName}/>
        <input value={nickname} onClick={onChangeName}/>
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;