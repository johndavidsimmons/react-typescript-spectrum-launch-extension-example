import { Form, TextField, Checkbox } from '@adobe/react-spectrum';

const TruthyChain = () => {
  return (
    <>
    <h1>Truthy Chain</h1>
    <Form maxWidth="size-3600">
  <TextField label="Email" />
  <TextField label="Password" />
  <Checkbox>Remember me</Checkbox>
</Form>
    </>
  )
}

export default TruthyChain;