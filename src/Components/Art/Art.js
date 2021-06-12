import { useState, useEffect } from "react";
import "../../Styles/ArtPage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const apiKey = process.env.REACT_APP_SLATE_KEY;

function Art() {
	const [pic, setPic] = useState({});

	const getPics = async () => {
		const auth = `Basic ${process.env.REACT_APP_SLATE_KEY}`;

		const response = await fetch("https://slate.host/api/v2/get", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: auth,
			},
		});

		if (!response) {
			console.log("No response");
			return;
		}

		const data = await response.json();
		// console.log(JSON.stringify(data, null, 2));

		setPic(data);
		console.log(data);
		console.log(data.collections);
		if (data.error) {
			console.log(data);
		} else {
			const collections = data.collections;
			const user = data.user;
		}
		return data;
	};

	useEffect(() => {
		getPics();
	}, []);

	const [modal, setModal] = useState(false);
	const [tempSrc, setTempSrc] = useState("");

	const getImg = (imgSrc) => {
		setTempSrc(imgSrc);
		setModal(true);
		// console.log(imgSrc);
	};

	return (
		<>
			<div className={modal ? "modal open" : "modal"}>
				<img src={tempSrc} alt="" onClick={() => setModal(false)} />
			</div>
			<div className="grid">
				{pic.user === undefined
					? null
					: pic.user.library.map((image, id) => {
							let imgSrc = `https://slate.textile.io/ipfs/${image.cid}`;
							return (
								<div className="items" onClick={() => getImg(imgSrc)}>
									<LazyLoadImage
										effect="blur"
										delayTime="1550ms"
										height="100%"
										width="100%"
										className="item"
										alt={image.filename}
										src={imgSrc}
										onClick={() => getImg(imgSrc)}
									/>
								</div>
							);
					  })}
			</div>
		</>
	);
}

export default Art;
