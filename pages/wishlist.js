import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

    // if (wishlistItems.length === 0) {
    //     return <p className="text-center text-lg">Your wishlist is empty</p>;
    // }

    return (
        <>
        {wishlistItems.length < 1 ? (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your wishlist is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your wishlist.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )
            :
            (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {wishlistItems.map((item) => (
                <ProductCard key={item.id} data={item} showRemoveButton={true} />
            ))}
        </div>)}

        </>
    );
};

export default Wishlist;
