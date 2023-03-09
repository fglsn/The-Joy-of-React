import React from 'react';

import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
	AF: "Afghanistan",
	AL: "Albania",
	DZ: "Algeria",
  }
*/

function App() {
	const [country, setCountry] = React.useState('');

	return (
		<form>
			<fieldset>
				<legend>Shipping Info</legend>
				<label htmlFor="country">Country:</label>
				<select
					required
					id="country"
					name="country"
					defaultValue={country}
					onChange={(event) => {
						setCountry(event.target.value);
					}}
				>
					<option value={''}>- Select -</option>
					<optgroup label="Countries">
						{Object.entries(COUNTRIES).map(
							([id, label]) => {
								return (
									<option key={id} value={id}>
										{label}
									</option>
								);
							}
						)}
					</optgroup>
				</select>
			</fieldset>

			<p className="country-display">
				Selected country: {COUNTRIES[country]}
			</p>

			<button>Submit</button>
		</form>
	);
}

export default App;