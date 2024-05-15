"use client"
import { useState } from "react";
import horseRacingFactsData from "@/app/_mockData";
import {
    createColumnHelper,
} from '@tanstack/react-table';
import Table from "@/app/_components/Table";
import styles from "./styles.module.css";

const horseRacingfacts: HorseRacingfact[] = horseRacingFactsData;
const columnHelper = createColumnHelper<HorseRacingfact>() //Pass User type as the generic TData type

export default function HorseRacingFactsTable() {
    const [data, setData] = useState(() => [...horseRacingfacts])
    const columns = [
        columnHelper.accessor('FECHA', {
            header: () => 'FECHA',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('HIPÓDROMO', {
            header: () => 'HIPÓDROMO',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('EVENTO', {
            header: () => 'EVENTO',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('GRADO', {
            header: () => 'GRADO',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('PREMIO', {
            header: () => 'PREMIO',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('DISTANCIA', {
            header: () => 'DISTANCIA',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('EDAD', {
            header: () => 'EDAD',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('SEXO', {
            header: () => 'SEXO',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('SUPERFICIE', {
            header: () => 'SUPERFICIE',
            cell: info => info.renderValue(),
        }),
    ]
    return (
        <Table data={data} columns={columns} styles={styles}/>
    )
}