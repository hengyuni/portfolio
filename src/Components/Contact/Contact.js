import React from "react";
import * as contactStyle from "./Contact.module.css";

const Contact = () => {
	return (
		<div className={contactStyle.contacContainer}>
			<b>Email:</b>{" "}
			<a className={contactStyle.a} href="mailto: hengyuni@gmail.com">
				hengyuni@gmail.com
			</a>
		</div>
		// <div className={contactStyle.contactContainer}>
		//   <form className={contactStyle.form}>
		//     {/* <h2 className={contactStyle.h2}>Contact form</h2> */}

		//     <label className={contactStyle.label}>Name</label>
		//     <input
		//       placeholder="Name"
		//       className={contactStyle.input}
		//     />

		//     <label className={contactStyle.label}>Email</label>
		//     <input
		//       placeholder="Email"
		//       className={contactStyle.input}
		//     />

		//     <label className={contactStyle.label}>Message</label>
		//     <textarea
		//       placeholder="Message"
		//       className={contactStyle.textarea}
		//     />

		//     <button type="submit" className={contactStyle.button}>Submit</button>

		//   </form>
		// </div>
	);
};

export default Contact;
