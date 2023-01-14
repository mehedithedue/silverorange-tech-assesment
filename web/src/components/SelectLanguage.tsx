import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectLanguageProps {
  language: string;
  languageList: string[];
  setLanguage: (value: string) => void;
}

function SelectLanguage({
  language,
  languageList,
  setLanguage,
}: SelectLanguageProps) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Language</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={language}
        label="Language"
        autoWidth={true}
        onChange={(event: SelectChangeEvent) => setLanguage(event.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {languageList.map((lang, index) => (
          <MenuItem key={index} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectLanguage;
