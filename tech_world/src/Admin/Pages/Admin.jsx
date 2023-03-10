import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FiSettings, FiMenu } from "react-icons/fi";
import { MdDashboard, MdLibraryAdd } from "react-icons/md";
import { FaStore, FaChartPie } from "react-icons/fa";
import Dashboard from "../Components/Dashboard";
import AllProduct from "../Components/AllProduct";
import AddForm from "../Components/Form";
import AllUsers from "../Components/AllUsers";
import Logo from "../../Assets/tech_world_logo.png";
import ProjectTables from "../Components/dataStatas/ProjectTable";
import ChartsStates from "../Components/ChartsStates";
import { Link } from "react-router-dom";
import Setting from "../Components/Setting";
const LinkItems = [
  { name: "Dashboard", icon: MdDashboard, path: "dashboard" },
  { name: "All Product", icon: FaStore, path: "allproduct" },
  { name: "All Users", icon: MdLibraryAdd, path: "alluser" },
  { name: "Order Record", icon: FaStore, path: "Orderrecord" },
  { name: "Add Product", icon: MdLibraryAdd, path: "addproduct" },
  { name: "Settings", icon: FiSettings,path: "settings"  },
  { name: "ChartsStates", icon: FaChartPie, path: "charts" },
];

// pura section
export default function SimpleSidebar({ children }) {
  const [path, setPath] = useState("dashboard");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setPath={setPath}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} setPath={setPath} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      </Box>

      <Box w='full' h='100vh' p="4" pt={{ base: "90px", md: "10px" }} ml={{ base: 0, md: 60 }}>
        {children}
        {path === "dashboard" && <Dashboard />}
        {path === "allproduct" && <AllProduct />}
        {path === "addproduct" && <AddForm />}
        {path === "alluser" && <AllUsers />}
        {path === "Orderrecord" && <ProjectTables />}
        {path === "settings" && <Setting />}
        {path === "charts" && <ChartsStates aspect={2} title="the Boss" />}
      </Box>
    </Flex>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { setPath } = rest;
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "60" }}
      pos="fixed"
      top="0"
      h="full"
      {...rest}
    >
      <Box>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            <Link to="/">
              <Image src={Logo} alt={"logo"} w={"100%"} h={"auto"} />
            </Link>
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            <Box onClick={() => setPath(link.path)}>
              <p onClick={onClose}>{link.name}</p>
            </Box>
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ path, icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      fontSize="20px"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "#222831",
        color: "gold",
        fontWeight: 600,
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="20"
          _groupHover={{
            bg: "#222831",
            color: "gold",
            fontWeight: 600,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      position="fixed"
      top={0}
      w="100%"
      zIndex={999}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        <Link to="/">
          {" "}
          <Image
            src={Logo}
            alt={"logo"}
            w={{ base: "150px", md: "20vw" }}
            h={"auto"}
            margin="auto"
          />
        </Link>
      </Text>
    </Flex>
  );
};
