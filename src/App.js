import React, { useState } from "react";
import "./App.css";
import { commentsBanhBao, commentsShopeeSale } from "./commentsData";

function App() {
  const [comments] = useState(commentsBanhBao);

  const [buffComments] = useState(commentsShopeeSale);

  const [randomComments, setRandomComments] = useState([]);
  const [copySuccess, setCopySuccess] = useState("");

  const getRandomComments = () => {
    const shuffled = comments.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setRandomComments(selected);
    setCopySuccess(""); // Xóa thông báo cũ khi chọn bình luận mới
  };

  const getBuffComments = () => {
    const shuffled = buffComments.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setRandomComments(selected);
    setCopySuccess(""); // Xóa thông báo cũ khi chọn bình luận mới
  };

  const copyToClipboard = () => {
    const textToCopy = randomComments.join("\n");
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess("Copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 10000); // Ẩn thông báo sau 2 giây
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: 700 }}> Random Comment Picker</p>
        <button className="random-button" onClick={getRandomComments}>
          Pick 10 Comments Banh Bao
        </button>

        <button className="random-button" onClick={getBuffComments}>
          Pick 10 Comments Shopee Sale
        </button>

        <ul className="comments-list ">
          {randomComments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment}
            </li>
          ))}
        </ul>
        {randomComments.length > 0 && (
          <>
            <button className="copy-button" onClick={copyToClipboard}>
              Copy All
            </button>
          </>
        )}
        {copySuccess && <div className="copy-success">{copySuccess}</div>}
      </header>
    </div>
  );
}

export default App;
