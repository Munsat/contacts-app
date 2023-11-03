import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

function Contact({ contact }) {
  return (
      <Card boxShadow={'lg'} rounded={'2xl'} p={3}>
        <CardHeader>
          <Heading size="md"> {contact.name}</Heading>
        </CardHeader>
        <Divider color={'grey'}/>
        <CardBody>
          <Text><Heading as={'span'} size="sm">Email:</Heading> {contact.email}</Text>
          <Text pt={2}><Heading as={'span'} size="sm">Phone:</Heading> {contact.phone}</Text>
          <Text pt={2}><Heading as={'span'} size="sm">Address:</Heading> {contact.address.suite}, {contact.address.street}, {contact.address.city}, {contact.address.zipcode}</Text>
        </CardBody>
      </Card>
  );
}

export default Contact;
