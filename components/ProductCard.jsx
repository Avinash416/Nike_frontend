import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data: { attributes: p, id }, showRemoveButton }) => {
    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        dispatch(removeFromWishlist(id));
    };

    const removedFromWishlist = () => {
        toast.success("Product removed from Wishlist", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    return (
        <>
        <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer relative">
            <Link href={`/product/${p.slug}`}>
                <Image
                    width={500}
                    height={500}
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    className="aspect-square"
                />
                <div className="p-4 text-black/[0.9]">
                    <h2 className="text-lg font-medium">{p.name}</h2>
                    <div className="flex items-center text-black/[0.5]">
                        <p className="mr-2 text-lg font-semibold">
                            &#8377;{p.price}
                        </p>

                        {p.original_price && (
                            <>
                                <p className="text-base font-medium line-through">
                                    &#8377;{p.original_price}
                                </p>
                                <p className="ml-auto text-base font-medium text-green-500">
                                    {getDiscountedPricePercentage(
                                        p.original_price,
                                        p.price
                                    )}
                                    % off
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </Link>
            {showRemoveButton && (
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded"
                    onClick={()=>{handleRemoveClick();removedFromWishlist();}}
                >
                    Remove from Wishlist
                </button>
            )}
        </div>
        </>
    );
};

export default ProductCard;
