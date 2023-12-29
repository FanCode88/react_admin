import { Link } from "react-router-dom";
import "./product.css";
import { Char } from "../../components/char/Char";
import { productData } from "../../dummyData";
import { MdPublish } from "react-icons/md";

export const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Char data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBootom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">234</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">2234</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <MdPublish className="profuctItemIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productBtn">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};
