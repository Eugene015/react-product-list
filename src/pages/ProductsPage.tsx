import React, { useContext } from "react";
import { useProducts } from "../hooks/products";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Product } from "../components/Product";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";

export function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="grid grid-cols-2 gap-4 my-10 mx-40">
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}

        {modal && (
          <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}

        <button
          className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
          onClick={open}
        >
          +
        </button>
      </div>
    </>
  );
}