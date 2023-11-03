import { useEffect, useState } from "react";
import Contact from "../Contact";
import { AbsoluteCenter, Box, Center, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container maxW="80%">
      <Heading m={4} textAlign={'center'}>Contact List</Heading>
      {loading ? (
        <Center h={'100vh'}>
             <Spinner size={'xl'}/>
        </Center>
         
      ) : (
        <SimpleGrid spacing={8} p={9} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
        </SimpleGrid>
      )
      }
    </Container>
  );
}

export default ContactList;
