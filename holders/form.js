<FormControl className="wide_form_group">
        <InputLabel id="demo-simple-select-filled-label">
          Client Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={10}
          id="demo-simple-select-outlined"
          label="Client Type"
          name="client_type"
          inputRef={register}
          error={errors.client_type?.message !== undefined}
        >

           <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>

        </Select>
        <FormHelperText id="component-error-text" error>{errors.client_type?.message}</FormHelperText>
      </FormControl>