import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const CreateClientForm = (props) => {
  const [clientTypes, updateClientTypes] = useState([]);
  const [countries, updateCountries] = useState([]);

  const schema = yup.object().shape({
    first_name: yup.string().max(200).required(),
    last_name: yup.string().max(200).required(),
    phone_number: yup.string().max(20).required(),
    mobile_number: yup.string().max(20).required(),
    client_type: yup.number().typeError("Client Type is Required").required(),
    country: yup.string().required(),
    title: yup.string().max(100).required(),
    address: yup.string().max(400).required(),
    notes: yup.string().max(500).required(),
  });

  const { register, handleSubmit, errors, control } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  let location = useLocation();

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/types").then((res) => {
      updateClientTypes(res.data);
    });

    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      updateCountries(res.data);
    });


  }, []);

  const onSubmit = (data) => {
    props.update({ ...data , id: location.state.id });
  };

  return (
    <form className="client_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_group">
        <TextField
          id="filled-basic"
          label="First Name"
          inputRef={register}
          defaultValue={location.state.first_name}
          name="first_name"
          error={errors.first_name?.message !== undefined}
          variant="filled"
          style={{
            width: "100%",
          }}
        />
        <FormHelperText id="component-error-text" error>
          {errors.first_name?.message}
        </FormHelperText>
      </div>


      <FormControl>
        <TextField
          id="filled-basic"
          label="Last Name"
          inputRef={register}
          name="last_name"
          defaultValue={location.state.last_name}
          error={errors.last_name?.message !== undefined}
          variant="filled"
        />
        <FormHelperText id="component-error-text" error>
          {errors.last_name?.message}
        </FormHelperText>
      </FormControl>

      <FormControl>
        <TextField
          id="filled-basic"
          label="Phone Number"
          inputRef={register}
          name="phone_number"
          defaultValue={location.state.phone_number}
          error={errors.phone_number?.message !== undefined}
          variant="filled"
        />
        <FormHelperText id="component-error-text" error>
          {errors.phone_number?.message}
        </FormHelperText>
      </FormControl>

      <FormControl>
        <TextField
          id="filled-basic"
          label="Mobile Number"
          variant="filled"
          inputRef={register}
          defaultValue={location.state.mobile_number}
          error={errors.mobile_number?.message !== undefined}
          name="mobile_number"
        />
        <FormHelperText id="component-error-text" error>
          {errors.mobile_number?.message}
        </FormHelperText>
      </FormControl>

      {/* client type select here */}
      <FormControl className="wide_form_group">
        <InputLabel id="demo-simple-select-filled-label">
          Client Type
        </InputLabel>
        <Controller
          as={
            <Select>
              {clientTypes.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.customer_type_en}
                  </MenuItem>
                );
              })}
            </Select>
          }
          control={control}
          name="client_type"
          error={errors.client_type?.message !== undefined}
          defaultValue={location.state.client_type}
        />
        <FormHelperText id="component-error-text" error>
          {errors.client_type?.message}
        </FormHelperText>
      </FormControl>

      <FormControl className="wide_form_group">
        <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
        <Controller
          as={
            <Select>
              {countries.map((item) => {
                return (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          }
          defaultValue={location.state.country}
          name="country"
          control={control}
          error={errors.country?.message !== undefined}
        />
        <FormHelperText id="component-error-text" error>
          {errors.country?.message}
        </FormHelperText>
      </FormControl>

      <FormControl className="wide_form_group">
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          inputRef={register}
          error={errors.title?.message !== undefined}
          name="title"
          defaultValue={location.state.title}
        />
        <FormHelperText id="component-error-text" error>
          {errors.title?.message}
        </FormHelperText>
      </FormControl>

      <FormControl className="wide_form_group">
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          inputRef={register}
          error={errors.address?.message !== undefined}
          name="address"
          defaultValue={location.state.address}
        />
        <FormHelperText id="component-error-text" error>
          {errors.address?.message}
        </FormHelperText>
      </FormControl>

      <FormControl className="wide_form_group">
        <TextField
          id="filled-multiline-flexible"
          label="Client Notes"
          multiline
          rows={6}
          inputRef={register}
          error={errors.notes?.message !== undefined}
          name="notes"
          defaultValue={location.state.notes}
          variant="filled"
        />
        <FormHelperText id="component-error-text" error>
          {errors.notes?.message}
        </FormHelperText>
      </FormControl>

      <FormControl className="wide_form_group_center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<SaveIcon />}
        >
          Create Client
        </Button>
      </FormControl>
    </form>
  );
};

export default CreateClientForm;
