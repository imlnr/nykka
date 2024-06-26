import { AddIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    useDisclosure,
    FormLabel,
    Input,
    Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
export const AddModal = ({ columnId, handleAdd }) => {
    // console.log(disabled);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    //   const dispatch = useDispatch();
    const handleClick = () => {
        let obj = {
            id: `KJ${(Math.random() * 10000).toString().substring(0, 4)}`,
            name,
        };
        handleAdd(obj, columnId);
        onClose();
    };
    return (
        <>
            <Tooltip hasArrow label="Report a Bug" background={"gray"}>
                <AddIcon onClick={onOpen} _hover={{ cursor: "pointer" }} />
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Bug</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleClick}>
                            Add it
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};