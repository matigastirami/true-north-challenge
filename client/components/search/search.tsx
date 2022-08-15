import { ChangeEvent, useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function SearchForm(props) {
  const { helpText, onChangeCallback, defaultValue, label } = props;

  const [searchValue, setSearchValue] = useState(defaultValue ?? 1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reValidator = /^[0-9\b]+$/;
    const value = e.target.value;

    if (value === "" || reValidator.test(value)) {
      setSearchValue(Number(value));
    }

    if (onChangeCallback && typeof onChangeCallback === "function") {
      onChangeCallback(value);
    }
  };

  return (
    <Col>
      <Form.Label htmlFor="searchInput">{label ?? "Search"}</Form.Label>
      <Form.Control
        type={"number"}
        min={1}
        max={100}
        id="searchInput"
        aria-describedby="searchHelp"
        onChange={handleChange}
        value={searchValue}
      />
      <Form.Text id="searchHelp" muted>
        {helpText}
      </Form.Text>
    </Col>
  );
}

export default SearchForm;
