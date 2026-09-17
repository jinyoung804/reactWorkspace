import { useState } from "react";

export default function SearchForm() {
  const [keywordStr, setKeywordStr] = useState("");

  const changeFunc = (e) => {
    setKeywordStr(e.target.value);
  };

  return (
    <div>
      검색어 : <input value={keywordStr} onChange={changeFunc} />
      {keywordStr}
    </div>
  );
}
