import React, { useState } from "react";
import "./App.css";

function App() {
  const [comments] = useState([
    "Trông ngon quá!",
    "Cho mình order 1 phần nhé!",
    "Bánh bao này có vị gì vậy?",
    "Mua ở đâu vậy ad?",
    "Có giao hàng không shop?",
    "Giá bao nhiêu 1 cái vậy?",
    "Mình muốn thử món này quá!",
    "Có ai đã ăn chưa, review chút nào!",
    "Bánh này làm từ nguyên liệu gì thế?",
    "Đẹp và ngon, kết hợp tuyệt vời!",
    "Có giảm giá không ad?",
    "Bánh này có chay không?",
    "Hương vị trông hấp dẫn quá!",
    "Shop có ship đến Vinhomes Smart City không?",
    "Ngon quá, mình muốn ăn thử!",
    "Mua 5 cái được giảm giá không?",
    "Bánh bao màu sắc đẹp quá!",
    "Có bán lẻ không ad?",
    "Nhìn thích quá, muốn ăn thử ngay!",
    "Hấp dẫn thật sự!",
    "Bánh này tự làm à?",
    "Món này là đặc sản ở đâu vậy?",
    "Có thể đặt trước không ad?",
    "Bánh bao kiểu mới lạ quá!",
    "Chắc ngon lắm, phải thử mới được!",
    "Shop có hotline không?",
    "Có bán số lượng lớn không?",
    "Bánh bao này có loại nào khác không?",
    "Mua 1 cặp bao nhiêu tiền vậy?",
    "Bánh bao này có vị gì đặc biệt không?",
    "Mua 10 cái có khuyến mãi gì không?",
    "Mình muốn đặt ngay!",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Đẹp và ngon, mình muốn thử!",
    "Bánh bao này có vị gì?",
    "Mua nhiều có khuyến mãi gì không?",
    "Bánh bao ngon quá, phải thử mới được!",
    "Bánh bao này làm từ gì vậy?",
    "Mua 1 cặp bao nhiêu tiền?",
    "Bánh bao ngon và đẹp quá!",
    "Có nhận ship toàn quốc không?",
    "Bánh bao này nhân gì?",
    "Ngon quá, mình muốn ăn thử!",
    "Shop có bán ở khu vực Vinhomes không?",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Đẹp và ngon, mình muốn thử!",
    "Bánh bao này có vị gì?",
    "Mua nhiều có khuyến mãi gì không?",
    "Bánh bao ngon quá, phải thử mới được!",
    "Bánh bao này làm từ gì vậy?",
    "Mua 1 cặp bao nhiêu tiền?",
    "Bánh bao ngon và đẹp quá!",
    "Có nhận ship toàn quốc không?",
    "Bánh bao này nhân gì?",
    "Ngon quá, mình muốn ăn thử!",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Bánh bao ngon quá, mình muốn ăn thử!",
    "Có giao hàng đến Vinhomes Smart City không?",
    "Mình ở Tây Mỗ, có ship đến không?",
    "Mình muốn đặt bánh bao, cho mình thông tin nhé!",
    "Shop có nhận ship hàng trong nội thành không?",
    "Nhìn bánh bao ngon quá, muốn ăn thử!",
    "Trông ngon quá!",
    "Cho mình order 1 phần nhé!",
    "Bánh bao này có vị gì vậy?",
    "Mua ở đâu vậy ad?",
    "Có giao hàng không shop?",
    "Giá bao nhiêu 1 cái vậy?",
    "Mình muốn thử món này quá!",
    "Có ai đã ăn chưa, review chút nào!",
    "Bánh này làm từ nguyên liệu gì thế?",
    "Đẹp và ngon, kết hợp tuyệt vời!",
    "Có giảm giá không ad?",
    "Bánh này có chay không?",
    "Hương vị trông hấp dẫn quá!",
    "Shop có ship đến Hà Đông không?",
    "Ngon quá, mình muốn ăn thử!",
    "Mua 5 cái được giảm giá không?",
    "Bánh bao màu sắc đẹp quá!",
    "Có bán lẻ không ad?",
    "Nhìn thích quá, muốn ăn thử ngay!",
    "Hấp dẫn thật sự!",
    "Bánh này tự làm à?",
    "Món này là đặc sản ở đâu vậy?",
    "Có thể đặt trước không ad?",
    "Bánh bao kiểu mới lạ quá!",
    "Chắc ngon lắm, phải thử mới được!",
    "Shop có hotline không?",
    "Có bán số lượng lớn không?",
    "Bánh bao này có loại nào khác không?",
    "Mua 1 cặp bao nhiêu tiền vậy?",
    "Bánh bao này có vị gì đặc biệt không?",
    "Mua 10 cái có khuyến mãi gì không?",
    "Mình muốn đặt ngay!",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Đẹp và ngon, mình muốn thử!",
    "Bánh bao này có vị gì?",
    "Mua nhiều có khuyến mãi gì không?",
    "Bánh bao ngon quá, phải thử mới được!",
    "Bánh bao này làm từ gì vậy?",
    "Mua 1 cặp bao nhiêu tiền?",
    "Bánh bao ngon và đẹp quá!",
    "Có nhận ship toàn quốc không?",
    "Bánh bao này nhân gì?",
    "Ngon quá, mình muốn ăn thử!",
    "Shop có bán ở khu vực Hà Đông không?",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Đẹp và ngon, mình muốn thử!",
    "Bánh bao này có vị gì?",
    "Mua nhiều có khuyến mãi gì không?",
    "Bánh bao ngon quá, phải thử mới được!",
    "Bánh bao này làm từ gì vậy?",
    "Mua 1 cặp bao nhiêu tiền?",
    "Bánh bao ngon và đẹp quá!",
    "Có nhận ship toàn quốc không?",
    "Bánh bao này nhân gì?",
    "Ngon quá, mình muốn ăn thử!",
    "Hình ảnh đẹp quá!",
    "Có nhận ship nội thành không?",
    "Bánh bao này nhân gì vậy?",
    "Thấy ngon quá, muốn thử ngay!",
    "Ngon mà nhìn cũng hấp dẫn nữa!",
    "Mình muốn đặt ngay, cho mình thông tin nhé!",
    "Bánh bao đẹp và ngon quá!",
    "Mua nhiều có được giảm giá không ad?",
    "Mua 3 cái có ưu đãi gì không?",
    "Bánh bao này có gì đặc biệt vậy ad?",
    "Bánh bao ngon quá, mình muốn ăn thử!",
    "Có giao hàng đến Hà Đông không?",
    "Mình ở Thanh Xuân, có ship đến không?",
    "Mình muốn đặt bánh bao, cho mình thông tin nhé!",
    "Shop có nhận ship hàng trong nội thành không?",
    "Nhìn bánh bao ngon quá, muốn ăn thử!",
    "Check ib mình với ạ.",
    "Rep ib mình với bạn ơi.",
    "Ngon lắm luôn ạ. Chuẩn sầu riêng xịn sò.",
    "Còn bánh không bạn ơi?",
    "Ship xuống bao nhiêu vậy ạ?",
    "Có ship Thanh Xuân không ạ?",
    "Rep ib mình với bạn ơi.",
    "Ngon lắm, mình muốn đặt thêm.",
    "Bánh bao eatclean này có nhiều vị không?",
    "Check ib bạn ơi.",
    "Rep ib mình nhé.",
    "Mình muốn đặt bánh eatclean, rep ib nhé.",
    "Shop có giao hàng đến Thanh Xuân không?",
    "Check ib giúp mình nhé.",
    "Giá bánh bao nhân đậu đỏ bao nhiêu ạ?",
    "Rep ib mình với bạn nhé.",
    "Cho mình hỏi giá bánh bao nhân thịt ạ?",
    "Check ib mình với.",
    "Rep ib nhé, mình muốn đặt bánh.",
    "Bánh bao nhân trứng muối giá bao nhiêu?",
    "Có giao hàng đến Cầu Giấy không bạn?",
    "Check ib mình với.",
    "Rep ib mình với.",
    "Bánh bao nhân đậu xanh bao nhiêu tiền?",
    "Mình ở Đống Đa, có ship đến không?",
    "Cho mình hỏi giá bánh bao nhân gà nhé.",
    "Rep ib mình với.",
    "Check ib giúp mình với.",
    "Có giao hàng đến Ba Đình không shop?",
    "Giá bánh bao nhân thịt nướng bao nhiêu?",
    "Rep ib mình với bạn nhé.",
    "Bánh bao nhân phô mai giá sao ạ?",
    "Mình muốn đặt bánh, check ib với.",
    "Rep ib mình với.",
    "Check ib giúp mình nhé.",
    "Shop có ship đến Hoàn Kiếm không?",
    "Giá bánh bao nhân rau củ bao nhiêu ạ?",
    "Rep ib mình với.",
    "Check ib giúp mình với.",
    "Bánh bao nhân thịt gà nướng giá bao nhiêu?",
    "Cho mình hỏi giá bánh bao nhân hải sản nhé.",
    "Rep ib mình với.",
    "Check ib giúp mình nhé.",
    "Có giao hàng đến Tây Hồ không bạn?",
    "Giá bánh bao nhân trứng muối bao nhiêu?",
    "Rep ib mình với bạn nhé.",
    "Mình muốn đặt bánh, check ib với.",
    "Check ib giúp mình với.",
    "Bánh bao nhân thịt xá xíu giá sao ạ?",
    "Rep ib mình với.",
    "Có giao hàng đến Long Biên không shop?",
    "Giá bánh bao nhân đậu đỏ bao nhiêu?",
    "Check ib mình với.",
    "Rep ib giúp mình với.",
    "Mình ở Hai Bà Trưng, có ship đến không?",
    "Cho mình hỏi giá bánh bao nhân thịt ạ?",
    "Check ib giúp mình với.",
    "Rep ib mình với.",
    "Giá bánh bao nhân đậu xanh bao nhiêu ạ?",
    "Có giao hàng đến Hoàng Mai không bạn?",
    "Check ib giúp mình nhé.",
    "Rep ib mình với bạn nhé.",
    "Giá bánh bao nhân thịt gà nướng bao nhiêu?",
    "Mình muốn đặt bánh, check ib với.",
    "Rep ib giúp mình với.",
    "Có giao hàng đến Từ Liêm không shop?",
    "Giá bánh bao nhân trứng muối bao nhiêu ạ?",
    "Check ib giúp mình với.",
    "Rep ib mình với.",
    "Mình muốn hỏi giá bánh bao nhân thịt nhé.",
    "Có ship đến Gia Lâm không bạn?",
    "Check ib giúp mình với.",
    "Rep ib mình với bạn nhé.",
    "Giá bánh bao nhân rau củ bao nhiêu?",
    "Mình muốn đặt bánh, check ib với.",
    "Rep ib giúp mình với.",
    "Bánh bao nhân phô mai giá sao ạ?",
    "Có ship đến Hoài Đức không bạn?",
    "Check ib giúp mình với.",
    "Rep ib mình với.",
    "Giá bánh bao nhân thịt nướng bao nhiêu?",
    "Cho mình hỏi giá bánh bao nhân đậu đỏ nhé.",
    "Check ib giúp mình với.",
    "Rep ib mình với bạn nhé.",
    "Giá bánh bao nhân trứng muối bao nhiêu?",
    "Mình muốn đặt bánh, check ib với.",
    "Rep ib giúp mình với.",
    "Có ship đến Đông Anh không bạn?",
    "Check ib giúp mình với.",
    "Rep ib mình với.",
    "Giá bánh bao nhân đậu xanh bao nhiêu?",
    "Cho mình hỏi giá bánh bao nhân thịt gà nhé.",
    "Check ib giúp mình với.",
    "Rep ib mình với bạn nhé.",
    "Giá bánh bao nhân thịt xá xíu bao nhiêu?",
    "Mình muốn đặt bánh, check ib với.",
    "Rep ib giúp mình với.",
    "Có ship đến Thanh Trì không bạn?",
  ]);
  const [randomComments, setRandomComments] = useState([]);

  const getRandomComments = () => {
    const shuffled = comments.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setRandomComments(selected);
  };

  const copyToClipboard = () => {
    const textToCopy = randomComments.join("\n");
    navigator.clipboard.writeText(textToCopy).then(() => {});
  };

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: 700 }}> Random Comment Picker</p>
        <button className="random-button" onClick={getRandomComments}>
          Pick 10 Comments
        </button>
        <ul className="comments-list ">
          {randomComments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment}
            </li>
          ))}
        </ul>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy All
        </button>
      </header>
    </div>
  );
}

export default App;
