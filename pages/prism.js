import React, { Component } from 'react'

const data = [
    {
        "name": "Mira Saraf",
        "designation": "Vice President | ICF Certified Coach | Trainer",
        "company": "PrisMind",
        "phone": "91 98113 72806",
        "email": "mira.saraf@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/mira-saraf-acc-917b39b",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Nachiket Joshi",
        "designation": "Manager of Program Design & Delivery",
        "company": "PrisMind",
        "phone": "91 81692 22252",
        "email": "nachiket.joshi@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/nachiket-joshi-9281b75a/",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Bhargav Patwardhan",
        "designation": "Experiential Educator / Facilitator",
        "company": "PrisMind",
        "phone": "91 98196 89281",
        "email": "bhargav.patwardhan@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/bhargav-patwardhan-3949a876/",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Farheen Sayed",
        "designation": "Experiential Educator / Facilitator",
        "company": "PrisMind",
        "phone": "91 70455 12876",
        "email": "farheen.sayed@prismindindia.com",
        "linkedin": null,
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Akash Srivastava",
        "designation": "Creative Genius",
        "company": "PrisMind",
        "phone": "91 8377836659",
        "email": "akash.srivastava@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/akash-srivastava-76991422a",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Rakesh Saraf",
        "designation": "Mentor",
        "company": "PrisMind",
        "phone": "91 98111 02036",
        "email": "rakesh.saraf@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/rakesh-saraf-a8b382/",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Ashish Aggarwal",
        "designation": "Client Relationship Manager",
        "company": "PrisMind",
        "phone": "91 98100 33173",
        "email": "ashish.aggarwal@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/ashish-aggarwal-a2a89943",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Kawita Kumari",
        "designation": "Client Relationship Manager",
        "company": "PrisMind",
        "phone": "91 99102 00746",
        "email": "kawita.kumari@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/kawita-kumari-176b86121",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Ankur Khasnis",
        "designation": "Client Relationship Manager",
        "company": "PrisMind",
        "phone": "91 99300 06179",
        "email": "ankur.khasnis@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/ankurkhasnis",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Shruti Sood",
        "designation": "Associate Vice President - HR and Admin",
        "company": "PrisMind",
        "phone": "91 99713 02028",
        "email": "shruti.sood@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/shruti-sood-b4657b50",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Ashok Meher",
        "designation": "Associate Vice President - Finance",
        "company": "PrisMind",
        "phone": "91 98186 46302",
        "email": "ashok.meher@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/ashok-meher-005a2263",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Ravi Singh",
        "designation": "Accounts Officer",
        "company": "PrisMind",
        "phone": "91 90159 61068",
        "email": "ravi.singh@prismindindia.com",
        "linkedin": null,
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Sandhya Murukan",
        "designation": "Program Operations Manager",
        "company": "PrisMind",
        "phone": "91 98995 48613",
        "email": "sandhya.murukan@prismindindia.com",
        "linkedin": "https://www.linkedin.com/in/sandhya-murukan-78713ab1",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Shruti Sood",
        "designation": "Associate Vice President - HR and Admin",
        "company": "Windsor Specialty Services",
        "phone": "91 99713 02028",
        "email": "shruti@windsorindia.com",
        "linkedin": "https://www.linkedin.com/in/shruti-sood-b4657b50",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Sony Kunwar",
        "designation": "Senior Vice President",
        "company": "Windsor Specialty Services",
        "phone": "91 99998 03651",
        "email": "sony@windsorindia.com",
        "linkedin": "https://www.linkedin.com/in/sony-kunwar-54359432",
        "companyUrl": "https://www.prismindindia.com/"
    },
    {
        "name": "Varsha Patwal",
        "designation": "Manager - Strategic Planning",
        "company": "Windsor Specialty Services",
        "phone": "91 87430 80427",
        "email": "varsha@windsorindia.com",
        "linkedin": "https://www.linkedin.com/in/varsha-patwal-ab78ba17b",
        "companyUrl": "https://www.prismindindia.com/"
    }
]

const myFunction = (html) => {
	navigator.clipboard.writeText(html)
}

class Index extends Component {
	render() {
		const signatures = data.map((sign) => {

            const html = `
                <html>
                    <body style="margin: 10px 0">
                        <table style='font-family: Helvetica;' width="631" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td width="160" style="vertical-align: middle; text-align: center; padding: 0 20px 0 10px">
										<a href='${sign.companyUrl}'><img width='75' style="border: none;" src="https://www.windsordigital.in/assets/img/prismind-logo.jpg" /></a>
                                    </td>
                                    <td width="1"><hr style='border:0; border-left: 2px solid black; height: 90px;' /></td>
                                    <td width="450" style="vertical-align: middle; text-align: center; padding: 0 10px 0 20px;">
                                        <table cellpadding="0" border="0" style="text-align: left;" align="left">
                                            <tr>
                                                <td><span style='font-weight: bold; font-size: 18px; color: #000;'>${sign.name}</span></td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 14px;font-weight: bold;'>${sign.company}</td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 14px;'>${sign.designation}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 4px 0;'>
                                                    <table width="450" cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style='font-size: 12px;'><span style='color: #f2c201;'>P</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='tel:+${sign.phone}'>+${sign.phone}</a></td>
                                                            <td style='font-size: 12px;'><span style='color: #f2c201;'>E</span>: <a  target='_blank' style='text-decoration: none; color: inherit;' href='mailto: ${sign.email}'>${sign.email}</a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style='font-size: 12px;'><span style='color: #f2c201;'>W</span>: <a style='text-decoration: none; color: inherit;' href='${sign.companyUrl}'>${sign.companyUrl}</a></td>
                                            </tr>
                                            <tr>
                                                <td style='padding-top: 8px; ${ sign.linkedin ? '' : 'display: none;' }'><a target='_blank' href='${sign.linkedin}'><img style='width: 17px; height: 17px;' src='https://www.windsordigital.in/assets/img/LinkedIn.jpg' /></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>
            `

			return (
				<div style={{ padding: '0 50px' }} key={sign.name} >
					<h1 style={{ display: 'flex', alignItems: 'center'}}>{sign.name} <button style={{ marginLeft: '50px'}} onClick={ () => myFunction(html) }>Copy HTML</button></h1>
					<div style={{ marginBottom: '50px' }}>
						{ html }
					</div>
					<div style={{ marginBottom: '50px' }}>
						<div width='100%' height='150' dangerouslySetInnerHTML={{ __html: html }}></div>
					</div>

				</div>
			)
		})

		return (
			<div>
				<p>{signatures}</p>
			</div>
		)
	}
}

export default Index
