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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 my-10 md:mx-40 lg:mx-20">
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
          className="fixed bottom-10 right-0 rounded-l-lg bg-red-700 text-white text-2x2 px-4 py-2"
          onClick={open}
        >
          Add
        </button>
      </div>
    </>
  );
}
