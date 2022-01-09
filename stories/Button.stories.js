import React from 'react';
// import Button from '@/components/form/Button';
import Button from '../components/form/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Sign in',
  outline: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Try it now',
  outline: false
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Primary',
  outline: true
};

export const OutlineBtn = Template.bind({});
OutlineBtn.args = {
  color: 'secondary',
  children: 'Outline Secondary',
  outline: true
};
