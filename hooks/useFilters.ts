import { useMemo, useState } from "react";


type FilterConfig<T> = {
  [key: string]: (item: T) => string | number | boolean | undefined;
};

export function useFilters<T>( items: T[], config: FilterConfig<T>)
{
    const [filters, setFilters] = useState<Record<string, string[]>>({});

    const filterOptions = useMemo(() => {
        const options: Record<string, string[]> = {};

        Object.entries(config).forEach(([key, getter]) => {
            const values = items
                .map((item) => getter(item))
                .filter((value) => value !== undefined && value !== null)
                .map(String);

            options[key] = [...new Set(values)];
        });
        return options;
    }, [items, config]);

    /**
    * Active / désactive une valeur de filtre
    */
    const setFilter = (key: string, value: string) => {
        setFilters((current) => {
        const values = current[key] ?? [];

        const newValues = values.includes(value)
            ? values.filter((item) => item !== value)
            : [...values, value];

            return {
                ...current,
                [key]: newValues,
            };
        });
    };

    /**
    * Filtrage
    */
    const filteredItems = useMemo(() => {
        return items.filter((item) => {

            return Object.entries(filters).every(

                ([key, selectedValues]) => {

                    if (selectedValues.length === 0) {
                        return true;
                    }
                    const value = config[key]?.(item);
                    return selectedValues.includes(String(value));
                }
            );
        });
    }, [items, filters, config]);

    const resetFilters = () => {
        setFilters({});
    };

    return {filters,filterOptions,filteredItems,setFilter,resetFilters,};
}