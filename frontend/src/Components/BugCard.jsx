import { DeleteIcon } from "@chakra-ui/icons";
import { Button, CardBody, Flex, HStack, Text } from "@chakra-ui/react";
import { EditModal } from "./EditModal";

export const BugCard = ({
    id,
    name,
    bgColor,
    handleDelete,
    columnId,
    handleEdit,
}) => {
    const handleDeleteClick = () => {
        // console.log(id);
        handleDelete(columnId, id);
    };
    return (
        <>
            <CardBody>
                <Flex justifyContent={"space-between"} padding={"3% 4%"} borderRadius={"8px"} alignItems={"center"}>
                    <Text
                        fontSize={"1.1rem"}
                        color={bgColor === "yellow" ? "black" : "white"}
                    >
                        {name}
                    </Text>
                    <HStack gap={"0px"} width={"20%"} display={"flex"} justifyContent={"space-around"}>

                        <Button
                            variant={"ghost"}
                            width={"10px"}
                            _hover={{ cursor: "pointer", color: "white" }}
                            onClick={handleDeleteClick}
                        >
                            <DeleteIcon color={bgColor === "yellow" ? "black" : "white"} />
                        </Button>
                        <EditModal
                            bgColor={bgColor}
                            handleEdit={handleEdit}
                            columnId={columnId}
                            id={id}
                        />
                    </HStack>
                </Flex>
            </CardBody>
        </>
    );
};