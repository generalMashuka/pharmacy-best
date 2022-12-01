const React = require('react');
const Layout = require('./Layout');

// React-компонент
function Busket({ products, user }) {
	return (
		<Layout user={user}>
			<div>
				{products.map((product) => {
					<div>
						<div>{product.productId}</div>
						<div>{product.count_item}</div>
						<div>Delete</div>
					</div>;
				})}
			</div>
		</Layout>
	);
}

module.exports = Busket;
