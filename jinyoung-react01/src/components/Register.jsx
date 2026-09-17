import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    birth: "",
    country: "",
    etc: "",
  });

  const changeFunc = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>회원 가입</h1>
      이름 :
      <input
        name="name"
        placeholder="이름 입력"
        value={form.name}
        onChange={changeFunc}
      />
      <br />
      생일 :
      <input
        name="birth"
        type="date"
        value={form.birth}
        onChange={changeFunc}
      />
      <br />
      국적 :
      <select name="country" value={form.country} onChange={changeFunc}>
        <option value="">선택</option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
        <option value="jp">일본</option>
      </select>
      <br />
      기타 :
      <textarea name="etc" value={form.etc} onChange={changeFunc} />
      <br />
      <button>가입</button>
    </div>
  );
}
