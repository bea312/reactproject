// src/App.js
import React from 'react';
import WelcomeMessage from './Components/WelcomeMessage';
import CurrentDate from './Components/CurrentDate';
import HobbiesList from './Components/HobbiesList';
import Button from './Components/Button';
import ProfileCard from './Components/ProfileCard';
import ItemList from './Components/ItemList';
import ToggleButton from './Components/ToggleButton';
import Counter from './Components/Counter';
import HoverBox from './Components/HoverBox';
import InputForm from './Components/InputForm';
import DropdownMenu from './Components/DropdownMenu';
import LoginForm from './Components/LoginForm';
import ControlledForm from './Components/ControlledForm';
import ValidatedForm from './Components/ValidatedForm';
import MultiStepForm from './Components/MultiStepForm';
import CheckboxForm from './Components/CheckboxForm';

const App = () => (
  <div>
    <WelcomeMessage />
    <CurrentDate />
    <HobbiesList />
    <Button text="Click Me" color="blue" />
    <ProfileCard name="John Doe" age="30" email="john.doe@example.com" />
    <ItemList />
    <ToggleButton />
    <Counter />
    <HoverBox />
    <InputForm />
    <DropdownMenu />
    <LoginForm />
    <ControlledForm />
    <ValidatedForm />
    <MultiStepForm />
    <CheckboxForm />
  </div>
);

export default App;
