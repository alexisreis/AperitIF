import { Search, Option, Detail } from "searchpal";
import React, {useState} from "react";

const SearchBar = ({ cocktails, session }) => {

	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)}>Rechercher un cocktail</button>
			<Search
				labels={{
					results: "Cocktails trouvés",
					subtitle: "Recherche ton meilleur breuvage aussi",
					noResults: {title: "Aucun cocktail trouvé", subtitle: "Désolé tu vas avoir soif"}
				}}
				label="Rechercher un cocktail..."
				dark={false}
				open={open}
				algo={"combo"}
				onClose={() => setOpen(false)}
				link={({ href, children }) => <a href={href}>{children}</a>}

			>
				{cocktails.map((cocktail) => (
					<Option
						label={cocktail.name}
						sublabel={cocktail.name}
						img={{ src: cocktail.img, alt: `${cocktail.name} profile picture` }}
						href={`/${cocktail.name}`}
						keywords={(getKeywords) =>
							getKeywords(
								cocktail.name,
							)
						}
						key={cocktail.name}
					>
					</Option>
				))}
			</Search>
		</>
	);
};

export default SearchBar;