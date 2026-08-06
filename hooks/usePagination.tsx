"use client";

import { useMemo, useState } from "react";


type usePaginationProps<T> = {
    items: T[];
    itemsPerPage: number;
    initialPage?: number;
}

export function usePagination<T> ({items, itemsPerPage, initialPage = 0}: usePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    const safePage = Math.min(
        Math.max(currentPage,0), totalPages - 1
    );

    const currentItems = useMemo(() => {
        const startIndex = safePage * itemsPerPage;

        return items.slice(startIndex, startIndex + itemsPerPage);
    }, [items, itemsPerPage, safePage]);

    const handleNextPage = () => {
        setCurrentPage((page) => Math.min(totalPages - 1, page + 1))
    };

    const handlePreviousPage = () => {
        setCurrentPage((page) => Math.max(0, page - 1))
    };

    const goToPage = (page: number) => {
        setCurrentPage(
            Math.min(Math.max(page, 0), totalPages - 1)
        );
    };

    return {
        currentItems,
        currentPage: safePage,
        totalPages,
        hasNextPage: safePage < totalPages - 1,
        hasPreviousPage: safePage > 0,
        handleNextPage,
        handlePreviousPage,
        goToPage,
        setCurrentPage,
    }
}