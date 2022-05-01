import React from 'react';
import Table from '../components/TableDatos'
import ButtonPost from '../components/buttons/ButtonPost'
import '../assets/styles/BodyTable.css'

const BodyTable = ({datos, columns}) => {

	return (
		<div className="pad">
			<Table datos={datos} columns={columns} />
			<ButtonPost />
		</div>
	);
};

export default BodyTable;
