import { Search, Option, Detail } from "searchpal";
import React, {useState} from "react";
import "./SearchBar.scss"

const SearchBar = ({ cocktails, session }) => {

	const [open, setOpen] = useState(false);

	return (
		<>
			{!open ? <div id="searchbar" onClick={() => setOpen(true)}>
				<div id="searchbar-inner">
					<svg viewBox="0 0 24 24" aria-hidden="true"
					     xmlns="http://www.w3.org/2000/svg"
					     id="searchbar-icon">
						<path
							d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
					</svg>
					<div id="searchbar-text-div">
						<input type="text"
						       placeholder="Rechercher un cocktail..."
						       role="combobox" aria-expanded="false"
						       aria-controls="298dc1ea-4e6b-43de-85b6-a533bb79cfe2-results"
						       id="searchbar-label"
						       autoComplete="off" className="sc-iTFTee dZgGse"
						       value=""/>

					</div>
				</div>
			</div> : null}

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
						href={`/#/cocktail/${cocktail.name}`}
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
	)
};

export default SearchBar;