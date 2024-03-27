import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Form = () => (
  <form action={process.env.FORMSPREE_ENDPOINT} method="POST">
    <FormControl id="name" isRequired>
      <FormLabel>Name:</FormLabel>
      <Input type="text" name="name" />
    </FormControl>

    <FormControl id="email" isRequired>
      <FormLabel>Email:</FormLabel>
      <Input type="email" name="email" />
    </FormControl>

    <FormControl id="message" isRequired>
      <FormLabel>Message:</FormLabel>
      <Textarea name="message" />
    </FormControl>

    <Button type="submit" mt={4}>
      Contact Me!
    </Button>
  </form>
);

export default Form;
