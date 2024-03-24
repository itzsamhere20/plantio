import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosClose } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

import { BiUpload } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

export default function Products() {
  const [Product, setProduct] = useState([]);
  const [Edit, setEdit] = useState(false);
  const [ToUpdate, setToUpdate] = useState([]);
  const [id, setId] = useState();
  const [DeleteModal, setDeleteModal] = useState(false);
  const [Add, setAdd] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [Search, setSearch] = useState("");
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState(null);
  const [error,setError] = useState(false)

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    const base64 = await convertBase64Img(file);

    setImg(base64);
  };
  const convertBase64Img = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // ------------fetching data from server----------
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProduct(res.data));
  // }, []);

  // // --------- storing fetched data into local-------
  // localStorage.setItem("products", JSON.stringify(Product));
  const localStorageProducts = localStorage.getItem("products");
  const products = localStorageProducts ? JSON.parse(localStorageProducts) : [];

  console.log("products frm strg", Product);
  // -----------delete function ------------
  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    setProduct(filteredProducts);
    setDeleteModal(false);
    setDelete(false);
  };
  // -------------delete Button function-------------
  const handleDeleteButton = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  // ----------------update product function -----------

  // ----------------------------Add Product function-----------------------
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      title: title,
      description: description,
      price: price,
      category: category,
      image: img,
    };
    if(title!='' && description!='' && price!='' && category!='' && img!=''){
      setError(false)
      const updatedProducts = [...products, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProduct(updatedProducts);
      setAdd(false);
      reset();
    }else{
      setError(true)
    }
   
  };
  const reset = () => {
    setTitle("");
    setCategory("men's clothing");
    setDescription("");
    setPrice('');
    setImg(null);
    setError(false)
  };

  // ------------------------Update Button function----------------
  const handleUpdateButton = (product) => {
    setEdit(true);
    setId(product.id);
    setPrice(product.price);
    setCategory(product.category);
    setTitle(product.title);
    setDescription(product.description);
    setImg(product.image);
    setToUpdate({ ...ToUpdate });
  };
  const handleUpdateModalButton = () => {
    ToUpdate.title = { title };
    ToUpdate.price = price;
    ToUpdate.description = { description };
    ToUpdate.category = { category };
    ToUpdate.image = { img };
    ToUpdate.id = id;
    setEdit(false);
  };
  console.log("toupdate product", ToUpdate);

  return (
    <div className="flex flex-col px-10">

      {/* --------------------Edit Button Modal-------------- */}

      <div
        className=" fixed w-[100%] h-[100vh] backdrop-blur-sm justify-center items-center"
        style={{ display: Edit ? "flex" : "none" }}
      >
        <div className="flex bg-white w-[60%] mx-[20%] h-auto py-5 shadow-md">
          <div className="flex  justify-between px-5 py-3">
            <h1 className="text-2xl font-libre">Update Product</h1>

            <div
              key={id}
              className="w-[90%] flex-col flex text-black x-3 py-1  text-2xl"
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <button className="text-3xl" onClick={() => {handleUpdateModalButton();reset()}}>
              Update
            </button>
          </div>
        </div>
      </div>
      {/* -----------------------------Add Product Modal------------------------- */}

      <div
        className="flex  fixed  overflow-auto backdrop-blur-sm w-[100%] h-[100vh] justify-center items-center"
        style={{ display: Add ? "flex" : "none" }}
      >
        <div className="flex bg-white w-[60%] mx-[20%] h-auto  shadow-md">
          <div className="flex  w-[100%] flex-col justify-center items-center px-5 py-2">
            <div className="flex w-[100%] justify-between items-center ">
              <h1 className="text-2xl font-libre py-5">Add Product</h1>
              <IoIosClose
                className="text-4xl text-slate-700 cursor-pointer flex "
                onClick={() => {
                  setAdd(false); reset()
                }}
              />
            </div>

            <div className="w-[95%] flex flex-col text-lg  text-black px-3 py-1  font-poppins">
              <div className="flex w-[100%] py-5 flex-col bg-slate-50 shadow-md rounded-xl">
                {/* ------------------Title and price area------------ */}

                <div className="flex w-[100%] p-5 gap-10">
                  <div className="flex flex-col w-[50%]">
                    <label for="title"> Title</label>
                    <input
                      type="text"
                      id="title"
                      className="border px-2 text-sm py-2 focus:ring-1 ring-green-400 rounded-lg focus:shadow-sm text-gray-500"
                      value={title}
                      placeholder="Title here..."
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col w-[50%]">
                    <label for="price"> Price</label>
                    <input
                      type="number"
                      id="price"
                      className="border px-2 text-sm py-2 focus:ring-1 ring-green-400 rounded-lg focus:shadow-sm text-gray-500"
                      value={price}
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                {/* -------------description and category area----------      */}
                <div className="flex w-[100%] text-base p-5 gap-10">
                  <div className="flex flex-col w-[70%]">
                    <label for="description"> Description</label>
                    <textarea
                      id="description"
                      className="border px-2 text-sm py-2 focus:ring-1 ring-green-400 rounded-lg focus:shadow-sm text-gray-500"
                      value={description}
                      placeholder="Description here ..."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col w-[30%]">
                    <label for="category"> Category</label>
                    <select
                      id="category"
                      defaultValue={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border px-2 text-sm py-2 focus:ring-1 ring-green-400 rounded-lg focus:shadow-sm text-gray-500"
                    >
                      <option selected value={"men's clothing"}>
                        Men's Clothing
                      </option>
                      <option selected value={"women's clothing"}>
                        Women's Clothing
                      </option>
                      <option selected value={"jewellery"}>
                        Jewellery
                      </option>
                      <option selected value={"electronics"}>
                        Electronics
                      </option>
                    </select>
                  </div>
                </div>

                {/* ----------------choose image button------------ */}
                <div className="flex w-[100%] items-center px-5">
                  <input
                    type="file"
                    id="img"
                    className="hidden"
                    
                    onChange={(e) => uploadImage(e)}
                  />
                  <label
                    for="img"
                    className="flex w-max  flex-wrap justify-center items-center text-white  bg-green-900  text-base py-2 gap-3 rounded px-5 hover:bg-green-800 "
                  >
                    <BiUpload className="text-xl " />
                    Choose a Image
                  </label>

                  {img !== null && (
                    <div className="flex   px-3 py-2 justify-center items-center">
                      <img
                        src={img}
                        alt=""
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>
                  )}
                  <div className="px-5 text-xs wrap justify-self-end  text-red-600" style={{display: error? 'flex' :'none'}}>Unable to add product,Please make sure to check all the fields.</div>
                </div>
              </div>

              {/* --------------Butttons area------------      */}
              <div className="flex w-[100%] justify-end gap-1 py-5 ">
                <button
                  className="px-6 py-2  bg-red-700 rounded-l-xl text-white hover:bg-red-800"
                  onClick={() => reset()}
                >
                  Reset
                </button>
                <button
                  className="px-6 py-2 rounded-r-xl bg-green-700 text-white hover:bg-green-800"
                  onClick={handleAddProduct}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- title bar area -------------- */}
      <div className="flex py-10 w-[100%] justify-between ">
        <h1 className="text-2xl font-libre pr-5 ">Products</h1>

        {/* -----------------Searchbar and buttons area----------- */}

        <div className="flex w-[30%] justify-between gap-3">
          <div className="text-2xl flex self-center gap-2 w-[20%] text-slate-500">
            <IoAddCircleOutline
              className="cursor-pointer hover:text-green-700"
              onClick={() => setAdd(!Add)}
            />
            <MdDeleteOutline
              className="cursor-pointer hover:text-red-700"
              onClick={() => setDelete(!Delete)}
            />
          </div>
          <div className="flex w-[80%]  border border-gray-300 rounded-full">
            <input
              type="text"
              className="flex w-[90%] rounded-full px-2 py-1"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Product..."
            />
            <div
              className="flex w-[20px] h-[20px] justify-center items-center self-center justify-self-end border border-gray-200 rounded-full cursor-pointer mr-1"
              style={{ display: Search ? "flex" : "none" }}
            >
              <IoIosClose className="text-xl " onClick={() => setSearch("")} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- product area----------------- */}
      {products
        .filter((searchedProduct) =>
          searchedProduct.title.toLowerCase().includes(Search.toLowerCase())
        )
        .map((product) => (
          <div className=" group flex w-[100%] h-[100px]  border-b border-gray-300 hover:bg-gray-100 font-poppins  ">
            {/* ---------image--------- */}
            <img
              src={product.image}
              alt={product.title}
              className="w-[150px] py-5 object-contain"
            />
            {/* ------------------product details--------------- */}
            <div className="flex flex-col gap-2 w-[80%] text-left overflow-hidden py-5">
              {/* --------title price and category------- */}
              <div className="flex  text-xs gap-10">
                <div key={product.id} className="  w-[50%]">
                  {product.title}
                </div>
                <div className=" w-[20%] flex justify-start">
                  ${product.price}
                </div>
                <div className=" w-[20%] flex justify-start">
                  {product.category}
                </div>
              </div>

              {/* ------------------ Description--------------- */}

              <div className="text-xs text-slate-500 leading-snug w-[50%] overflow-hidden">
                {product.description}
              </div>
            </div>

            {/* --------------edit and delete button area-------------- */}

            {/* ---------delete-button------------ */}
            <div
              className="flex self-end justify-center justify-self-end items-center text-white  text-xl h-[100%] bg-red-600 duration-700"
              style={{ width: Delete ? "10%" : "0%" }}
              onClick={() => handleDeleteButton(product.id)}
            >
              <MdOutlineRemoveCircleOutline />
            </div>

            {/* ------------edit button---------- */}
            <div
              className="w-[0%] duration-300 text-slate-700 text-xl group-hover:w-max justify-center items-center cursor-pointer"
              style={{ display: Delete ? "none" : "flex" }}
              onClick={() => handleUpdateButton(product)}
            >
              {" "}
              <FaRegEdit />
            </div>
          </div>
        ))}

      {/* -------------- Delete Button modal----------------------- */}
      <div
        className=" fixed text-black w-[100%]   h-[100vh]  justify-center items-center   backdrop-blur-sm  p-5  z-50   duration-700"
        style={{ display: DeleteModal ? "flex" : "none" }}
      >
        <div className="flex w-[60%] mx-[20%] py-20 flex-col bg-white shadow-md justify-center items-center gap-5 rounded-2xl">
          <h1 className="text-2xl font-libre">Are you sure?</h1>
          <div className="flex gap-5">
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleDelete(id)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
