import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Items } from './Items';
import type { Book } from '@/entities/book/model/type';

type PaginatedItemsProps = {
  items: Book[];
  itemsPerPage: number;
};

export const Pagination: React.FC<PaginatedItemsProps> = ({ items, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container mx-auto w-full flex flex-col items-center">
      <div
        className="w-full grid gap-6 lg:gap-y-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 "
        style={{ gridAutoRows: 'fr' }}
      >
        <Items currentItems={currentItems} />
      </div>

      <div className="mt-10">
      <ReactPaginate
          breakLabel="..."
          nextLabel="›"
          previousLabel="‹"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 justify-center"
          pageClassName="px-0" // li wrapper
          pageLinkClassName="px-3 py-1 border rounded-md cursor-pointer block select-none"
          activeLinkClassName="bg-amber-200"
          previousClassName="cursor-pointer"
          nextClassName="cursor-pointer"
        />
      </div>
    </div>
  );
};
