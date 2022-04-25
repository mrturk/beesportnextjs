import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Stack height="90vh">{children}</Stack>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = useState(0);
  const [productClassData, setProductClassData] = useState([]);
  const [productClassValue, setProductClassValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProductClass = useCallback(async () => {
    const response = await axios.get(
      "http://api.beesportwear.com/api/Product/api/Product/getProductClass"
    );
    setProductClassData(response.data);
  }, []);

  useEffect(() => {
    getProductClass();
  }, [getProductClass]);

  return (
    <Stack flex={1}>
      <Stack sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
          }}
        >
          <Tab label="Ürün Sınıfı" {...a11yProps(0)} />
          <Tab label="Ürün Tipi" {...a11yProps(1)} />
          <Tab label="Ürün" {...a11yProps(2)} />
        </Tabs>
      </Stack>
      <TabPanel value={value} index={0}>
        <Stack
          justifyContent="center"
          alignItems="center"
          flex={1}
          height="100vh"
        >
          <Stack width="80%" gap={3}>
            <Stack flexDirection="row">
              <Stack width="80%">
                <InputLabel id="product-select">Ürün Sınıfı</InputLabel>
                <Select
                  labelId="product-select"
                  id="product-select"
                  value={productClassValue}
                  label="Ürün Sınıfı"
                  onChange={(e) => {
                    setProductClassValue(e.target.value);
                  }}
                >
                  {productClassData.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.id}>
                        {item.class_type}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Stack>
              <Stack justifyContent="center" alignItems="center" width="20%">
                <Button> Sil</Button>
              </Stack>
            </Stack>
            <Stack>
              <Typography>Ürün Sınıfı Ekle</Typography>
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </Stack>
            <Stack>
              <Button
                onClick={async () => {
                  const value = {
                    ...JSON.parse(sessionStorage.getItem("userInfo")),
                    class_type: inputValue,
                  };
                  console.log(value);
                  productClassData.forEach((data) => {
                    if (
                      data.class_type
                        .toLocaleLowerCase()
                        .includes(inputValue.toLocaleLowerCase())
                    ) {
                      return;
                    }
                  });

                  await axios.post(
                    "http://api.beesportwear.com/api/Product/api/Product/addProductClass",
                    value
                  );
                  await getProductClass();
                }}
              >
                Ekle
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Stack>
  );
}
