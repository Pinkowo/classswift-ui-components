import React from 'react';
import style from './app.module.css';
import { Button, Inputfield, Dropdown, DropButton } from './components';

function App() {
  const [value, setValue] = React.useState('');
  const [dropValue, setDropValue] = React.useState('管理員');
  const handleClick = () => console.log('button clicked');
  const arrayFrom1To30 = Array.from({ length: 30 }, (_, index) => index + 1);
  const [number, setNumber] = React.useState(1);
  return (
    <div style={{ padding: 50, display: 'flex', flexDirection: 'column', gap: 30 }}>
      <Button text="註冊" onClick={handleClick} />

      <Inputfield text="帳號" type="text" isLong={false}
        value={value} setValue={setValue} inputClass={style.input} />

      <Dropdown value={dropValue} setValue={setDropValue} disabled={false}
        className={{ dropdown: style.dropdown, select: style.select, modal: style.modal }}>
        <DropButton text="管理員" onClick={() => console.log('1')} />
        <DropButton text="教師" onClick={() => console.log('2')} />
        <DropButton text="學生" onClick={() => console.log('3')} />
      </Dropdown>

      <Dropdown value={number} setValue={setNumber} scrollHeight={196} isSplit={true}
        className={{ dropdown: style.dropdown, select: style.select, modal: style.modal }}>
        {arrayFrom1To30.map((item) => (
          <DropButton key={item} text={item} />
        ))}
      </Dropdown>
    </div>
  );
}

export default App;